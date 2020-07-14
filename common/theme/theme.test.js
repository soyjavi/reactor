import theme from './theme';

const KEYS = [
  //
  'BORDER_RADIUS',
  'COLOR',
  'ELEVATION',
  'FONT',
  'DIALOG',
  'DIALOG_OVERLAY',
  'INPUT',
  'INPUT_FOCUS',
  'MOTION',
  'OPACITY',
  'SPACE',
  'UNIT',
];

describe('theme', () => {
  it('default', () => {
    expect(Object.keys(theme)).toEqual(KEYS);
  });
});
