import { bool, func, string } from 'prop-types';
import React from 'react';

import { InputIcon, Text, Touchable } from '..';
import styles from './InputOption.style';

export const InputOption = ({ label, onChange, rounded = true, value, ...others }) => (
  <Touchable onPress={onChange ? () => onChange(!value) : undefined} style={[styles.container, others.style]}>
    <InputIcon active={value} rounded={rounded} size={others.size} />
    {label && (
      <Text bold caption numberOfLines={2} style={styles.label}>
        {label}
      </Text>
    )}
  </Touchable>
);

InputOption.propTypes = {
  label: string,
  onChange: func,
  rounded: bool,
  value: bool,
};
