import { DeviceInfo, Platform } from 'react-native';
import PKG from '../package.json';

const { NODE_ENV, REACT_APP_ENV = 'development' } = process.env;
const IS_SERVER = typeof window === 'undefined';
const IS_WEB = Platform.OS === 'web';
const IS_PRODUCTION = NODE_ENV === 'production' && NODE_ENV === REACT_APP_ENV;
const IS_MOBILE_WEB =
  IS_WEB && !IS_SERVER
    ? /iPhone|Android|Tablet|iPad|Mobile|iPod|Windows Phone|Blackberry/i.test(DeviceInfo.userAgent)
    : false;

if (IS_WEB && !IS_SERVER) window.reactor = { version: PKG.version };

export default {
  IS_NATIVE: !IS_WEB,
  IS_SERVER: IS_SERVER && IS_WEB,
  IS_WEB,
  IS_MOBILE_WEB,
  IS_PRODUCTION,
  IS_DEVELOPMENT: !IS_PRODUCTION,
  IS_TEST: NODE_ENV === 'test',

  NODE_ENV,

  PKG: {
    name: PKG.name,
    version: PKG.version,
  },

  REACT_APP_ENV,
};
