import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, FONT } = THEME;

export default StyleSheet.create({
  default: {
    color: COLOR.TEXT,
    ...FONT.DEFAULT,
  },

  bold: FONT.BOLD,

  headline: FONT.HEADLINE,

  subtitle: FONT.SUBTITLE,

  body: FONT.BODY,

  caption: FONT.CAPTION,

  input: {
    color: COLOR.TEXT,
    ...FONT.DEFAULT,
    ...FONT.INPUT,
  },
});
