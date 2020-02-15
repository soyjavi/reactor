import { Platform } from 'react-native';

const { NODE_ENV } = process.env;

const WHITE = '#ffffff';
const BLACK = '#191919';
const FAMILY = undefined;
const UNIT = 8;

const GRAY = {
  S: '#e3e3e3',
  M: '#d2d2d2',
  L: '#a3a3a3',
  XL: '#7d7d7d',
};

export default {
  BORDER_RADIUS: 0,

  COLOR: {
    BRAND: BLACK,
    CTA: '#62e6ac',
    BLACK,
    WHITE,
    GRAY,

    // BASE: '#cdd2d4',

    BACKGROUND: WHITE,
    TEXT: BLACK,
    SUCCESS: '#77d27f',
    ERROR: '#e85a7e',
    TRANSPARENT: 'transparent',
  },

  ELEVATION: {
    shadowColor: BLACK,
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
      textAlignVertical: 'center',
    },
    HEADLINE: {
      fontSize: UNIT * 4,
      fontWeight: '700',
    },
    SUBTITLE: {
      fontSize: UNIT * 3,
    },
    BODY: {
      fontSize: UNIT * 2,
      lineHeight: UNIT * 3,
    },
    CAPTION: {
      fontSize: UNIT + UNIT / 2,
    },
    INPUT: {
      fontSize: UNIT * 2,
    },
  },
  INPUT: {
    backgroundColor: WHITE,
    borderColor: GRAY.L,
    borderRadius: 0,
    borderWidth: 1,
    paddingHorizontal: UNIT,
  },

  MOTION: {
    DURATION: 225,
    TYPE: 'spring',
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

  SPACE: {
    XS: UNIT / 2,
    S: UNIT,
    M: UNIT * 2,
    L: UNIT * 3,
    XL: UNIT * 4,
    XXL: UNIT * 6,
  },

  UNIT,
};
