import { Platform } from 'react-native';

const { NODE_ENV, REACT_APP_ENV = 'development' } = process.env;

const IS_SERVER = typeof window === 'undefined';
const IS_WEB = Platform.OS === 'web';
const IS_PRODUCTION = NODE_ENV === 'production' && NODE_ENV === REACT_APP_ENV;

export default {
  IS_NATIVE: !IS_WEB,
  IS_SERVER: IS_SERVER && IS_WEB,
  IS_WEB,

  IS_PRODUCTION,
  IS_DEVELOPMENT: !IS_PRODUCTION,

  NODE_ENV,
  REACT_APP_ENV,
};
