import { bool, func, node } from 'prop-types';
import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { useEnvironment } from '../../hooks';
import { Button, Motion } from '..';
import styles from './Dialog.style';

const { COLOR, MOTION, SPACE } = THEME;

export const Dialog = ({ background = true, children, highlight, onClose, reverse, visible, ...others }) => {
  const { IS_NATIVE } = useEnvironment();

  const {
    VIEWPORT: { H },
  } = LAYOUT;
  let translateY = 0;

  if (!visible) translateY = (reverse ? -H : H) * 0.8;

  return (
    <Motion
      delay={visible ? 0 : MOTION.DURATION}
      pointerEvents={(background || IS_NATIVE) && visible ? 'auto' : 'none'}
      style={styles.container}
      timeline={[{ property: 'opacity', value: visible ? 1 : 0 }]}
    >
      <SafeAreaView style={[styles.overlay, background && styles.background, others.styleOverlay]}>
        <KeyboardAvoidingView behavior={IS_NATIVE ? 'padding' : undefined} style={styles.keyboardView}>
          <Motion
            delay={visible ? MOTION.DURATION : 0}
            duration={MOTION.DURATION}
            pointerEvents="auto"
            timeline={[{ property: 'translateY', value: translateY }]}
          >
            <View style={[{ backgroundColor: highlight ? COLOR.BLACK : COLOR.WHITE }, others.style]}>
              {onClose && (
                <Button
                  color={COLOR.TRANSPARENT}
                  colorContent={highlight ? COLOR.WHITE : COLOR.BLACK}
                  icon="close"
                  iconSize={SPACE.L}
                  onPress={onClose}
                  size="S"
                  style={styles.button}
                />
              )}
              <View style={[styles.content, onClose && styles.contentWithButton]}>{children}</View>
            </View>
          </Motion>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Motion>
  );
};

Dialog.propTypes = {
  background: bool,
  children: node,
  highlight: bool,
  onClose: func,
  reverse: bool,
  visible: bool,
};
