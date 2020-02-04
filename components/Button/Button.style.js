import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, FONT, SPACE } = THEME;

export default StyleSheet.create({
  S: {
    height: SPACE.XXL - SPACE.S,
    paddingHorizontal: SPACE.S,
  },
  M: {
    height: SPACE.XXL,
    paddingHorizontal: SPACE.M,
  },
  L: {
    height: SPACE.XXL + SPACE.S,
    paddingHorizontal: SPACE.M,
  },

  container: {
    ...LAYOUT.STYLE.CENTERED,
    alignSelf: 'flex-start',
    width: 'auto',
  },

  disabled: {
    backgroundColor: COLOR.GRAY.M,
  },

  outlined: {
    borderWidth: 1,
  },

  row: LAYOUT.STYLE.ROW,

  text: {
    ...FONT.DEFAULT,
    ...FONT.BUTTON,
    ...Platform.select({
      web: {
        userSelect: 'none',
      },
    }),
    paddingHorizontal: SPACE.S,
  },

  textS: FONT.CAPTION,

  wide: {
    width: '100%',
  },
});
