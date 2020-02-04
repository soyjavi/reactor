import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { UNIT, SPACE } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    alignSelf: 'flex-end',
    height: UNIT * 4.4,
    marginBottom: SPACE.M,
  },

  label: {
    marginLeft: SPACE.XS,
    marginBottom: 0,
  },

  switch: {
    height: UNIT * 2.8,
  },
});
