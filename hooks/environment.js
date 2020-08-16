import { DeviceInfo, Platform } from 'react-native';

import PKG from '../package.json';

const { NODE_ENV } = process.env;
const IS_WEB = Platform.OS === 'web';
const IS_PRODUCTION = NODE_ENV === 'production';
const IS_MOBILE_WEB = IS_WEB
  ? /iPhone|Android|Tablet|iPad|Mobile|iPod|Windows Phone|Blackberry/i.test(DeviceInfo.userAgent)
  : false;

if (IS_WEB) window.reactor = { version: PKG.version };

export const useEnvironment = () => {
  return {
    IS_NATIVE: !IS_WEB,
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
  };
};
