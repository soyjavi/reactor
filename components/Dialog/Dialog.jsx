import { bool, func, node, oneOf } from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { PanResponder, KeyboardAvoidingView, SafeAreaView, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { useEnvironment, useStyler } from '../../hooks';
import { Button } from '../Button';
import { Motion } from '../Motion';
import styles from './Dialog.style';

const { COLOR, MOTION, SPACE } = THEME;

export const Dialog = ({ children, onClose, position = 'center', visible = false, ...others }) => {
  const { IS_NATIVE } = useEnvironment();

  const [top, setTop] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const { VIEWPORT } = LAYOUT;
  const Y = visible ? 0 : position === 'top' ? -VIEWPORT.H : VIEWPORT.H;

  useEffect(() => {
    if (visible) setTop(undefined);
  }, [visible]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, { dy: y }) => {
          if (y >= 0 && top !== y) setTop(y);
          setSwiping(true);
        },
        onPanResponderRelease: (event, { dy: y }) => {
          if (y > VIEWPORT.H / 6) onClose();
          setTop(undefined);
          setTimeout(() => setSwiping(false), MOTION.COLLAPSE);
        },
      }),
    [],
  );

  return (
    <Motion
      delay={visible ? 0 : MOTION.COLLAPSE}
      pointerEvents={IS_NATIVE && visible ? 'auto' : 'none'}
      style={styles.container}
      timeline={[{ property: 'opacity', value: visible ? 1 : 0 }]}
    >
      <SafeAreaView style={[styles.overlay, styles[position], others.styleOverlay]}>
        <KeyboardAvoidingView behavior={IS_NATIVE ? 'padding' : undefined} style={styles.keyboardView}>
          <Motion
            delay={visible && !swiping ? MOTION.EXPAND : 0}
            duration={top ? 0 : visible ? MOTION.EXPAND : MOTION.COLLAPSE}
            pointerEvents="auto"
            timeline={[{ property: 'translateY', value: visible && top ? top : Y }]}
            type={swiping ? 'spring' : undefined}
          >
            <View {...panResponder.panHandlers} style={[styles.content, ...useStyler(others)]}>
              {onClose ? (
                VIEWPORT.S ? (
                  <View style={[styles.buttonSwipe, { backgroundColor: COLOR.TEXT }, others.styleButton]} />
                ) : (
                  <Button
                    color={COLOR.TRANSPARENT}
                    colorText={COLOR.TEXT}
                    icon="close"
                    iconSize={SPACE.L}
                    onPress={onClose}
                    size="S"
                    style={styles.button}
                  />
                )
              ) : undefined}
              {children}
            </View>
          </Motion>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Motion>
  );
};

Dialog.propTypes = {
  children: node,
  onClose: func,
  position: oneOf(['center', 'top', 'bottom']),
  visible: bool,
};
