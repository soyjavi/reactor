import { Dimensions, Platform } from 'react-native';

import { screenType, userAgentScreenSize } from './modules';

class Layout {
  constructor() {
    if (!Layout.instance) {
      const { height, width } = Dimensions.get('window');
      Layout.instance = this;
      this.height = height || 640;
      this.width = width || 360;
    }
    return Layout.instance;
  }

  get VIEWPORT() {
    const { height: H, width: W } = this;
    const PORTRAIT = H > W;

    return {
      H,
      W,

      PORTRAIT,
      LANDSCAPE: W > H,
      IPHONEX: PORTRAIT && H === 812 && Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS,

      ...screenType(W),
    };
  }

  calc(size, userAgent) {
    let { height, width } = this;

    if (!size && !userAgent) {
      ({ height, width } = Dimensions.get('window'));
    } else if (size) {
      ({ height, width } = size);
    } else if (userAgent) {
      ({ height, width } = userAgentScreenSize(userAgent));
    }

    this.height = height;
    this.width = width;
  }
}

const LAYOUT = new Layout();

export { LAYOUT };
