import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, UNIT, SPACE } = THEME;

const SIZE = UNIT * 2;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    marginBottom: SPACE.M,
  },

  icon: {
    height: SIZE * 0.7,
    width: SIZE * 0.7,
  },

  label: {
    marginBottom: 0,
    marginLeft: SPACE.XS,
  },

  option: {
    ...LAYOUT.STYLE.CENTERED,
    height: SIZE,
    width: SIZE,

    backgroundColor: COLOR.BACKGROUND_INPUT,
    borderWidth: 2,
    borderColor: COLOR.TEXT_LIGHTEN,
    borderRadius: SIZE / 10,
  },

  rounded: {
    borderRadius: SIZE / 2,
  },

  selected: {
    borderColor: COLOR.BRAND,
    backgroundColor: COLOR.BRAND,
  },
});
