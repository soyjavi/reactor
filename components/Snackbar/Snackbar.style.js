import { StyleSheet } from 'react-native';

import { THEME } from '../../common';
import { useEnvironment } from '../../hooks';

const { IS_WEB } = useEnvironment();
const { SNACKBAR, SPACE } = THEME;

export default StyleSheet.create({
  button: {
    alignSelf: 'center',
  },

  container: {
    position: IS_WEB ? 'fixed' : 'absolute',
    width: '100%',
    zIndex: 2,
  },

  content: SNACKBAR,

  top: {
    top: 0,
  },

  bottom: {
    bottom: 0,
  },

  caption: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },

  icon: {
    marginRight: SPACE.S,
  },
});
