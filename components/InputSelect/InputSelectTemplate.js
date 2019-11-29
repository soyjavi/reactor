import { bool, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import { InputIcon } from '../Input';
import styles from './InputSelectTemplate.style';

const InputSelectTemplate = ({
  active, caption, disabled, title, selected, ...inherit
}) => (
  <View style={inherit.style}>
    <InputIcon active={active || selected} />
    <View style={styles.texts}>
      <Text lighten={disabled} style={styles.title}>
        {title}
      </Text>
      { caption && (
        <Text caption level={2} lighten>
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
