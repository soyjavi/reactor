import { bool, func, oneOfType, number, string, oneOf } from 'prop-types';
import React from 'react';
import { TextInput, View } from 'react-native';

import { THEME } from '../../common';

import { InputIcon } from './InputIcon';
import { Icon, Row, Text } from '..';
import styles from './Input.style';

const {
  COLOR,
  INPUT: { borderColor: colorDisabled },
} = THEME;

const Input = ({
  currency,
  disabled,
  error,
  icon,
  lines,
  required,
  requiredIcon,
  valid,
  onChange,
  size = 'M',
  ...others
}) => {
  let { keyboard } = others || 'default';
  if (currency) keyboard = 'numeric';

  return (
    <Row alignItems="center" style={styles.container} paddingRight="XS">
      {(icon || currency) && (
        <Row alignItems="center" justifyContent="center" paddingHorizontal="XS">
          {icon && <Icon color={colorDisabled} value={icon} family={others.iconFamily} size={others.iconSize} />}
          {currency && (
            <Text color={colorDisabled} input style={styles.currencyWithIcon}>
              {currency}
            </Text>
          )}
        </Row>
      )}
      <TextInput
        {...others}
        value={others.value || ''}
        autoCorrect={false}
        autoCapitalize="none"
        blurOnSubmit
        editable={!disabled}
        keyboardType={keyboard}
        numberOfLines={lines}
        multiline={lines > 1}
        onChangeText={onChange}
        placeholderTextColor={colorDisabled}
        underlineColorAndroid="transparent"
        style={[
          styles.input,
          disabled && styles.inputDisabled,
          currency && styles.inputCurrency,
          styles[size],
          others.color && { color: others.color },
          others.fontFamily && { fontFamily: others.fontFamily },
          others.fontSize && { fontSize: others.fontSize },
        ]}
      />
      {(error || (required && requiredIcon)) && (
        <Icon
          color={error ? COLOR.ERROR : COLOR.TEXT_LIGHTEN}
          family="MaterialIcons"
          value={error ? 'error' : 'error-outline'}
        />
      )}
      {valid && <InputIcon valid />}
    </Row>
  );
};

Input.propTypes = {
  currency: string,
  disabled: bool,
  error: oneOfType([bool, string]),
  icon: string,
  keyboard: string,
  lines: number,
  onChange: func,
  required: bool,
  requiredIcon: bool,
  size: oneOf(['S', 'M', 'L']),
  valid: bool,
};

export { Input, InputIcon };
