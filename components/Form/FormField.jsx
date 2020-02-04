import { bool, number, oneOfType, shape, string } from 'prop-types';
import React, { useState } from 'react';
import { View } from 'react-native';

import { THEME } from '../../common';
import { Input, InputList, InputOption, InputSelect, Text, Switch } from '..';

import { KEYBOARDS } from './Form.config';
import { buildStyle } from './modules';
import styles from './FormField.style';

const { COLOR } = THEME;

const keyboards = Object.keys(KEYBOARDS);

export const FormField = ({
  color = COLOR.BLACK,
  colorDisabled = COLOR.GRAY.L,
  props: { disabled, hint, label, inline, keyboard, required, style, type, countryCode, defaultValue, ...props } = {},
  validate,
  value = defaultValue,
  ...others
}) => {
  const [focus, setFocus] = useState(false);
  let { error } = props;

  if (!error && keyboards.includes(keyboard) && !KEYBOARDS[keyboard](value, { countryCode })) error = 'error';

  const Inputs = {
    bool: Switch,
    option: InputOption,
    select: InputSelect,
    list: InputList,
  };

  const InputComponent = Inputs[type] || Input;
  let borderColor = focus ? color : colorDisabled;
  if (error) borderColor = COLOR.ERROR;

  return (
    <View style={[styles.container, buildStyle({ inline, style }, styles), others.style]}>
      {(label || others.field) && (
        <Text bold caption color={focus ? color : colorDisabled} numberOfLines={2}>
          {label || others.field}
        </Text>
      )}

      <View
        style={[
          styles.content,
          disabled && styles.disabled,
          disabled && { backgroundColor: colorDisabled },
          { borderColor },
        ]}
      >
        <InputComponent
          {...others}
          {...props}
          onBlur={disabled ? undefined : () => setFocus(false)}
          onFocus={disabled ? undefined : () => setFocus(true)}
          error={error}
          required={required && (value === undefined || (!type && value.trim().length === 0))}
          valid={!error && !disabled && value && validate ? true : false}
          value={value}
        />
      </View>

      {hint && (
        <Text {...others} numberOfLines={2} caption lighten style={styles.hint}>
          {hint}
        </Text>
      )}
    </View>
  );
};

FormField.propTypes = {
  color: string,
  colorDisabled: string,
  error: string,
  props: shape({}),
  validate: bool,
  value: oneOfType([number, string]),
};
