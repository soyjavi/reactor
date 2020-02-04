import { bool, func, oneOfType, number, string } from 'prop-types';
import React from 'react';
import { TextInput, View } from 'react-native';

import { THEME } from '../../common';

import { InputIcon } from './InputIcon';
import { Icon, Text } from '..';
import styles from './Input.style';

const { COLOR } = THEME;

const Input = ({ currency, disabled, error, icon, lines, required, requiredIcon, valid, onChange, ...others }) => {
  let { keyboard } = others || 'default';
  if (currency) keyboard = 'numeric';

  return (
    <View style={styles.container}>
      {(icon || currency) && (
        <View style={styles.inlineHint} pointerEvents="none">
          {icon && <Icon color={others.colorDisabled} value={icon} family={others.iconFamily} size={others.iconSize} />}
          {currency && (
            <Text color={others.colorDisabled} input style={styles.currencyWithIcon}>
              {currency}
            </Text>
          )}
        </View>
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
        placeholderTextColor={COLOR.TEXT_LIGHTEN}
        underlineColorAndroid="transparent"
        style={[
          styles.input,
          disabled && styles.inputDisabled,
          currency && styles.inputCurrency,
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
    </View>
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
  valid: bool,
};

export { Input, InputIcon };
