import { array, bool, func, node, number, object, oneOfType } from 'prop-types';
import React, { createElement } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { Motion } from '../Motion';
import styles from './Viewport.style';

const { MOTION } = THEME;

export const Viewport = ({
  backward = false,
  children,
  onScroll,
  scroll = true,
  styleContent,
  visible = true,
  ...others
}) => {
  const handlenScroll = ({
    nativeEvent: {
      contentOffset: { y },
    },
  }) => {
    onScroll({ y });
  };
  const {
    VIEWPORT: { H: height, W: width },
  } = LAYOUT;

  return (
    <Motion
      duration={MOTION.DURATION}
      style={[styles.container, { height, width }, others.style]}
      timeline={
        backward && visible
          ? [{ property: 'translateX', value: -(width / 8) }]
          : [{ property: 'translateX', value: visible ? 0 : width }]
      }
    >
      <SafeAreaView style={styles.safeArea}>
        {createElement(
          scroll ? ScrollView : View,
          {
            style: [styles.content, styleContent],
            ...(scroll && onScroll ? { onScroll: handlenScroll, scrollEventThrottle: 32 } : {}),
          },
          children,
        )}
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
