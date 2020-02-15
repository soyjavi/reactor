import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },

  auto: {
    flex: 'auto',
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
