import { bool, func, number, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

import { htmlVideo } from './modules';
import styles from './Video.style';

const Video = ({ onLoad, height, width, ...inherit }) => {
  const dimensions = {
    height,
    width,
    maxHeight: height,
    maxWidth: width,
  };

  return (
    <View style={[styles.container, dimensions, inherit.style]}>
      <WebView
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        scalesPageToFit={false}
        scrollEnabled={false}
        onLoadStart={onLoad}
        source={{ html: htmlVideo({ height, width, ...inherit }) }}
        style={[styles.webView, dimensions]}
      />
    </View>
  );
};

Video.propTypes = {
  autoPlay: bool,
  controls: bool,
  height: number,
  onLoad: func,
  preload: bool,
  source: string.isRequired,
  width: number,
};

Video.defaultProps = {
  autoPlay: false,
  controls: false,
  height: 180,
  onLoad() {},
  preload: false,
  width: 320,
};

export default Video;
