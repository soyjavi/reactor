import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { FONT } = THEME;

export default StyleSheet.create({
  default: FONT.DEFAULT,

  bold: FONT.BOLD,

  headline: FONT.HEADLINE,

  subtitle: FONT.SUBTITLE,

  body: FONT.BODY,

  caption: FONT.CAPTION,

  input: {
    ...FONT.DEFAULT,
    ...FONT.INPUT,
  },
});
