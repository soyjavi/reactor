import { THEME } from '../../common';

const COLOR = THEME.COLOR.PRIMARY;

const ICONS = [
  'close',
  'closeContrast',
  'doneContrast',
  'email',
  'error',
  'errorOutline',
  'facebook',
  'google',
  'left',
  'linkedin',
  'navRight',
  'navDown',
  'navLeft',
  'navUp',
  'right',
  'shareContrast',
  'twitter',
];

const STYLE = {
  backgroundColor: THEME.COLOR.PRIMARY,
};

const VALUE = ICONS[0];
const VALUE_NAV = {
  RIGHT: 'navRight',
  DOWN: 'navDown',
  LEFT: 'navLeft',
  UP: 'navUp',
};

const VALUE_URI = 'http://soyjavi.com/assets/images/soyjavi.jpg';

export default {
  COLOR,
  ICONS,
  STYLE,
  VALUE,
  VALUE_NAV,
  VALUE_URI,
};
