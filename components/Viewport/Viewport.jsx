import { array, bool, func, node, number, object, oneOfType } from 'prop-types';
import React, { useEffect, useMemo, useState, createElement } from 'react';
import { PanResponder, SafeAreaView, ScrollView, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { Motion } from '../Motion';
import styles from './Viewport.style';

const { MOTION } = THEME;

export const Viewport = ({
  backward = false,
  children,
  onClose,
  onScroll,
  scroll = true,
  styleContent,
  visible = true,
  ...others
}) => {
  const [right, setRight] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const { VIEWPORT } = LAYOUT;

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, { dx: x, x0: originX }) => {
          if (originX > VIEWPORT.W / 2) return;
          if (x >= 0 && right !== x) setRight(x);
          setSwiping(true);
        },
        onPanResponderRelease: (event, { dx: x }) => {
          if (x > VIEWPORT.W / 5) onClose();
          else {
            setRight(undefined);
            setTimeout(() => setSwiping(false), MOTION.COLLAPSE);
          }
        },
        onPanResponderTerminate: (event, { dy: y }) => {
          if (Math.abs(y) < 5) return;
          setRight(undefined);
          setTimeout(() => setSwiping(false), MOTION.COLLAPSE);
        },
      }),
    [],
  );

  useEffect(() => {
    setRight(undefined);
    setSwiping(false);
  }, [visible]);

  const handleScroll = ({
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
      duration={right ? 0 : visible ? MOTION.EXPAND : MOTION.COLLAPSE}
      style={[styles.container, { height, width }, others.style]}
      timeline={
        right
          ? [{ property: 'translateX', value: right }]
          : backward && visible
          ? [{ property: 'translateX', value: -(width / 8) }]
          : [{ property: 'translateX', value: visible ? 0 : width }]
      }
      type={swiping ? 'spring' : undefined}
    >
      <SafeAreaView {...(onClose && visible ? panResponder.panHandlers : undefined)} style={styles.safeArea}>
        {createElement(
          scroll ? ScrollView : View,
          {
            style: [styles.content, styleContent],
            ...(scroll && onScroll ? { onScroll: handleScroll, scrollEventThrottle: 32 } : {}),
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
  onClose: func,
  onScroll: func,
  scroll: bool,
  styleContent: oneOfType([array, number, object]),
  visible: bool,
};
