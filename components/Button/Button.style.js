import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, FONT, SPACE, UNIT } = THEME;

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

  disabled: {
    backgroundColor: COLOR.DISABLED,
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
