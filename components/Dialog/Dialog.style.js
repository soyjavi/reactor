import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { useEnvironment } from '../../hooks';

const { IS_WEB } = useEnvironment();
const { COLOR, SPACE } = THEME;

export default StyleSheet.create({
  button: {
    position: 'absolute',
    zIndex: 1,
    top: SPACE.S,
    right: SPACE.S,
  },

  container: {
    height: '100%',
    left: 0,
    maxHeight: IS_WEB ? '100vh' : '100%',
    position: IS_WEB ? 'fixed' : 'absolute',
    top: 0,
    width: '100%',
    zIndex: 2,
  },

  content: {
    padding: SPACE.L,
    backgroundColor: COLOR.BACKGROUND,
  },

  keyboardView: {
    backgroundColor: COLOR.TRANSPARENT,
    width: '100%',
    maxHeight: '100%',
    position: 'absolute',
  },

  overlay: {
    ...LAYOUT.STYLE.CENTERED,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },

  top: {
    justifyContent: 'flex-start',
  },

  bottom: {
    justifyContent: 'flex-end',
  },
});
