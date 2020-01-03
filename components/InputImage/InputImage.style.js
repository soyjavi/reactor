import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';

const { BORDER_RADIUS, COLOR, SPACE, UNIT } = THEME;

export default StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.ROW,
    alignItems: 'flex-end',
  },

  input: {
    flex: 1,
  },

  inputMargin: {
    marginLeft: SPACE.XS,
  },

  image: {
    width: UNIT * 4.4,
    height: UNIT * 4.4,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLOR.BASE,
  },

  imageContainer: {
    marginBottom: SPACE.REGULAR,
  },
});
