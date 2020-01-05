import { bool, func, string } from 'prop-types';
import React from 'react';

import InputLabel from '../Input/InputLabel';
import InputIcon from '../Input/InputIcon';
import Touchable from '../Touchable';
import styles from './InputOption.style';

const InputOption = ({ label, onChange, rounded, value, ...inherit }) => (
  <Touchable onPress={onChange ? () => onChange(!value) : undefined} style={[styles.container, inherit.style]}>
    <InputIcon active={value} rounded={rounded} />
    {label && <InputLabel style={styles.label}>{label}</InputLabel>}
  </Touchable>
);

InputOption.propTypes = {
  label: string,
  onChange: func,
  rounded: bool,
  value: bool,
};

InputOption.defaultProps = {
  label: undefined,
  onChange: undefined,
  rounded: true,
  value: false,
};

export default InputOption;
