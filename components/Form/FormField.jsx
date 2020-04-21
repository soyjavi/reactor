import { bool, number, oneOfType, shape, string, func, oneOf } from 'prop-types';
import React, { useState } from 'react';
import { View } from 'react-native';

import { THEME } from '../../common';
import { useBanStylerProps, useStyler } from '../../hooks';
import { Input } from '../Input';
import { InputOption } from '../InputOption';
import { InputSelect } from '../InputSelect';
import { InputSwitch } from '../InputSwitch';
import { Text } from '../Text';

import { KEYBOARDS } from './Form.config';
import styles from './FormField.style';

const { COLOR, INPUT } = THEME;

const keyboards = Object.keys(KEYBOARDS);

export const FormField = ({
  attributes: { disabled, hint, inline, label, keyboard, required, type, countryCode, defaultValue, ...others } = {},
  color = COLOR.BRAND,
  field,
  onChange,
  size = 'M',
  validate,
  value = defaultValue,
}) => {
  const [focus, setFocus] = useState(false);

  const isTouchable = type === 'bool' || type === 'option';
  const colorSecondary = COLOR.LIGHTEN;
  const error = !error && keyboards.includes(keyboard) && !KEYBOARDS[keyboard](value, { countryCode });

  const Inputs = { bool: InputSwitch, option: InputOption, select: InputSelect };
  const InputComponent = Inputs[type] || Input;
  const inputColor = error ? COLOR.ERROR : focus ? color : undefined;

  return (
    <View style={[styles.container, inline && styles.inline, focus && styles.focus, ...useStyler(others)]}>
      {isTouchable ? (
        <InputComponent {...useBanStylerProps(others)} size={size} value={value}>
          <Text bold caption color={inputColor} numberOfLines={2}>
            {label || field}
          </Text>
        </InputComponent>
      ) : (
        <>
          <Text bold caption color={inputColor} numberOfLines={2} style={styles.label}>
            {label || field}
          </Text>

          <View
            style={[
              styles.input,
              focus && styles.inputFocus,
              disabled && styles.disabled,
              disabled
                ? { backgroundColor: colorSecondary }
                : { borderColor: error ? COLOR.ERROR : focus ? color : INPUT.borderColor },
            ]}
          >
            <InputComponent
              {...useBanStylerProps(others)}
              disabled={disabled}
              onChange={onChange}
              onBlur={disabled ? undefined : () => setFocus(false)}
              onFocus={disabled ? undefined : () => setFocus(true)}
              error={error}
              required={required && (value === undefined || (!type && value.trim().length === 0))}
              size={size}
              valid={!error && !disabled && value && validate ? true : false}
              value={value}
            />
          </View>

          {hint && (
            <Text color={colorSecondary} numberOfLines={2} caption>
              {hint}
            </Text>
          )}
        </>
      )}
    </View>
  );
};

FormField.propTypes = {
  attributes: shape({}),
  color: string,
  colorDisabled: string,
  field: string.isRequired,
  onChange: func,
  size: oneOf(['S', 'M', 'L']),
  validate: bool,
  value: oneOfType([bool, number, string]),
};
