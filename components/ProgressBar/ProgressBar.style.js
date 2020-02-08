import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    width: '100%',
    height: UNIT / 2,
    overflow: 'hidden',
    backgroundColor: COLOR.BACKGROUND,
  },

  progress: {
    height: '100%',
    backgroundColor: COLOR.BRAND,
  },
});
