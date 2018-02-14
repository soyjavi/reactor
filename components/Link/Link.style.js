import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const {
  COLOR, FONT,
} = THEME;

export default StyleSheet.create({
  container: {
    fontSize: FONT.SIZE.REGULAR,
    fontWeight: FONT.WEIGHT.BOLD,
  },

  hover: {
    color: COLOR.ACCENT,
  },
});