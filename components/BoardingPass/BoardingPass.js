import {
  bool, func, node, shape, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import fetch from './modules/fetch';

class BoardingPass extends PureComponent {
  static propTypes = {
    children: node,
    enabled: bool,
    endpoint: string,
    headers: shape({}),
    loading: node,
    method: string,
    onError: func,
    onResponse: func,
    parameters: shape({}),
    reload: bool,
    secure: bool,
    service: string,
  };

  static defaultProps = {
    children: undefined,
    enabled: true,
    endpoint: undefined,
    headers: {},
    loading: <View />,
    method: 'GET',
    onError() {},
    onResponse() {},
    parameters: {},
    reload: false,
    secure: false,
    service: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {
      busy: true,
      error: undefined,
    };
  }

  componentDidMount() {
    this.doFetch(this.props);
  }

  componentWillReceiveProps({ reload, ...props }) {
    if (reload) this.doFetch(props);
  }

  doFetch = ({
    enabled, endpoint, headers, method, onError, onResponse, parameters, secure, service,
  }) => {
    if (!enabled || !service) return;
    this.setState({ busy: true, error: undefined });
    fetch({
      endpoint, headers, method, secure, service, ...parameters,
    })
      .then((response) => {
        onResponse(response);
        this.setState({ busy: false });
      })
      .catch((error) => {
        onError(error);
        this.setState({ busy: false, error });
      });
  }

  render() {
    const { props: { children, enabled, loading }, state: { busy, error } } = this;

    return ((busy && enabled) || error) ? loading : children;
  }
}

export { fetch };

export default BoardingPass;
