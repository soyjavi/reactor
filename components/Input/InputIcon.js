import { bool } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Icon from '../Icon';
import styles from './InputIcon.style';

const InputIcon = ({ active, ...inherit }) => (
  <View style={[styles.container, active && styles.active, inherit.style]}>
    {active && <Icon value="doneContrast" style={styles.icon} />}
  </View>
);

InputIcon.propTypes = {
  active: bool,
};

InputIcon.defaultProps = {
  active: true,
};

export default InputIcon;
