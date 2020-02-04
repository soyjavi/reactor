import { StyleSheet } from 'react-native';

import { LAYOUT } from '../../common';

export default StyleSheet.create({
  button: {
    alignSelf: 'center',
  },

  caption: {
    flex: 1,
  },

  overlay: {
    justifyContent: 'flex-end',
  },

  content: LAYOUT.STYLE.ROW,
});
