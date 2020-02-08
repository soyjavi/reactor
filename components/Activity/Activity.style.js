import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { UNIT, SPACE } = THEME;

export default StyleSheet.create({
  container: LAYOUT.STYLE.ROW,

  dot: {
    width: UNIT,
    height: UNIT,
    marginHorizontal: SPACE.XS,
  },
});
