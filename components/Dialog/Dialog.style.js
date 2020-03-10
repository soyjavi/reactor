import { StyleSheet } from 'react-native';

import { THEME } from '../../common';
import { useEnvironment } from '../../hooks';

const { IS_WEB } = useEnvironment();
const { COLOR, DIALOG, DIALOG_OVERLAY, SPACE } = THEME;

export default StyleSheet.create({
  button: {
    position: 'absolute',
    zIndex: 1,
    top: SPACE.S,
    right: SPACE.S,
  },

  buttonSwipe: {
    position: 'absolute',
    zIndex: 1,
    top: SPACE.M,
    alignSelf: 'center',

    borderRadius: SPACE.XS,
    height: SPACE.S,
    width: SPACE.XL,
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

  content: DIALOG,

  keyboardView: {
    backgroundColor: COLOR.TRANSPARENT,
    width: '100%',
    maxHeight: '100%',
    position: 'absolute',
  },

  overlay: DIALOG_OVERLAY,

  top: {
    justifyContent: 'flex-start',
  },

  bottom: {
    justifyContent: 'flex-end',
  },
});
