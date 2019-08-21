import { bool, func, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Icon from '../Icon';
import InputLabel from '../Input/InputLabel';
import Motion from '../Motion';
import Touchable from '../Touchable';
import styles from './InputOption.style';

const InputOption = ({
  label, onChange, rounded, value, ...inherit
}) => (
  <Touchable onPress={onChange ? () => onChange(!value) : undefined} style={[styles.container, inherit.style]}>
    <View style={[styles.option, rounded && styles.rounded, value && styles.selected]}>
      <Motion preset="pop" visible={value}>
        <Icon value="doneContrast" reverse style={styles.icon} />
      </Motion>
    </View>
    { label && <InputLabel style={styles.label}>{label}</InputLabel> }
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
