import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { FONT, OPACITY, SPACE, UNIT } = THEME;

export default StyleSheet.create({
  S: {
    height: SPACE.XL,
    paddingHorizontal: SPACE.S,
  },
  M: {
    height: SPACE.XXL,
    paddingHorizontal: SPACE.M,
  },
  L: {
    height: SPACE.XXL + UNIT,
    paddingHorizontal: SPACE.M,
  },

  container: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    width: 'auto',
  },

  motion: {
    position: 'absolute',
    left: 0,
    height: '100%',
    opacity: OPACITY.M,
  },

  outlined: {
    borderWidth: 1,
  },

  text: {
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
