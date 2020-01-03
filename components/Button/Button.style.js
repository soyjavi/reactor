import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { BORDER_RADIUS, COLOR, ELEVATION, FONT, UNIT, SPACE } = THEME;

const LARGE_SIZE = UNIT * 5.2;
const REGULAR_SIZE = UNIT * 4.4;
const SMALL_SIZE = UNIT * 2.8;

export { REGULAR_SIZE, SMALL_SIZE };

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.CENTERED,
    borderRadius: BORDER_RADIUS,
  },

  disabled: {
    backgroundColor: COLOR.BASE,
  },

  disabledOpacity: {
    opacity: 0.5,
  },

  large: {
    minWidth: LARGE_SIZE,
    height: LARGE_SIZE,
  },

  noPadding: {
    paddingHorizontal: 0,
  },

  outlined: {
    borderWidth: UNIT * 0.1,
  },

  regular: {
    minWidth: REGULAR_SIZE,
    height: REGULAR_SIZE,
    paddingHorizontal: SPACE.L,
  },

  rounded: {
    borderRadius: LARGE_SIZE / 2,
  },

  row: LAYOUT.STYLE.ROW,

  small: {
    height: SMALL_SIZE,
    minWidth: SMALL_SIZE,
    paddingHorizontal: SPACE.S,
  },

  shadow: ELEVATION.SMALL,

  touchable: {
    borderRadius: BORDER_RADIUS,
  },

  // -- Text
  text: {
    fontSize: UNIT * 1.6,
    ...FONT.BUTTON,
    ...Platform.select({
      web: {
        userSelect: 'none',
      },
    }),
  },

  textSmall: {
    fontSize: UNIT * 1.4,
    ...FONT.BUTTON_SMALL,
  },

  textMarginLeft: {
    marginLeft: SPACE.XXS,
  },
});
