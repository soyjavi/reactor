import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, UNIT, FONT } = THEME;

export default StyleSheet.create({
  container: {
    color: COLOR.TEXT,
    textAlignVertical: 'center',
    ...FONT.DEFAULT,
  },

  bold: FONT.BOLD,

  headline: FONT.HEADLINE,

  subtitle: FONT.SUBTITLE,

  body: FONT.BODY,

  caption: FONT.CAPTION,

  input: {
    ...FONT.DEFAULT,
    ...FONT.INPUT,
  },

  lighten: {
    color: COLOR.TEXT_LIGHTEN,
  },
});
