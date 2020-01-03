import STYLE from './style';
import screenType from './screenType';

export default (width = 360) => {
  const { TINY, PHONE, TABLET, SMALL, REGULAR, LARGE } = screenType(width);
  const DEFAULT = REGULAR || LARGE;

  return {
    CARD: {
      HEIGHT: DEFAULT ? STYLE.cardHeightRegular : STYLE.cardHeightSmall,
      PORTRAIT: (() => {
        if (TINY) return STYLE.cardHeightPortraitTiny;
        if (PHONE || SMALL) return STYLE.cardHeightPortraitSmall;
        if (TABLET || REGULAR) return STYLE.cardHeightPortraitRegular;

        return STYLE.cardHeightPortraitDefault;
      })(),

      WIDTH: (() => {
        if (TINY) return STYLE.cardWidthTiny;
        if (PHONE || SMALL) return STYLE.cardWidthSmall;
        if (TABLET || REGULAR) return STYLE.cardWidthRegular;

        return STYLE.cardWidthDefault;
      })(),

      SLIDER: (() => {
        if (TINY) return 130;
        if (PHONE || SMALL) return 15;
        if (TABLET || REGULAR) return 168;

        return 236;
      })(),
    },
  };
};
