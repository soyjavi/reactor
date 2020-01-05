import { Platform } from 'react-native';

const WHITE = '#ffffff';
const BLACK = '#000000';
const FAMILY = undefined;
const UNIT = 10;

export default {
  BORDER_RADIUS: UNIT * 0.3,

  COLOR: {
    BACKGROUND: WHITE,
    BACKGROUND_INPUT: WHITE,
    BASE: '#cdd2d4',
    BLACK,
    DISABLED: '#f4f4f4',
    SUCCESS: '#4CAF50',
    ERROR: '#f44336',
    PRIMARY: '#10c0bc',
    TEXT: '#4a4a4a',
    TEXT_LIGHTEN: '#707070',
    TRANSPARENT: 'transparent',
    WHITE,
  },

  ELEVATION: {
    // 2p
    SMALL: {
      shadowColor: BLACK,
      shadowOffset: { height: 1, width: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      ...Platform.select({
        android: { elevation: 2 },
      }),
    },

    // 8p
    REGULAR: {
      shadowColor: BLACK,
      shadowOffset: { height: 2, width: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      ...Platform.select({
        android: { elevation: 8 },
      }),
    },

    // 20p
    LARGE: {
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
    BUTTON_SMALL: {},
    DEFAULT: {
      fontFamily: FAMILY,
    },
    HEADLINE: {
      fontSize: UNIT * 2.4,
    },
    SUBTITLE: {
      fontSize: UNIT * 1.8,
    },
    BODY: {
      fontSize: UNIT * 1.6,
      lineHeight: UNIT * 1.6 * 1.2,
    },
    CAPTION: {
      fontSize: UNIT * 1.4,
    },
    INPUT: {
      fontSize: UNIT * 1.6,
    },
  },

  MOTION: {
    DURATION: 225,
    EASE: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    EASE_ANDROID: '',
    EASE_IOS: '',
  },

  OFFSET: UNIT * 1.6, // @TODO: We should remove this property

  UNIT,

  SPACE: {
    XXS: UNIT * 0.4,
    XS: UNIT * 0.8,
    S: UNIT * 1.2,
    MEDIUM: UNIT * 1.6,
    REGULAR: UNIT * 2,
    L: UNIT * 2.8,
    XL: UNIT * 3.2,
    XXL: UNIT * 6,
  },
};
