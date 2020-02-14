import screenType from './screenType';

describe('screenType', () => {
  it('default', () => {
    const type = screenType();
    expect(Object.keys(type)).toEqual(['TINY', 'PHONE', 'TABLET', 'SMALL', 'REGULAR', 'LARGE']);
    expect(type.TINY).not.toBeTruthy();
    expect(type.PHONE).toBeTruthy();
    expect(type.TABLET).not.toBeTruthy();
    expect(type.SMALL).not.toBeTruthy();
    expect(type.REGULAR).not.toBeTruthy();
    expect(type.LARGE).not.toBeTruthy();
  });

  it('is a TINY screen', () => {
    const type = screenType(320);
    expect(type.TINY).toBeTruthy();
  });

  it('is a PHONE screen', () => {
    const type = screenType(360);
    expect(type.PHONE).toBeTruthy();
  });

  it('is a TABLET screen', () => {
    const type = screenType(480);
    expect(type.TABLET).toBeTruthy();
  });

  it('is a SMALL screen', () => {
    const type = screenType(640);
    expect(type.SMALL).toBeTruthy();
  });

  it('is a REGULAR screen', () => {
    const type = screenType(768);
    expect(type.REGULAR).toBeTruthy();
  });

  it('is a LARGE screen', () => {
    const type = screenType(1024);
    expect(type.LARGE).toBeTruthy();
  });
});
