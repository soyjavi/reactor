import { DeviceInfo, Dimensions, PixelRatio, Platform } from 'react-native';

import { useEnvironment } from '../../../hooks';

const CLIENT_STRINGS = [
  { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
  { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
  { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
  { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
  { s: 'Windows vista', r: /Windows NT 6.0/ },
  { s: 'Windows server 2003', r: /Windows NT 5.2/ },
  { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
  { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
  { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
  { s: 'Windows 98', r: /(Windows 98|Win98)/ },
  { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
  { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
  { s: 'Windows CE', r: /Windows CE/ },
  { s: 'Windows 3.11', r: /Win16/ },
  { s: 'Android', r: /Android/ },
  { s: 'Open BSD', r: /OpenBSD/ },
  { s: 'Sun OS', r: /SunOS/ },
  { s: 'Linux', r: /(Linux|X11)/ },
  { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
  { s: 'Mac OS X', r: /Mac OS X/ },
  { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
  { s: 'Qnx', r: /QNX/ },
  { s: 'Unix', r: /UNIX/ },
  { s: 'BeOS', r: /BeOS/ },
  { s: 'OS/2', r: /OS\/2/ },
  { s: 'search bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ },
];
const { OS, Version } = Platform;
const { IS_NATIVE, IS_WEB } = useEnvironment();
const { height, width } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const fontScale = PixelRatio.getFontScale();
const { locale, totalMemory, userAgent } = DeviceInfo;
const isTablet = (height > width && width >= 768) || (height < width && width >= 1024);

let deviceManufacturer;
let deviceModel;
let osName;
let osVersion;
let browserName;
let browserVersion;

if (IS_NATIVE) {
  osName = OS === 'android' ? 'Android' : 'iOS';
  osVersion = Version;
} else if (IS_WEB && window && window.navigator) {
  const { appVersion } = window.navigator;

  // -- Determine OS -----------------------------------------------------------
  CLIENT_STRINGS.some((client) => {
    const found = client.r.test(userAgent);
    if (found) osName = client.s;
    return found;
  });

  if (/Windows/.test(osName)) {
    osVersion = /Windows (.*)/.exec(osName)[1]; // eslint-disable-line
    osName = 'Windows';
  }

  switch (osName) {
    case 'Mac OS X':
      // osVersion = /Mac OS X (10[\.\_\d]+)/.exec(userAgent)[1];
      osVersion = /Mac OS X 10_(\d+)_?(\d+)?/.exec(appVersion) || [];
      osVersion = `${osVersion[1]}.${osVersion[2]}`;
      break;

    case 'Android':
      osVersion = /Android ([\.\_\d]+)/.exec(userAgent)[1]; // eslint-disable-line
      break;

    case 'iOS':
      osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(appVersion);
      osVersion = `${osVersion[1]}.${osVersion[2]}.${osVersion[3] || 0}`;
      break;

    default:
      break;
  }

  // -- Determine browser ------------------------------------------------------
  if (userAgent.indexOf('Edge') !== -1) {
    // Microsoft Edge
    browserName = 'Microsoft Edge';
    browserVersion = userAgent.substring(userAgent.indexOf('Edge') + 5);
  } else if (userAgent.indexOf('Chrome') !== -1) {
    // Chrome
    browserName = 'Chrome';
    browserVersion = userAgent.substring(userAgent.indexOf('Chrome') + 7);
  } else if (userAgent.indexOf('Trident/') !== -1) {
    // MSIE 11+
    browserName = 'Microsoft Internet Explorer';
    browserVersion = userAgent.substring(userAgent.indexOf('rv:') + 3);
  } else if (userAgent.indexOf('MSIE') !== -1) {
    // MSIE
    browserName = 'Microsoft Internet Explorer';
    browserVersion = userAgent.substring(userAgent.indexOf('MSIE') + 5);
  } else if (userAgent.indexOf('Firefox') !== -1) {
    // Firefox
    browserName = 'Firefox';
    browserVersion = userAgent.substring(userAgent.indexOf('Firefox') + 8);
  } else if (userAgent.indexOf('Safari') !== -1) {
    // Safari
    browserName = 'Safari';
    browserVersion = userAgent.substring(userAgent.indexOf('Safari') + 7);
    if (userAgent.indexOf('Version') !== -1) browserVersion = userAgent.substring(userAgent.indexOf('Version') + 8);
  } else if (userAgent.indexOf('Opera') !== -1) {
    // Opera
    browserName = 'Opera';
    browserName = userAgent.substring(userAgent.indexOf('Opera') + 6);
    if (userAgent.indexOf('Version') !== -1) browserVersion = userAgent.substring(userAgent.indexOf('Version') + 8);
  } else if (userAgent.indexOf('OPR') !== -1) {
    // Opera Next
    browserName = 'Opera';
    browserVersion = userAgent.substring(userAgent.indexOf('OPR') + 4);
  }

  if (browserVersion) {
    [';', ' ', ')'].forEach((char) => {
      const offset = browserVersion.indexOf(char);
      if (offset !== -1) browserVersion = browserVersion.substring(0, offset);
    });
    const release = browserVersion.split('.');
    browserVersion = `${release[0]}.${release[1]}`;
  }
}

// -- Determine device ---------------------------------------------------------
if (osName === 'iOS') {
  deviceManufacturer = 'Apple';
  deviceModel = isTablet ? 'iPad' : 'iPhone';
} else if (osName === 'Android') {
  // deviceModel = 'Android';
  deviceModel = isTablet ? 'Android Tablet' : 'Android Phone';
} else if (osName === 'Mac OS X') {
  deviceManufacturer = 'Apple';
  deviceModel = 'Mac';
} else {
  deviceModel = 'Desktop';
}

export default {
  // Browser
  browserName,
  browserVersion,
  // Device
  deviceManufacturer,
  deviceModel,
  // OS
  osName,
  osVersion,
  // Screen
  height,
  fontScale,
  locale,
  pixelRatio,
  width,
  // Others
  totalMemory,
  userAgent,
};
