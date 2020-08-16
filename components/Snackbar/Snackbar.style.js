import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, SPACE } = THEME;

export default StyleSheet.create({
  button: {
    alignSelf: 'center',
  },

  caption: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },

  dialog: {
    padding: SPACE.M,
  },

  dialogOverlay: {
    backgroundColor: COLOR.TRANSPARENT,
  },

  icon: {
    marginRight: SPACE.S,
  },
});
