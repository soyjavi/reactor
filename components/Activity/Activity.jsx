import PropTypes from 'prop-types';
import React from 'react';
import { Animated } from 'react-native';

import { THEME } from '../../common';
import { useStyler } from '../../hooks';
import { Row } from '../Row';
import styles from './Activity.style';

const {
  COLOR,
  MOTION: { DURATION },
} = THEME;

export const Activity = ({ color = COLOR.LIGHTEN, size = 'S', ...others }) => {
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
    <Row justify="center" style={useStyler(others)}>
      {opacities.map((value, index) => (
        <Animated.View
          key={index.toString()}
          style={[styles.dot, styles[size], { backgroundColor: color, opacity: value }]}
        />
      ))}
    </Row>
  );
};

Activity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['XS', 'S', 'M']),
};

export default Activity;
