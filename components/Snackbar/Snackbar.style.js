import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { BORDER_RADIUS, UNIT, SPACE } = THEME;

export default StyleSheet.create({
  caption: {
    flex: 1,
    marginRight: SPACE.S,
  },

  container: {
    ...LAYOUT.STYLE.ROW,
    marginTop: SPACE.MEDIUM,
  },

  frame: {
    borderRadius: BORDER_RADIUS,
    minWidth: UNIT * 30,
    maxWidth: UNIT * 51.2,
  },

  dialog: {
    justifyContent: 'flex-end',
    padding: SPACE.MEDIUM,
  },
});
