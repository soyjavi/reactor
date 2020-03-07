import { number, shape, string } from 'prop-types';
import React from 'react';
import { Animated } from 'react-native';

import { THEME } from '../../../common';
import styles from './Ripple.style';

const { COLOR } = THEME;
const DEFAULTS = {
  OPACITY: 0.3,
  RADIUS: 10,
};

const Ripple = ({ color, progress, range, x, y }) => (
  <Animated.View
    style={[
      styles.ripple,
      {
        top: y - DEFAULTS.RADIUS,
        left: x - DEFAULTS.RADIUS,
        backgroundColor: color,

        transform: [
          {
            scale: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5 / DEFAULTS.RADIUS, range / DEFAULTS.RADIUS],
            }),
          },
        ],

        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [DEFAULTS.OPACITY, 0],
        }),
      },
    ]}
  />
);

Ripple.propTypes = {
  color: string,
  progress: shape({}),
  range: number,
  x: number,
  y: number,
};

Ripple.defaultProps = {
  color: COLOR.WHITE,
  progress: new Animated.Value(0),
  range: 0,
  x: 0,
  y: 0,
};

export default Ripple;
