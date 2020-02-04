import { bool, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { InputIcon, Text } from '..';
import styles from './InputSelectTemplate.style';

const InputSelectTemplate = ({ active, caption, disabled, title, selected, ...others }) => (
  <View style={others.style}>
    <InputIcon active={active || selected} />
    <View style={styles.texts}>
      <Text lighten={disabled} style={styles.title}>
        {title}
      </Text>
      {caption && (
        <Text caption lighten>
          {caption}
        </Text>
      )}
    </View>
  </View>
);

InputSelectTemplate.propTypes = {
  active: bool,
  caption: string,
  disabled: bool,
  selected: bool,
  title: string.isRequired,
};

InputSelectTemplate.defaultProps = {
  active: false,
  caption: undefined,
  disabled: undefined,
  selected: false,
};

export default InputSelectTemplate;
