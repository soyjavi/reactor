import { arrayOf, bool, node, number, shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Animated, Easing, View } from 'react-native';

import { SHAPE, THEME } from '../../common';
import { useStyler } from '../../hooks';
import { buildStyle } from './modules';

const {
  MOTION: { DEFAULTS = {}, EXPAND = 250, TYPE = 'standard' },
} = THEME;

const EASING = {
  spring: Easing.bezier(0.47, 1.64, 0.41, 0.8),
  standard: Easing.bezier(0.4, 0.0, 0.2, 1),
};

export const Motion = ({
  children,
  config = DEFAULTS,
  delay = 0,
  disabled,
  duration = EXPAND,
  timeline = [],
  type = TYPE,
  ...others
}) => {
  const [state, setState] = useState();

  useEffect(() => {
    let nextState = state;

    if (!nextState) {
      nextState = {};
      timeline.forEach(({ property, value }) => {
        nextState[property] = new Animated.Value(value);
      });
      setState(nextState);
    } else {
      const motions = timeline.map(({ property, value: toValue }) =>
        Animated.timing(nextState[property], {
          ...config,
          toValue,
          delay,
          duration,
          easing: EASING[type] || EASING.standard,
        }).start(),
      );
      Animated.parallel(motions).start();
    }
  }, [delay, duration, timeline]);

  return React.createElement(
    disabled ? View : Animated.View,
    {
      style: [!disabled && buildStyle(timeline, state), ...useStyler(others)],
      pointerEvents: others.pointerEvents || undefined,
    },
    children,
  );
};

Motion.propTypes = {
  children: node,
  config: shape({}),
  delay: number,
  disabled: bool,
  duration: number,
  timeline: arrayOf(shape(SHAPE.MOTION)),
  type: string,
};
