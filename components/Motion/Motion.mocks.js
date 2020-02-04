import { THEME } from '../../common';

const STYLE = { backgroundColor: THEME.COLOR.BRAND, padding: 32 };
const STYLE_VIEW = {
  width: 128,
  height: 128,
  backgroundColor: THEME.COLOR.ERROR,
};

const TIMELINE = [
  { property: 'opacity', value: 0.75 },
  { property: 'scale', value: 0.5 },
  { property: 'left', value: 128 },
];

export default { STYLE, STYLE_VIEW, TIMELINE };
