import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { BORDER_RADIUS, COLOR } = THEME;

export default StyleSheet.create({
  container: Platform.select({
    web: {
      userSelect: 'none',
    },
  }),

  ripples: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    zIndex: 1,
  },
});
