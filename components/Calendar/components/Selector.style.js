import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../../common';

const { SPACE } = THEME;

export default StyleSheet.create({
  buttonDisabled: {
    opacity: 0,
  },

  container: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'center',
    marginBottom: SPACE.M,
  },

  value: {
    flex: 1,
    textAlign: 'center',
  },
});
