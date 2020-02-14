import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { UNIT, SPACE } = THEME;

export default StyleSheet.create({
  dot: {
    width: UNIT,
    height: UNIT,
    marginHorizontal: SPACE.XS,
  },
});
