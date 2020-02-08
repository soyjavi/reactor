import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { SPACE } = THEME;

export default StyleSheet.create({
  button: {
    alignSelf: 'center',
  },

  caption: {
    flex: 1,
  },

  icon: {
    marginRight: SPACE.M,
  },

  overlay: {
    justifyContent: 'flex-end',
  },

  content: LAYOUT.STYLE.ROW,
});
