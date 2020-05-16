import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR } = THEME;

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.BACKGROUND,
    left: 0,
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
    height: '100%',
    width: '100%',
  },

  content: {
    height: '100%',
    width: '100%',
    zIndex: 0,
  },

  safeArea: {
    flex: 1,
  },
});
