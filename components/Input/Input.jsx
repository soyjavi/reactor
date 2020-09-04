import { bool, func, oneOfType, number, string, oneOf } from 'prop-types';
import React from 'react';
import { TextInput } from 'react-native';

import { THEME } from '../../common';
import { Icon } from '../Icon';
import { Row } from '../Row';
import { Text } from '../Text';
import styles from './Input.style';
import { InputIcon } from './InputIcon';

const { COLOR } = THEME;

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
    <Row style={styles.container}>
      {(icon || currency) && (
        <Row alignItems="center" justifyContent="center" paddingHorizontal="XS" width="auto">
          {icon && <Icon color={COLOR.LIGHTEN} value={icon} family={others.iconFamily} size={others.iconSize} />}
          {currency && (
            <Text color={COLOR.LIGHTEN} input style={styles.currencyWithIcon}>
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
        multiline={lines > 1}
        onChangeText={onChange}
        placeholderTextColor={COLOR.LIGHTEN}
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
          color={error ? COLOR.ERROR : COLOR.LIGHTEN}
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
