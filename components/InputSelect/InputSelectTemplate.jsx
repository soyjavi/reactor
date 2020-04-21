import { bool, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { InputIcon } from '../Input';
import { Row } from '../Row';
import { Text } from '../Text';
import styles from './InputSelectTemplate.style';

const InputSelectTemplate = ({ active, caption, title, selected, ...others }) => (
  <Row alignItems="center" style={others.style}>
    <InputIcon active={active || selected} />
    <View style={styles.texts}>
      <Text style={styles.title}>{title}</Text>
      {caption && <Text caption>{caption}</Text>}
    </View>
  </Row>
);

InputSelectTemplate.propTypes = {
  active: bool,
  caption: string,
  selected: bool,
  title: string.isRequired,
};

InputSelectTemplate.defaultProps = {
  active: false,
  caption: undefined,
  selected: false,
};

export default InputSelectTemplate;
