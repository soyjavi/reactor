import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR,
  UNIT,
  FONT: { FAMILY_BOLD, ...FONT },
} = THEME;

export default StyleSheet.create({
  container: {
    color: COLOR.TEXT,
    textAlignVertical: 'center',
    ...FONT.DEFAULT,
  },

  bold: {
    fontFamily: FAMILY_BOLD,
  },

  headline: {
    fontSize: UNIT * 2.4,
    ...FONT.HEADLINE,
  },

  subtitle: {
    fontSize: UNIT * 1.8,
    ...FONT.SUBTITLE,
  },

  body: {
    fontSize: UNIT * 1.6,
    lineHeight: UNIT * 1.6 * 1.2,
    ...FONT.BODY,
  },

  input: {
    fontSize: UNIT * 1.6,
    ...FONT.INPUT,
  },

  lighten: {
    color: COLOR.TEXT_LIGHTEN,
  },

  caption: {
    fontSize: UNIT * 1.4,
    ...FONT.CAPTION,
  },
});
