import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { SPACE } = THEME;

export default StyleSheet.create({
  caption: {
    flex: 1,
    marginRight: SPACE.S,
  },

  container: LAYOUT.STYLE.ROW,

  dialogContainer: {
    justifyContent: 'flex-end',
  },
});
