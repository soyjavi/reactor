import { StyleSheet } from 'react-native';

import { LAYOUT } from '../../common';

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.CENTERED,
  },

  skeleton: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
});
