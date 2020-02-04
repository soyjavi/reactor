import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { useEnvironment } from '../../hooks';

const { IS_WEB } = useEnvironment();
const { COLOR, SPACE } = THEME;

export default StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    height: SPACE.L,
    marginTop: SPACE.M,
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

  background: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  content: {
    paddingHorizontal: SPACE.M,
    paddingVertical: SPACE.M,
  },

  contentWithButton: {
    paddingTop: 0,
  },

  frame: {
    backgroundColor: COLOR.WHITE,
  },

  keyboardView: {
    backgroundColor: COLOR.TRANSPARENT,
    width: '100%',
    maxHeight: '100%',
    position: 'absolute',
  },

  overlay: {
    ...LAYOUT.STYLE.CENTERED,
    flex: 1,
  },
});
