import { func, string } from 'prop-types';
import React from 'react';
import { Switch as SwitchNative, View } from 'react-native';

import { THEME } from '../../common';
import InputLabel from '../Input/InputLabel';
import styles from './Switch.style';

const { COLOR } = THEME;

const Switch = ({ color, label, onChange, ...inherit }) => (
  <View style={[styles.container, inherit.style]}>
    <SwitchNative
      {...inherit}
      activeThumbColor={COLOR.WHITE}
      activeTrackColor={color || COLOR.PRIMARY}
      onValueChange={onChange}
      style={styles.switch}
      trackColor={COLOR.BASE}
      thumbColor={COLOR.WHITE}
      value={inherit.value || false}
    />
    {label && <InputLabel style={styles.label}>{label}</InputLabel>}
  </View>
);

Switch.propTypes = {
  color: string,
  label: string,
  onChange: func,
};

Switch.defaultProps = {
  color: undefined,
  label: undefined,
  onChange: undefined,
};

export default Switch;
