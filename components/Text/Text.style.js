import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT_WEIGHT_BOLD, UNIT,
} = THEME;

export default StyleSheet.create({
  container: {
    color: COLOR.TEXT,
    textAlignVertical: 'center',
  },

  headline: {
    fontSize: UNIT * 12,
    fontWeight: FONT_WEIGHT_BOLD,
  },

  subtitle: {
    fontSize: UNIT * 2.0,
  },

  body: {
    fontSize: UNIT * 1.6,
    lineHeight: (UNIT * 1.6) * 1.35,
  },

  caption: {
    fontSize: UNIT * 1.4,
    lineHeight: (UNIT * 1.4) * 1.35,
  },
});
