import { arrayOf, bool, node, number, shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';

import { SHAPE, THEME } from '../../common';
import { useStyler } from '../../hooks';
import { buildStyle } from './modules';

const {
  MOTION: { DEFAULTS = {}, DURATION = 225, TYPE = 'timing' },
} = THEME;

export const Motion = ({
  children,
  config = DEFAULTS,
  delay = 0,
  disabled,
  duration = DURATION,
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
        Animated[type](nextState[property], { toValue, ...config, delay, duration }).start(),
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
