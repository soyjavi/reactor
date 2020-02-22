import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
  },

  auto: {
    width: 'auto',
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

  justifystart: {
    justifyContent: 'flex-start',
  },

  justifycenter: {
    justifyContent: 'center',
  },

  justifyend: {
    justifyContent: 'flex-end',
  },

  justifyspace: {
    justifyContent: 'space-between',
  },
});
