import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, SPACE } = THEME;

export default StyleSheet.create({
  button: {
    alignSelf: 'center',
  },

  caption: {
    flex: 1,
  },

  dialog: {
    padding: SPACE.M,
  },

  dialogOverlay: {
    backgroundColor: COLOR.TRANSPARENT,
  },

  icon: {
    marginRight: SPACE.M,
  },

  content: LAYOUT.STYLE.ROW,
});
