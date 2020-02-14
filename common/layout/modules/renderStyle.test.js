import renderStyle from './renderStyle';

describe('renderStyle', () => {
  it('default', () => {
    const style = renderStyle();
    expect(style).toBeDefined();
    expect(Object.keys(style)).toEqual(['CARD']);
  });
});
