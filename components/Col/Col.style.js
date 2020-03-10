import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },

  auto: {
    flex: 0,
    ...Platform.select({
      web: {
        flexBasis: 'auto',
      },
    }),
  },

  start: {
    alignItems: 'flex-start',
  },

  center: {
    alignItems: 'center',
  },

  end: {
    alignItems: 'flex-end',
  },
});
