import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { FONT, OPACITY, SPACE, UNIT } = THEME;

export default StyleSheet.create({
  S: {
    minHeight: SPACE.XL,
    height: SPACE.XL,
    paddingHorizontal: SPACE.S,
  },
  M: {
    minHeight: SPACE.XXL,
    height: SPACE.XXL,
    paddingHorizontal: SPACE.M,
  },
  L: {
    minHeight: SPACE.XXL + UNIT,
    height: SPACE.XXL + UNIT,
    paddingHorizontal: SPACE.M,
  },

  container: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: 'auto',
    overflow: 'hidden',
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

  textS: FONT.BUTTON_SMALL,

  wide: {
    flex: 3,
    width: '100%',
  },
});
