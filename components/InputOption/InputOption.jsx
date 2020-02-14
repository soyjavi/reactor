import { bool, func, oneOf, node } from 'prop-types';
import React from 'react';

import { InputIcon, Row, Touchable } from '..';
import styles from './InputOption.style';

export const InputOption = ({ children, onChange, rounded = true, size = 'M', value }) => (
  <Touchable onPress={onChange ? () => onChange(!value) : undefined}>
    <Row alignItems="center" style={styles[size]}>
      <InputIcon active={value} rounded={rounded} style={styles.icon} />
      {children}
    </Row>
  </Touchable>
);

InputOption.propTypes = {
  children: node,
  onChange: func,
  rounded: bool,
  size: oneOf(['S', 'M', 'L']),
  value: bool,
};
