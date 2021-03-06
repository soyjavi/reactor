import { bool, func, oneOf, shape, string } from 'prop-types';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { useStyler } from '../../hooks';
import { KEYBOARDS } from './Form.config';
import styles from './Form.style';
import { FormField } from './FormField';
import { consolidate } from './modules';

export const Form = ({
  attributes = {},
  color,
  onChange = () => {},
  onValid,
  size = 'M',
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
          key={field}
          attributes={attributes[field]}
          color={color}
          field={field}
          onChange={(fieldValue) => onChange(consolidate(attributes, { ...value, [field]: fieldValue }))}
          size={size}
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
  onChange: func,
  onValid: func,
  size: oneOf(['S', 'M', 'L']),
  validate: bool,
  value: shape({}),
};

Form.defaultProps = {};
