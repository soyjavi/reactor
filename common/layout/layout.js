import { Dimensions, Platform } from 'react-native';

import { renderStyle, screenType, style, userAgentScreenSize } from './modules';

class Layout {
  constructor() {
    if (!Layout.instance) {
      const { height, width } = Dimensions.get('window');
      Layout.instance = this;
      this.height = height || 640;
      this.width = width || 360;
      this.style = renderStyle(width);
    }
    return Layout.instance;
  }

  get CARD() {
    return this.style.CARD;
  }

  get TEXT() {
    return this.style.TEXT;
  }

  get STYLE() { // eslint-disable-line
    return style;
    // return this.style;
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
    this.style = renderStyle(width);
  }

  // extendStyle() {}
}

export default new Layout();
