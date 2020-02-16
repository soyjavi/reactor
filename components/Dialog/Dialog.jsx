import { bool, func, node, oneOf } from 'prop-types';
import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { useEnvironment, useStyler } from '../../hooks';
import { Button, Motion } from '..';
import styles from './Dialog.style';

const { COLOR, MOTION, SPACE } = THEME;

export const Dialog = ({ children, highlight, onClose, position = 'center', visible, ...others }) => {
  const { IS_NATIVE } = useEnvironment();

  const {
    VIEWPORT: { H },
  } = LAYOUT;
  const translateY = visible ? 0 : (position === 'top' ? -H : H) * 0.68;

  return (
    <Motion
      delay={visible ? 0 : MOTION.DURATION}
      pointerEvents={IS_NATIVE && visible ? 'auto' : 'none'}
      style={styles.container}
      timeline={[{ property: 'opacity', value: visible ? 1 : 0 }]}
    >
      <SafeAreaView style={[styles.overlay, styles[position], others.styleOverlay]}>
        <KeyboardAvoidingView behavior={IS_NATIVE ? 'padding' : undefined} style={styles.keyboardView}>
          <Motion
            delay={visible ? MOTION.DURATION : 0}
            duration={MOTION.DURATION}
            pointerEvents="auto"
            timeline={[{ property: 'translateY', value: translateY }]}
          >
            <View style={[styles.content, ...useStyler(others)]}>
              {onClose && (
                <Button
                  color={COLOR.TRANSPARENT}
                  colorText={highlight ? COLOR.WHITE : COLOR.BLACK}
                  icon="close"
                  iconSize={SPACE.L}
                  onPress={onClose}
                  size="S"
                  style={styles.button}
                />
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
  highlight: bool,
  onClose: func,
  position: oneOf(['center', 'top', 'bottom']),
  visible: bool,
};
