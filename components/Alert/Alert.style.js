import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { SPACE } = THEME;

export default StyleSheet.create({
  buttonAccept: {
    flex: 1,
  },

  buttonCancel: {
    flex: 1,
    marginRight: SPACE.M,
  },

  icon: {
    marginRight: SPACE.M,
  },

  overlay: {
    justifyContent: 'flex-end',
  },

  title: {
    marginBottom: SPACE.M,
  },
});
