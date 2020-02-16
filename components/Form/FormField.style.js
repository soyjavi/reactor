import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { INPUT, OPACITY, SPACE } = THEME;

export default StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    marginBottom: SPACE.M,
    width: '100%',
    zIndex: 1,
  },

  input: INPUT,

  focus: {
    zIndex: 1,
  },

  label: {
    marginBottom: SPACE.XS,
  },

  inline: {
    width: '49%',
  },

  disabled: {
    opacity: OPACITY.M,
  },
});
