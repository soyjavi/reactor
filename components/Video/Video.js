import {
  bool, func, number, string,
} from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';

import Activity from '../Activity';
import { embedUrl } from './modules';
import styles from './Video.style';

class Video extends Component {
  static propTypes = {
    autoPlay: bool,
    controls: bool,
    height: number,
    onLoad: func,
    preload: bool,
    source: string.isRequired,
    width: number,
  };

  static defaultProps = {
    autoPlay: false,
    controls: false,
    height: 180,
    onLoad() {},
    preload: false,
    width: 320,
  };

  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  shouldComponentUpdate({ autoPlay, source }, { ready }) {
    const { el = {}, props, state } = this;

    if (el.play && el.pause) el[autoPlay ? 'play' : 'pause']();
    return (source !== props.source || ready !== state.ready);
  }

  _onLoad = () => {
    const { props: { onLoad } } = this;

    this.setState({ ready: true });
    onLoad();
  }

  render() {
    const {
      _onLoad,
      props: {
        autoPlay, controls, height, onLoad, preload, source, width, ...inherit
      },
      state: { ready },
    } = this;
    const embed = embedUrl(source);
    const dimensions = {
      height, width, maxHeight: height, maxWidth: width,
    };
    const pointerEvents = !controls ? 'none' : undefined;

    return (
      <View
        pointerEvents={!controls && autoPlay ? 'none' : undefined}
        style={[styles.container, dimensions, !ready && styles.loading, inherit.style]}
      >
        { !ready && <Activity size="large" style={styles.activity} /> }

        { embed
          ? (
            <iframe
              allowFullScreen
              key={embed}
              frameBorder={0}
              onLoad={_onLoad}
              pointerEvents={pointerEvents}
              width="100%"
              height="100%"
              src={`${embed}&autoplay=${autoPlay ? 1 : 0}`}
              title={embed}
            />
          )
          : (
            <video
              {...inherit}
              ref={(el) => { this.el = el; }}
              autoPlay={autoPlay}
              controls={controls ? 'true' : undefined}
              onLoadedData={_onLoad}
              pointerEvents={pointerEvents}
              preload={preload ? 'auto' : 'none'}
              style={{ objectFit: 'cover', width, height }}
            >
              <source src={source} />
              <track kind="captions" />
            </video>
          )}
      </View>
    );
  }
}

export default Video;
