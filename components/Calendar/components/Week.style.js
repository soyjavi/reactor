import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../../common';

const { COLOR, SPACE, UNIT } = THEME;
const BOX_SIZE = UNIT * 4;

export { BOX_SIZE };

export default StyleSheet.create({
  cell: {
    alignItems: 'center',
    height: BOX_SIZE,
    justifyContent: 'center',
    minWidth: BOX_SIZE,
  },

  box: {
    backgroundColor: COLOR.PRIMARY,
    height: UNIT * 4,
    width: UNIT * 4,
    opacity: 0.2,
    position: 'absolute',
    top: 0,
    left: 0,
  },

  boxDisabled: {
    opacity: 0.1,
    top: 0,
    left: 0,
  },

  cellExpand: {
    flex: 1,
  },

  cellSelected: {
    backgroundColor: COLOR.PRIMARY,
  },

  cellSelectedToday: {
    borderColor: COLOR.TEXT,
    borderWidth: 1,
  },

  caption: {
    position: 'absolute',
    top: BOX_SIZE / 2 + UNIT / 1.35,
    lineHeight: UNIT,
    fontSize: UNIT,
    opacity: 0.5,
  },

  container: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'space-between',
    marginTop: SPACE.XXS,
  },

  textHighlight: {
    color: COLOR.WHITE,
  },
});
