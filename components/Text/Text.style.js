import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR,
  UNIT,
  FONT: { FAMILY_SECONDARY, WEIGHT, ...FONT },
} = THEME;

export default StyleSheet.create({
  container: {
    color: COLOR.TEXT,
    textAlignVertical: 'center',
    ...FONT.DEFAULT,
  },

  bold: {
    fontWeight: WEIGHT.BOLD,
  },

  headline: {
    fontFamily: FAMILY_SECONDARY,
    fontSize: UNIT * 2.4,
    fontWeight: WEIGHT.BOLD,
    ...FONT.HEADLINE,
  },

  subtitle: {
    fontSize: UNIT * 1.8,
    fontWeight: WEIGHT.SEMIBOLD,
    ...FONT.SUBTITLE,
  },

  body: {
    fontSize: UNIT * 1.6,
    lineHeight: UNIT * 1.6 * 1.2,
    ...FONT.BODY,
  },

  input: {
    fontSize: UNIT * 1.6,
    fontWeight: WEIGHT.REGULAR,
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
