import { bool, func, node, oneOf } from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { PanResponder, KeyboardAvoidingView, SafeAreaView, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { useEnvironment, useStyler } from '../../hooks';
import { Button } from '../Button';
import { Motion } from '../Motion';
import { Touchable } from '../Touchable';
import styles from './Dialog.style';

const { COLOR, DIALOG_BUTTON, MOTION, SPACE } = THEME;

export const Dialog = ({ children, onClose, position = 'center', visible, ...others }) => {
  const { IS_NATIVE } = useEnvironment();
  const [gesture, setGesture] = useState(undefined);
  const { VIEWPORT } = LAYOUT;
  const Y = visible ? 0 : position === 'top' ? -VIEWPORT.H : VIEWPORT.H;

  useEffect(() => {
    setGesture(undefined);
  }, [visible]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, { dy: y }) => {
          if (y >= 0 && gesture !== y) setGesture(y);
        },
        onPanResponderRelease: (event, { dy: y }) => {
          if (y > VIEWPORT.H / 6) onClose();
          setGesture(undefined);
        },
      }),
    [],
  );

  return (
    <Motion
      delay={visible ? 0 : MOTION.DURATION / 2}
      pointerEvents={IS_NATIVE && visible ? 'auto' : 'none'}
      style={styles.container}
      timeline={[{ property: 'opacity', value: visible ? 1 : 0 }]}
    >
      <SafeAreaView style={[styles.overlay, styles[position], others.styleOverlay]}>
        <KeyboardAvoidingView behavior={IS_NATIVE ? 'padding' : undefined} style={styles.keyboardView}>
          <Motion
            delay={visible && !gesture ? MOTION.DURATION / 2 : 0}
            duration={visible && gesture ? 0 : undefined}
            type={visible && gesture ? 'timing' : undefined}
            pointerEvents="auto"
            timeline={[{ property: 'translateY', value: visible ? gesture || Y : Y }]}
          >
            <View {...panResponder.panHandlers} style={[styles.content, ...useStyler(others)]}>
              {onClose ? (
                VIEWPORT.S ? (
                  <Touchable
                    onPress={onClose}
                    style={[
                      styles.buttonSwipe,
                      { backgroundColor: DIALOG_BUTTON.color || COLOR.TEXT },
                      others.styleButton,
                    ]}
                  />
                ) : (
                  <Button
                    color={COLOR.TRANSPARENT}
                    colorText={DIALOG_BUTTON.color || COLOR.TEXT}
                    icon="close"
                    iconSize={SPACE.L}
                    onPress={onClose}
                    size="S"
                    style={styles.button}
                  />
                )
              ) : (
                undefined
              )}
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
