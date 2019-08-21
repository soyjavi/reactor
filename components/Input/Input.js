import {
  bool, func, oneOfType, number, string,
} from 'prop-types';
import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

import { THEME } from '../../common';

import InputHint from './InputHint';
import InputLabel from './InputLabel';
import InputIcon from './InputIcon';
import Icon from '../Icon';
import Text from '../Text';
import styles from './Input.style';

const { COLOR } = THEME;

class Input extends Component {
  static propTypes = {
    color: string,
    currency: string,
    disabled: bool,
    error: oneOfType([bool, string]),
    hint: string,
    icon: oneOfType([number, string]),
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

  static defaultProps = {
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

  constructor(props) {
    super(props);
    this.state = { focus: false };
  }

  _onFocus = (focus) => {
    const { props: { disabled, onBlur, onFocus } } = this;

    if (!disabled) this.setState({ focus });

    if (focus && onFocus) onFocus();
    else if (!focus && onBlur) onBlur();
  }

  render() {
    const {
      _onFocus,
      props: {
        color, currency, disabled, error, hint, icon, label, lines, required, requiredIcon, valid,
        onBlur, onChange, onFocus,
        ...inherit
      },
      state: { focus },
    } = this;
    let { props: { keyboard } } = this;
    if (currency) keyboard = 'numeric';

    return (
      <View style={[styles.container, inherit.style]}>
        { label && <InputLabel>{label}</InputLabel> }
        <View
          style={[
            styles.content,
            disabled && styles.disabled,
            !disabled && valid && styles.valid,
            !disabled && focus && (color ? { borderColor: color } : styles.focus),
            !disabled && error && styles.error,
          ]}
        >
          { (icon || currency) && (
            <View style={styles.inlineHint} pointerEvents="none">
              { icon && <Icon value={icon} style={styles.icon} />}
              { currency && <Text input lighten _style={styles.inlineHint}>{currency}</Text> }
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
            onBlur={() => _onFocus(false)}
            onFocus={() => _onFocus(true)}
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
          { (error || (required && requiredIcon)) && (
            <Icon value={error ? 'error' : 'errorOutline'} style={[styles.icon, styles.iconRight]} />
          )}
          { valid && <InputIcon style={[styles.icon, styles.iconRight]} /> }
        </View>
        { hint && (
          <InputHint>
            {hint}
          </InputHint>
        )}
      </View>
    );
  }
}

export { InputHint, InputIcon, InputLabel };
export default Input;
