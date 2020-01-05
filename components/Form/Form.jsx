import { bool, func, number, oneOfType, shape, string } from 'prop-types';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import Input from '../Input';
import InputDate from '../InputDate';
import InputImage from '../InputImage';
import InputList from '../InputList';
import InputOption from '../InputOption';
import InputSelect from '../InputSelect';
import Text from '../Text';
import Switch from '../Switch';
import { buildStyle, consolidate, isValidEmail, isValidPhone } from './modules';
import styles from './Form.style';

const KEYBOARDS = {
  'email-address': isValidEmail,
  'phone-pad': isValidPhone,
};

const KEYBOARDS_KEYS = Object.keys(KEYBOARDS);

const Inputs = {
  bool: Switch,
  date: InputDate,
  image: InputImage,
  option: InputOption,
  select: InputSelect,
  list: InputList,
};

const Field = ({
  props: { disabled, inline, keyboard, required, style, type, label, countryCode, defaultValue, ...props } = {},
  validate,
  value = defaultValue,
  ...inherit
}) => {
  let { error } = props;
  if (!error && KEYBOARDS_KEYS.includes(keyboard) && !KEYBOARDS[keyboard](value, { countryCode })) {
    error = 'error';
  }

  const InputComponent = Inputs[type] || Input;

  // @TODO: We should use useCallback optimizing renders
  return (
    <InputComponent
      {...inherit}
      {...props}
      label={label || inherit.field}
      error={error}
      required={required && (value === undefined || (!type && value.trim().length === 0))}
      valid={!error && !disabled && value && validate ? true : false}
      value={value}
      style={buildStyle({ inline, style }, styles)}
    />
  );
};

Field.propTypes = {
  error: string,
  props: shape({}),
  validate: bool,
  value: oneOfType([number, string]),
};

Field.defaultProps = {
  error: undefined,
  props: {},
  validate: false,
  value: undefined,
};

const Form = ({ attributes, color, onChange, onValid, title, validate, value = {}, ...inherit }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      onChange(consolidate(attributes, value));
    }
  }, [mounted]);

  useEffect(() => {
    if (onValid) {
      const invalid = Object.keys(attributes)
        .filter((field) => attributes[field].required && !attributes[field].disabled)
        .some((field) => {
          const { countryCode, defaultValue, keyboard, type } = attributes[field];
          const fieldValue = value[field] !== undefined ? value[field] : defaultValue;

          return (
            (!type && fieldValue && fieldValue.trim().length === 0) ||
            (KEYBOARDS_KEYS.includes(keyboard) && !KEYBOARDS[keyboard](fieldValue, { countryCode })) ||
            !fieldValue
          );
        });

      onValid(!invalid);
    }
  }, [value]);

  return (
    <View style={[styles.container, inherit.style]}>
      {title && (
        <Text headline style={[styles.title, styles.anchor]}>
          {title}
        </Text>
      )}
      {Object.keys(attributes).map((field) => (
        <Field
          color={color}
          field={field}
          key={field}
          onChange={(fieldValue) => onChange(consolidate(attributes, { ...value, [field]: fieldValue }))}
          props={attributes[field]}
          validate={validate}
          value={value[field]}
        />
      ))}
    </View>
  );
};

Form.propTypes = {
  attributes: shape({}),
  color: string,
  value: shape({}),
  onChange: func,
  onValid: func,
  title: string,
  validate: bool,
};

Form.defaultProps = {
  attributes: {},
  color: undefined,
  value: undefined,
  title: undefined,
  onChange() {},
  onValid: undefined,
  validate: false,
};

export default Form;
