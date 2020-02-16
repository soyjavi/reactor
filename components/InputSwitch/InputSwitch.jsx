import { bool, func, oneOf, string, node } from 'prop-types';
import React from 'react';
import { Switch } from 'react-native';

import { THEME } from '../../common';
import { Row } from '../';
import styles from './InputSwitch.style';

const { COLOR } = THEME;

export const InputSwitch = ({ children, color, onChange, size = 'M', value = false }) => (
  <Row style={styles[size]}>
    <Switch
      activeThumbColor={COLOR.WHITE}
      activeTrackColor={color || COLOR.BRAND}
      onValueChange={onChange}
      style={styles.switch}
      trackColor={COLOR.BASE}
      thumbColor={COLOR.WHITE}
      value={value}
    />
    {children}
  </Row>
);

InputSwitch.propTypes = {
  children: node,
  color: string,
  label: string,
  onChange: func,
  size: oneOf(['S', 'M', 'L']),
  value: bool,
};
