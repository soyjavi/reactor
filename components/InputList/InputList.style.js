import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { COLOR, UNIT, SPACE } = THEME;

export default StyleSheet.create({
  active: {
    zIndex: 1,
  },

  container: {
    marginBottom: SPACE.M,
  },

  content: {
    backgroundColor: COLOR.BACKGROUND_INPUT,
    borderColor: COLOR.BASE,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRadius: UNIT / 4,
  },

  input: {
    marginBottom: 0,
  },

  error: {
    borderColor: COLOR.ERROR,
    borderTopWidth: 1,
  },

  disabled: {
    backgroundColor: COLOR.DISABLED,
  },

  values: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: SPACE.XS,
  },

  value: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'space-between',
    minHeight: UNIT * 3.2,
    backgroundColor: COLOR.BASE,
    borderRadius: UNIT * 1.6,
    margin: SPACE.XS,
    paddingHorizontal: SPACE.XS,
    paddingVertical: SPACE.XS,
  },

  iconClose: {
    marginLeft: SPACE.XS,
    width: UNIT,
    height: UNIT,
  },

  suggestions: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderTopWidth: 1,
    alignSelf: 'flex-start',
    top: UNIT * 5.4, // @TODO: There is not a SPEC for this
    width: '100%',
    zIndex: 1,
  },

  suggestion: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'space-between',
    paddingHorizontal: SPACE.XS,
    paddingVertical: SPACE.XS,
  },
});
