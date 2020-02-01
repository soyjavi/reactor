import buildStyle from './buildStyle';

jest.useFakeTimers();

describe('layout()', () => {
  it('default', () => {
    const style = buildStyle();
    expect(style).toEqual(undefined);
  });
});
