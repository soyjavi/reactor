import { number } from 'prop-types';
import React, { useState } from 'react';
import { View } from 'react-native';

import { Motion } from '..';
import styles from './ProgressBar.style';

const ProgressBar = ({ progress = 0, ...others }) => {
  const [layoutWidth, setLayoutWidth] = useState(0);

  return (
    <View
      onLayout={({ nativeEvent: { layout = {} } }) => setLayoutWidth(layout.width)}
      style={[styles.container, others.style, others.trackColor && { backgroundColor: others.trackColor }]}
    >
      <Motion
        duration={others.duration}
        style={[styles.progress, others.color && { backgroundColor: others.color }]}
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
