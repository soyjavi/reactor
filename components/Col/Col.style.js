import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },

  auto: {
    ...Platform.select({
      web: {
        flex: 'auto',
      },
    }),
  },

  start: {
    justifyContent: 'flex-start',
  },

  center: {
    justifyContent: 'center',
  },

  end: {
    justifyContent: 'flex-end',
  },
});
