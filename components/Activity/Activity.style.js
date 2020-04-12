import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { UNIT, SPACE } = THEME;

export default StyleSheet.create({
  dot: {
    width: UNIT,
    height: UNIT,
    marginHorizontal: SPACE.XS,
  },

  XS: {
    height: SPACE.XS,
    width: SPACE.XS,
    marginHorizontal: SPACE.XS / 2,
  },

  S: {
    height: SPACE.S,
    width: SPACE.S,
    marginHorizontal: SPACE.S / 2,
  },

  M: {
    height: SPACE.M,
    width: SPACE.M,
    marginHorizontal: SPACE.M / 2,
  },
});
