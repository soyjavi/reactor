import { bool, string } from 'prop-types';
import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import { useTheme } from '../../context';
import styles from './Text.style';

const determineStyle = ({ caption, input, headline, subtitle }) => {
  if (headline) return styles.headline;
  if (subtitle) return styles.subtitle;
  if (caption) return styles.caption;
  if (input) return styles.input;

  return styles.body;
};

const Text = ({ bold, lighten, color, caption, input, headline, subtitle, ...inherit }) => {
  const { FONT: { FAMILY } = {} } = useTheme();

  return (
    <NativeText
      {...inherit}
      style={[
        styles.container,
        determineStyle({
          caption,
          input,
          headline,
          subtitle,
        }),
        lighten && styles.lighten,
        // -- flatten
        StyleSheet.flatten([FAMILY && { fontFamily: FAMILY }, bold && styles.bold, inherit.style, color && { color }]),
      ]}
    />
  );
};

Text.propTypes = {
  bold: bool,
  caption: bool,
  color: string,
  input: bool,
  headline: bool,
  subtitle: bool,
  lighten: bool,
};

Text.defaultProps = {
  bold: false,
  caption: false,
  color: undefined,
  input: false,
  headline: false,
  subtitle: false,
  lighten: false,
};

export default Text;
