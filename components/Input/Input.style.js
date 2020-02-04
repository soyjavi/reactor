import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, FONT, UNIT, SPACE } = THEME;

const INPUT_HEIGHT = UNIT * 4.2;

export { INPUT_HEIGHT };

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    paddingHorizontal: SPACE.S,
    flex: 1,
  },

  currencyWithIcon: {
    paddingLeft: SPACE.XS,
  },

  icon: {
    alignSelf: 'flex-start',
    marginRight: SPACE.XS,
  },

  inlineHint: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'center',
    paddingHorizontal: SPACE.XS,
  },

  input: {
    backgroundColor: COLOR.TRANSPARENT,
    borderWidth: 0,
    flex: 1,
    fontSize: UNIT * 1.6,
    minHeight: INPUT_HEIGHT,
    paddingHorizontal: SPACE.XS,
    paddingVertical: UNIT * 0.75,
    width: '100%',
    ...FONT.DEFAULT,
    ...FONT.INPUT,
  },

  inputCurrency: {
    textAlign: 'right',
  },
});
