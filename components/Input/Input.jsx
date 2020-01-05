import { bool, func, oneOfType, number, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';

import { THEME } from '../../common';

import InputHint from './InputHint';
import InputLabel from './InputLabel';
import InputIcon from './InputIcon';
import Icon from '../Icon';
import Text from '../Text';
import styles from './Input.style';

const { COLOR } = THEME;

const Input = ({
  color,
  currency,
  disabled,
  error,
  hint,
  icon,
  label,
  lines,
  required,
  requiredIcon,
  valid,
  onBlur,
  onChange,
  onFocus,
  ...inherit
}) => {
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    if (focus && onFocus) onFocus();
    else if (!focus && onBlur) onBlur();
  }, [focus]);

  let { keyboard } = inherit;
  if (currency) keyboard = 'numeric';

  return (
    <View style={[styles.container, inherit.style]}>
      {label && <InputLabel>{label}</InputLabel>}
      <View
        style={[
          styles.content,
          disabled && styles.disabled,
          !disabled && valid && styles.valid,
          !disabled && focus && (color ? { borderColor: color } : styles.focus),
          !disabled && error && styles.error,
        ]}
      >
        {(icon || currency) && (
          <View style={styles.inlineHint} pointerEvents="none">
            {icon && <Icon value={icon} family={inherit.iconFamily} size={inherit.iconSize} />}
            {currency && (
              <Text input lighten style={styles.currencyWithIcon}>
                {currency}
              </Text>
            )}
          </View>
        )}

        <TextInput
          {...inherit}
          value={inherit.value || ''}
          autoCorrect={false}
          autoCapitalize="none"
          blurOnSubmit
          editable={!disabled}
          keyboardType={keyboard}
          numberOfLines={lines}
          multiline={lines > 1}
          onChangeText={onChange}
          onBlur={!disabled ? () => setFocus(false) : undefined}
          onFocus={!disabled ? () => setFocus(true) : undefined}
          placeholderTextColor={COLOR.TEXT_LIGHTEN}
          underlineColorAndroid="transparent"
          style={[
            styles.input,
            disabled && styles.inputDisabled,
            currency && styles.inputCurrency,
            inherit.fontFamily && { fontFamily: inherit.fontFamily },
            inherit.fontSize && { fontSize: inherit.fontSize },
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
      {hint && <InputHint>{hint}</InputHint>}
    </View>
  );
};

Input.propTypes = {
  color: string,
  currency: string,
  disabled: bool,
  error: oneOfType([bool, string]),
  hint: string,
  icon: string,
  keyboard: string,
  label: string,
  lines: number,
  onBlur: func,
  onChange: func,
  onFocus: func,
  required: bool,
  requiredIcon: bool,
  valid: bool,
};

Input.defaultProps = {
  color: undefined,
  currency: undefined,
  disabled: false,
  error: undefined,
  hint: undefined,
  icon: undefined,
  keyboard: 'default',
  label: undefined,
  lines: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  required: false,
  requiredIcon: false,
  valid: false,
};

export { InputHint, InputIcon, InputLabel };

export default Input;
