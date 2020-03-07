import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.BASE,
    minHeight: UNIT,
    minWidth: UNIT,
  },

  motion: {
    backgroundColor: COLOR.WHITE,
    width: '100%',
    height: '100%',
  },
});
