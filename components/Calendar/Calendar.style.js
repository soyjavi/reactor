import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, SPACE } = THEME;

export default StyleSheet.create({
  activity: {
    alignSelf: 'center',
    position: 'absolute',
  },

  busy: {
    opacity: 0.2,
  },

  container: {
    backgroundColor: COLOR.BACKGROUND,
    paddingHorizontal: SPACE.M,
    paddingVertical: SPACE.XS,
    justifyContent: 'center',
  },

  days: {
    paddingHorizontal: SPACE.M,
  },

  instance: {
    flex: 1,
  },
});
