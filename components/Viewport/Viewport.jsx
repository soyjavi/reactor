import { array, bool, func, node, number, object, oneOfType } from 'prop-types';
import React, { createElement } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import Motion from '../Motion';
import styles from './Viewport.style';

const { MOTION } = THEME;

const Viewport = ({ backward, children, onScroll, scroll, styleContent, visible, ...inherit }) => {
  const handlenScroll = ({
    nativeEvent: {
      contentOffset: { y },
    },
  }) => {
    onScroll({ y });
  };

  const height = LAYOUT.VIEWPORT.H;
  const width = LAYOUT.VIEWPORT.W;
  const props = scroll && onScroll ? { onScroll: handlenScroll, scrollEventThrottle: 32 } : {};

  return (
    <Motion
      duration={MOTION.DURATION}
      style={[styles.container, { height, width }, inherit.style]}
      timeline={
        backward && visible
          ? [{ property: 'translateX', value: -64 }]
          : [{ property: 'translateX', value: visible ? 0 : width }]
      }
    >
      <SafeAreaView style={styles.safeArea}>
        {createElement(scroll ? ScrollView : View, { ...props, style: [styles.content, styleContent] }, children)}
      </SafeAreaView>
    </Motion>
  );
};

Viewport.propTypes = {
  backward: bool,
  children: node,
  onScroll: func,
  scroll: bool,
  styleContent: oneOfType([array, number, object]),
  visible: bool,
};

Viewport.defaultProps = {
  backward: false,
  children: undefined,
  onScroll: undefined,
  scroll: true,
  styleContent: [],
  visible: true,
};

export default Viewport;
