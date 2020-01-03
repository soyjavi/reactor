import { Platform } from 'react-native';

const WHITE = '#ffffff';
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
    BACKGROUND: WHITE,
    BACKGROUND_INPUT: WHITE,
    BASE: '#cdd2d4', // disabled
    BLACK,
    DISABLED: '#f4f4f4', // lightVi
    ERROR: '#ef5160',
    LIGHT_GREY: '#9B9B9B',
    PRIMARY: '#10c0bc',
    SECONDARY: '#a66ecc',
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
    FAMILY_SECONDARY,
    BUTTON: {
      fontFamily: FAMILY_SECONDARY,
      fontWeight: WEIGHT.SEMIBOLD,
    },
    DEFAULT: {
      fontFamily: FAMILY,
      fontWeight: WEIGHT.REGULAR,
    },
    HEADLINE: {},
    SUBTITLE: {},
    CAPTION: {},
    INPUT: {},
    WEIGHT,
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
