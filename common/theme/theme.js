import { Platform } from 'react-native';

const WHITE = '#ffffff';
const BLACK = '#191919';
const FAMILY = undefined;
const UNIT = 8;

export default {
  BORDER_RADIUS: UNIT,

  COLOR: {
    BRAND: '#62e6ac', // PRIMARY: '#4066EA',
    CTA: '#ff8c5f',
    BLACK,
    WHITE,
    GRAY: {
      S: '#e3e3e3',
      M: '#d2d2d2',
      L: '#a3a3a3',
      XL: '#7d7d7d',
    },

    BACKGROND: WHITE,
    BACKGROUND_INPUT: WHITE,

    // BASE: '#cdd2d4',
    // DISABLED: '#f4f4f4',
    TEXT: BLACK,
    SUCCESS: '#77d27f',
    ERROR: '#e85a7e',

    TRANSPARENT: 'transparent',
  },

  SPACE: {
    XS: UNIT / 2,
    S: UNIT,
    M: UNIT * 2,
    L: UNIT * 3,
    XL: UNIT * 4,
    XXL: UNIT * 6,
  },

  // All spacing we use are the multiple of 8: 8 / 16 / 24 / 32 / 40 / 48 /... 8*n.

  ELEVATION: {
    // 2p
    S: {
      shadowColor: BLACK,
      shadowOffset: { height: 1, width: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      ...Platform.select({
        android: { elevation: 2 },
      }),
    },

    // 8p
    M: {
      shadowColor: BLACK,
      shadowOffset: { height: 2, width: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      ...Platform.select({
        android: { elevation: 8 },
      }),
    },

    // 20p
    L: {
      shadowColor: BLACK,
      shadowOffset: { height: 4, width: 0 },
      shadowOpacity: 0.3,
      shadowRadius: 24,
      ...Platform.select({
        android: { elevation: 24 },
      }),
    },
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

  MOTION: {
    DURATION: 225,
    TYPE: 'spring',
    DEFAULTS: {
      friction: undefined,
      tension: undefined,
      speed: undefined,
      bounciness: undefined,
      useNativeDriver: true,
    },
  },

  OFFSET: UNIT * 1.6, // @TODO: We should remove this property

  OPACITY: {
    S: 0.2,
    M: 0.3,
    L: 0.5,
  },

  UNIT,
};
