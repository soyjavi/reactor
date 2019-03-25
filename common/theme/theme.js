import { Platform } from 'react-native';

const BLACK = '#000000';
const FAMILY = Platform.OS === 'web' ? '"Open Sans", sans-serif' : undefined;
const FAMILY_SECONDARY = Platform.OS === 'web' ? 'Montserrat, sans-serif' : undefined;
const UNIT = 10;
const WEIGHT = {
  REGULAR: '400',
  SEMIBOLD: '600',
  BOLD: '700',
};

export default {
  BORDER_RADIUS: UNIT * 0.3,

  COLOR: {
    // Theme
    BACKGROUND: '#F5F5F6',
    BASE: '#cdd2d4',
    PRIMARY: '#10c0bc',
    SECONDARY: '#a66ecc',

    // -- Text
    TEXT: '#4a4a4a',
    TEXT_LIGHTEN: '#707070',
    TEXT_LIGHT_GREY: '#9B9B9B',
    // -- Notifications
    ALERT: '#FBB049',
    ERROR: '#d33c44',
    SUCCESS: '#84BD4B',
    WARNING: '#FDCD48',
    // -- Helpers
    DISABLED: '#f4f4f4',
    TRANSPARENT: 'transparent',
    BLACK,
    WHITE: '#ffffff',
  },

  ELEVATION: {
    // 2p
    SMALL: {
      shadowColor: BLACK,
      shadowOffset: { height: 1, width: 0 },
      shadowOpacity: 0.20,
      shadowRadius: 2,
      ...Platform.select({
        android: { elevation: 2 },
      }),
    },

    // 8p
    REGULAR: {
      shadowColor: BLACK,
      shadowOffset: { height: 2, width: 0 },
      shadowOpacity: 0.20,
      shadowRadius: 8,
      ...Platform.select({
        android: { elevation: 8 },
      }),
    },

    // 20p
    LARGE: {
      shadowColor: BLACK,
      shadowOffset: { height: 4, width: 0 },
      shadowOpacity: 0.30,
      shadowRadius: 24,
      ...Platform.select({
        android: { elevation: 24 },
      }),
    },
  },

  FONT: {
    FAMILY,
    FAMILY_SECONDARY,
    DEFAULT: {
      fontFamily: FAMILY,
      fontWeight: WEIGHT.REGULAR,
    },
    HEADLINE: {
      fontFamily: FAMILY_SECONDARY,
      fontWeight: WEIGHT.BOLD,
    },
    SUBTITLE: {
      fontFamily: FAMILY,
      fontWeight: WEIGHT.SEMIBOLD,
    },
    CAPTION: {},
    BUTTON: {
      fontFamily: FAMILY_SECONDARY,
      fontWeight: WEIGHT.SEMIBOLD,
    },
    INPUT: {
      fontFamily: FAMILY,
      fontWeight: WEIGHT.REGULAR,
    },
    WEIGHT,
  },

  MOTION: {
    DURATION: 225,
    EASE: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    EASE_IOS: '',
    EASE_ANDROID: '',
  },

  OFFSET: UNIT * 1.6,

  UNIT,

  SPACE: {
    XS: UNIT * 0.8,
    S: UNIT * 1.2,
    MEDIUM: UNIT * 1.6,

    REGULAR: UNIT * 2,

    L: UNIT * 2.8,
    XL: UNIT * 3.2,
    XXL: UNIT * 60,
  },

  STRIKETHROUGH: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    position: 'absolute',
    width: '100%',
  },
};
