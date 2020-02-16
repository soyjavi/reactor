import { StyleSheet } from 'react-native';

import { BOX_SIZE } from './Week.style';

export default StyleSheet.create({
  cell: {
    textAlign: 'center',
    minWidth: BOX_SIZE,
  },

  cellExpand: {
    flex: 1,
  },
});
