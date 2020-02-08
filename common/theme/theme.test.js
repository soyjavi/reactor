import theme from './theme';

const KEYS = ['BORDER_RADIUS', 'COLOR', 'ELEVATION', 'FONT', 'INPUT', 'MOTION', 'OPACITY', 'SPACE', 'UNIT'];

describe('theme', () => {
  it('default', () => {
    expect(Object.keys(theme)).toEqual(KEYS);
  });
});
