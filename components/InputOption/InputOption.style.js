import { StyleSheet } from 'react-native';

import { THEME } from '../../common';
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

  icon: {
    marginRight: SPACE.S,
  },
});
