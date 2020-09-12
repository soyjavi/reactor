import { Platform } from 'react-native';

const { NODE_ENV } = process.env;

const FAMILY = undefined;
const UNIT = 8;
const SPACE = {
  XS: UNIT / 2,
  S: UNIT,
  M: UNIT * 2,
  L: UNIT * 3,
  XL: UNIT * 4,
  XXL: UNIT * 6,
};

export default {
  BORDER_RADIUS: 0,

  COLOR: {
    BRAND: '#191919',
    CTA: '#62e6ac',
    BLACK: '#000000',
    WHITE: '#ffffff',

    LIGHTEN: '#a3a3a3',
    BASE: '#d2d2d2',
    BACKGROUND: '#ffffff',
    ERROR: '#e85a7e',
    SUCCESS: '#77d27f',
    TEXT: '#191919',
    TRANSPARENT: 'transparent',
  },

  ELEVATION: {
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    ...Platform.select({
      android: { elevation: 8 },
    }),
  },

  FONT: {
    FAMILY,
    BOLD: {
      fontWeight: '700',
    },
    BUTTON: {
      fontWeight: '700',
    },
    DEFAULT: {
      fontFamily: FAMILY,
    },
    HEADLINE: {
      fontSize: SPACE.XL,
    },
    SUBTITLE: {
      fontSize: SPACE.L,
    },
    BODY: {
      fontSize: SPACE.M,
    },
    CAPTION: {
      fontSize: UNIT + UNIT / 2,
    },
    INPUT: {
      fontSize: UNIT * 2,
    },
    INPUT_FOCUS: {},
  },
  DIALOG: {
    padding: SPACE.L,
    backgroundColor: '#ffffff',
  },
  DIALOG_OVERLAY: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  INPUT: {
    backgroundColor: '#ffffff',
    borderColor: '#a3a3a3',
    borderRadius: 0,
    borderWidth: 1,
    paddingHorizontal: UNIT,
  },
  INPUT_FOCUS: {},

  MOTION: {
    EXPAND: 250,
    COLLAPSE: 200,
    TYPE: 'standard',
    DEFAULTS: {
      friction: undefined,
      tension: undefined,
      speed: undefined,
      bounciness: undefined,
      useNativeDriver: NODE_ENV !== 'test',
    },
  },

  OPACITY: {
    S: 0.2,
    M: 0.3,
    L: 0.5,
  },

  SPACE,

  UNIT,
};
