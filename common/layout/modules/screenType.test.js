import screenType from './screenType';

describe('screenType', () => {
  it('default', () => {
    const type = screenType();
    expect(Object.keys(type)).toEqual(['S', 'M', 'L']);
    expect(type.S).toBeTruthy();
    expect(type.M).not.toBeTruthy();
    expect(type.L).not.toBeTruthy();
  });

  it('is a PHONE screen', () => {
    const type = screenType(360);
    expect(type.S).toBeTruthy();
  });

  it('is a TABLET screen', () => {
    const type = screenType(480);
    expect(type.M).toBeTruthy();
  });

  it('is a DESKTOP screen', () => {
    const type = screenType(768);
    expect(type.L).toBeTruthy();
  });
});
