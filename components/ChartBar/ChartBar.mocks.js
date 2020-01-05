import { THEME } from '../../common';
import { LOCALE } from '../Calendar/modules';

const { COLOR, ELEVATION, SPACE, UNIT } = THEME;

const STYLE_BAR = {
  width: UNIT,
  borderTopRightRadius: UNIT / 2,
  borderTopLeftRadius: UNIT / 2,
};

const STYLE_CONTAINER = {
  ...ELEVATION.SMALL,
  backgroundColor: COLOR.WHITE,
  height: UNIT * 32,
  width: UNIT * 64,
  padding: SPACE.REGULAR,
};

const CAPTIONS = [...LOCALE.MONTHS];

const HIGHLIGHT = 7;

const INVERTED = false;

const SCALES = ['$24', '$10', '$5', ''];

const VALUES = [0, 0, 2, 8, 0, 0, 16, 8, 32, 24, 8, 10];

const LINES = [
  {
    caption: 'AVG. $16',
    percent: 85,
    color: COLOR.PRIMARY,
  },
  {
    caption: 'PRO. $3.34',
    percent: 20,
    color: COLOR.ERROR,
  },
];

export default {
  CAPTIONS,
  COLOR: COLOR.ERROR,
  HIGHLIGHT,
  INVERTED,
  LINES,
  SCALES,
  STYLE_BAR,
  STYLE_CONTAINER,
  VALUES,
};
