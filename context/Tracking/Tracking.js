import { bool, node, shape } from 'prop-types';
import React, { createContext, PureComponent } from 'react';
import { NetInfo } from 'react-native';

import { ENV, SHAPE, Storage } from '../../common';
import { fetch, Fingerprint, getCookie } from './modules';

const { IS_WEB, IS_SERVER, PKG } = ENV;
const { Provider, Consumer: ConsumerTracking } = createContext('reactor:tracking');
const STORE_EVENTS = `${PKG.name}:events`;
const MINUBE_USER_ID = 'mn_user_id';
const AMPLITUDE_DATA = 'mn_amplitude_data';
let eventId = 1;

class ProviderTracking extends PureComponent {
  static propTypes = {
    children: node,
    session: shape(SHAPE.SESSION),
    signup: bool,
  };

  static defaultProps = {
    children: undefined,
    session: undefined,
    signup: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      fingerprint: undefined,
      session: undefined,
    };
  }

  async componentWillMount() {
    const { _signup, props: { session, signup } } = this;

    if (signup) _signup(session);
  }

  componentWillReceiveProps({ session, signup }) {
    const { _signup, props } = this;

    if (signup === true && signup !== props.signup) _signup(session);
  }

  _signup = async (props = {}) => {
    const { authorization, ...session } = props;
    const { _syncEvents } = this;
    let cookie;
    let fingerprint;

    if (!IS_SERVER) {
      fingerprint = await Fingerprint();
      if (IS_WEB) {
        cookie = getCookie('reactor:request');
        const { deviceId, sessionId } = await Storage.get(AMPLITUDE_DATA) || {};
        const userId = await Storage.get(MINUBE_USER_ID);

        if (deviceId) session.device_id = deviceId;
        if (sessionId) session.session_id = sessionId;
        if (userId) session.user_id = userId;
      }

      await fetch({
        authorization,
        ...fingerprint, // uuid & device_id
        ...session, // user_id && session_id && device_id
        userProperties: cookie ? JSON.parse(cookie) : cookie,
      },
      'session');
    }

    this.setState({
      isConnected: true,
      fingerprint,
      session: { ...session, session_id: new Date().getTime() },
    });

    if (!IS_SERVER) {
      _syncEvents();
      NetInfo.addEventListener('connectionChange', _syncEvents);
    }
  }

  _syncEvents = async () => {
    const { state } = this;
    const events = await Storage.get(STORE_EVENTS) || [];
    const isConnected = await NetInfo.isConnected.fetch();

    if (isConnected && events.length > 0) {
      await fetch(events); // @TODO: We should refactor this area
      await Storage.set(STORE_EVENTS, []);
    }

    if (isConnected !== state.isConnected) this.setState({ isConnected });
  }

  _storeEvent = async (event) => {
    const events = await Storage.get(STORE_EVENTS) || [];
    await Storage.set(STORE_EVENTS, [...events, event]);
  }

  logEvent = ({ type, ...props } = {}) => {
    if (IS_SERVER) return;

    const {
      _storeEvent, props: { session: { authorization } = {} }, state: { isConnected, fingerprint, session },
    } = this;

    const event = {
      authorization,
      ...fingerprint, // uuid & device_id
      ...session, // user_id && session_id && device_id
      event_id: eventId,
      event_properties: props,
      event_type: type,
      sequence_number: eventId,
    };
    eventId += 1;

    if (isConnected) fetch(event);
    else _storeEvent(event);
  }

  render() {
    const { logEvent, props: { children }, state = {} } = this;

    return (
      <Provider value={{ logEvent, ...state }}>
        { children }
      </Provider>
    );
  }
}

export { ConsumerTracking, ProviderTracking };
