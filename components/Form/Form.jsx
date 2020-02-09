import { bool, func, shape, string } from 'prop-types';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { useStyler } from '../../hooks';
import { KEYBOARDS } from './Form.config';
import { FormField } from './FormField';
import { consolidate } from './modules';
import styles from './Form.style';

export const Form = ({
  attributes = {},
  color,
  colorDisabled,
  onChange = () => {},
  onValid,
  validate,
  value = {},
  ...others
}) => {
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
            (Object.keys(KEYBOARDS).includes(keyboard) && !KEYBOARDS[keyboard](fieldValue, { countryCode })) ||
            !fieldValue
          );
        });

      onValid(!invalid);
    }
  }, [value]);

  return (
    <View style={[styles.container, ...useStyler(others)]}>
      {Object.keys(attributes).map((field) => (
        <FormField
          attributes={attributes[field]}
          color={color}
          colorDisabled={colorDisabled}
          field={field}
          key={field}
          onChange={(fieldValue) => onChange(consolidate(attributes, { ...value, [field]: fieldValue }))}
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
  colorDisabled: string,
  onChange: func,
  onValid: func,
  validate: bool,
  value: shape({}),
};

Form.defaultProps = {};
