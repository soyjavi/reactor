import { string } from 'prop-types';
import { Animated, View } from 'react-native';
import React from 'react';
import styles from './Activity.style';

import { THEME } from '../../common';

const {
  COLOR,
  MOTION: { DURATION },
} = THEME;

export const Activity = ({ color = COLOR.BASE, size, ...others }) => {
  const opacities = [new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)];
  let opacity = 1;

  const animate = (initialDot) => {
    let dot = initialDot;

    if (dot >= opacities.length) {
      dot = 0;
      opacity = opacity === 0 ? 1 : 0;
    }

    Animated.timing(opacities[dot], { toValue: opacity, duration: DURATION / 2 }).start(() => animate(dot + 1));
  };

  animate(0);

  return (
    <View style={[styles.container, others.style]}>
      {opacities.map((value, index) => (
        <Animated.View
          key={index.toString()}
          style={[styles.dot, styles[size], { backgroundColor: color, opacity: value }]}
        />
      ))}
    </View>
  );
};

Activity.propTypes = {
  color: string,
  size: string,
};

export default Activity;
