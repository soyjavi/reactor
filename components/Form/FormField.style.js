import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, OPACITY, SPACE } = THEME;

export default StyleSheet.create({
  container: {
    marginBottom: SPACE.M,
  },

  content: {
    ...LAYOUT.STYLE.ROW,
    backgroundColor: COLOR.BACKGROUND_INPUT,
    borderWidth: 1,
    borderBottomWidth: 1,
  },

  disabled: {
    borderWidth: 0,
    opacity: OPACITY.M,
  },

  row: {
    ...LAYOUT.STYLE.ROW,
    flexDirection: 'column',
  },

  inline2: {
    width: '49%',
  },

  inline3: {
    width: '32%',
  },

  inline4: {
    width: '24%',
  },

  inline5: {
    width: '19%',
  },

  anchor: {
    minWidth: '100%',
    width: '100%',
  },

  hint: {
    marginTop: SPACE.XS,
    paddingLeft: 0,
    maxWidth: '100%',
  },
});
