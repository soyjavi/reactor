import { THEME } from '../../../common';

const {
  COLOR: { TEXT_LIGHTEN, WHITE },
} = THEME;

export default ({ isSolid, color }) => {
  if (isSolid && color === WHITE) return TEXT_LIGHTEN;
  if (isSolid) return WHITE;
  return color;
};
