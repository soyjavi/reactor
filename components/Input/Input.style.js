import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, FONT, SPACE, UNIT } = THEME;

const INPUT_HEIGHT = {
  S: SPACE.XL,
  M: SPACE.XL + UNIT,
  L: SPACE.XXL,
};

export { INPUT_HEIGHT };

export default StyleSheet.create({
  S: {
    height: INPUT_HEIGHT.S,
  },
  M: {
    height: INPUT_HEIGHT.M,
  },
  L: {
    height: INPUT_HEIGHT.L,
  },

  container: {
    height: '100%',
    flex: 1,
  },

  currencyWithIcon: {
    paddingLeft: SPACE.XS,
  },

  icon: {
    alignSelf: 'flex-start',
    marginRight: SPACE.XS,
  },

  input: {
    backgroundColor: COLOR.TRANSPARENT,
    borderWidth: 0,
    flex: 1,
    height: '100%',
    width: '100%',
    ...FONT.DEFAULT,
    ...FONT.INPUT,
  },

  inputCurrency: {
    textAlign: 'right',
  },
});
