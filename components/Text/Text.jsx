import { bool, string } from 'prop-types';
import React from 'react';
import { Text as NativeText } from 'react-native';

import { useTheme } from '../../context';
import { useBanStylerProps, useStyler } from '../../hooks';
import styles from './Text.style';

const determineStyle = ({ caption, input, headline, subtitle }) => {
  if (headline) return styles.headline;
  if (subtitle) return styles.subtitle;
  if (caption) return styles.caption;
  if (input) return styles.input;

  return styles.body;
};

export const Text = ({ bold, caption, color, headline, input, subtitle, underlined, ...others }) => {
  const { FONT: { FAMILY } = {} } = useTheme();

  return (
    <NativeText
      {...useBanStylerProps(others)}
      style={[
        styles.default,
        determineStyle({ caption, input, headline, subtitle }),
        FAMILY && { fontFamily: FAMILY },
        bold && styles.bold,
        underlined && styles.underlined,
        color && { color },
        ...useStyler(others),
      ]}
    />
  );
};

Text.propTypes = {
  bold: bool,
  caption: bool,
  color: string,
  headline: bool,
  input: bool,
  subtitle: bool,
  underlined: bool,
};
