import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { INPUT_HEIGHT } from '../Input/Input.style';

const { SPACE } = THEME;

export default StyleSheet.create({
  S: {
    height: INPUT_HEIGHT.S,
  },
  M: {
    height: INPUT_HEIGHT.M,
  },
  L: {
    height: INPUT_HEIGHT.L,
  },

  container: LAYOUT.STYLE.ROW,

  icon: {
    marginRight: SPACE.S,
  },
});
