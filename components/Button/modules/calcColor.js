import { THEME } from '../../../common';

const {
  COLOR: { TEXT_LIGHTEN, WHITE },
} = THEME;

export default ({ isSolid, color, colorContent, disabled }) => {
  if (!disabled && colorContent) return colorContent;
  else if (disabled || (isSolid && color === WHITE)) return TEXT_LIGHTEN;
  else if (isSolid) return WHITE;

  return color;
};
