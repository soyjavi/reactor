import { number } from 'prop-types';
import React, { useState } from 'react';
import { View } from 'react-native';

import Motion from '../Motion';
import styles from './ProgressBar.style';

const ProgressBar = ({ progress = 0, ...inherit }) => {
  const [layoutWidth, setLayoutWidth] = useState(0);

  return (
    <View
      onLayout={({ nativeEvent: { layout = {} } }) => setLayoutWidth(layout.width)}
      style={[
        styles.container,
        inherit.style,
        inherit.trackColor && { backgroundColor: inherit.trackColor },
      ]}
    >
      <Motion
        duration={inherit.duration}
        style={[styles.progress, inherit.color && { backgroundColor: inherit.color }]}
        timeline={[{ property: 'width', value: progress * layoutWidth }]}
        type="timing"
      />
    </View>
  );
};

ProgressBar.propTypes = {
  progress: number,
};

ProgressBar.defaultProps = {
  progress: undefined,
};

export default ProgressBar;
