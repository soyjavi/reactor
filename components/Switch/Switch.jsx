import { func, string } from 'prop-types';
import React from 'react';
import { Switch as SwitchNative, View } from 'react-native';

import { THEME } from '../../common';
import { Text } from '..';
import styles from './Switch.style';

const { COLOR } = THEME;

export const Switch = ({ color, label, onChange, ...others }) => (
  <View style={[styles.container, others.style]}>
    <SwitchNative
      {...others}
      activeThumbColor={COLOR.WHITE}
      activeTrackColor={color || COLOR.BRAND}
      onValueChange={onChange}
      style={styles.switch}
      trackColor={COLOR.BASE}
      thumbColor={COLOR.WHITE}
      value={others.value || false}
    />

    {label && (
      <Text bold caption numberOfLines={2} style={styles.label}>
        {label}
      </Text>
    )}
  </View>
);

Switch.propTypes = {
  color: string,
  label: string,
  onChange: func,
};
