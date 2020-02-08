import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../../common';
import { BOX_SIZE } from './Week.style';

const { SPACE } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    justifyContent: 'space-between',
    marginTop: SPACE.XS,
    marginBottom: SPACE.S,
  },

  cell: {
    textAlign: 'center',
    minWidth: BOX_SIZE,
  },

  cellExpand: {
    flex: 1,
  },
});
