import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { useStyler } from '../../hooks';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Motion } from '../Motion';
import { Row } from '../Row';
import { Text } from '../Text';
import styles from './Snackbar.style';

const { COLOR, MOTION, SPACE } = THEME;

export const Snackbar = ({
  caption = '',
  children,
  color = COLOR.BLACK,
  icon,
  iconSize = SPACE.XL,
  onClose,
  position = 'bottom',
  visible,
  ...others
}) => {
  const { VIEWPORT } = LAYOUT;

  return (
    <SafeAreaView pointerEvents={visible ? 'auto' : 'none'} style={[styles.container, styles[position]]}>
      <Motion
        duration={visible ? MOTION.EXPAND : MOTION.COLLAPSE}
        timeline={[{ property: 'translateY', value: visible ? 0 : position === 'top' ? -VIEWPORT.H : VIEWPORT.H }]}
      >
        <View style={[styles.content, { backgroundColor: color }, ...useStyler(others)]}>
          <Row alignItems="center" pointerEvents="auto">
            {icon && (
              <Icon color={COLOR.WHITE} family={others.family} size={iconSize} value={icon} style={styles.icon} />
            )}
            <View style={styles.caption}>
              <Text color={COLOR.WHITE}>{caption}</Text>
              {children}
            </View>
            {onClose && (
              <Button color={color} icon="close" iconSize={SPACE.M} onPress={onClose} size="S" style={styles.button} />
            )}
          </Row>
        </View>
      </Motion>
    </SafeAreaView>
  );
};
Snackbar.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  onClose: PropTypes.func,
  position: PropTypes.string,
};

export default Snackbar;
