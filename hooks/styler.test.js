import { ALIGNS, SPACES, styler, useStyler } from './styler';

const { CENTER } = ALIGNS;
const { XS, S, M, L, XL } = SPACES;

describe('hook:styler', () => {
  test('default', () => {
    expect(styler()).toEqual([]);
  });

  test('alignSelf', () => {
    expect(styler({ alignSelf: undefined })).toEqual([]);
    expect(styler({ alignSelf: CENTER })).toEqual(['alignSelfCenter']);
  });

  describe('margin', () => {
    test('default', () => {
      expect(styler({ margin: [] })).toEqual([]);
      expect(styler({ margin: [XS, S, M, L] })).toEqual([
        'marginTopXS',
        'marginRightS',
        'marginBottomM',
        'marginLeftL',
      ]);
      expect(styler({ margin: [XS, null, null, L] })).toEqual(['marginTopXS', 'marginLeftL']);
    });

    test('marginTop', () => {
      expect(styler({ marginTop: undefined })).toEqual([]);
      expect(styler({ marginTop: XL })).toEqual(['marginTopXL']);
    });

    test('marginRight', () => {
      expect(styler({ marginRight: undefined })).toEqual([]);
      expect(styler({ marginRight: XL })).toEqual(['marginRightXL']);
    });

    test('marginBottom', () => {
      expect(styler({ marginBottom: undefined })).toEqual([]);
      expect(styler({ marginBottom: XL })).toEqual(['marginBottomXL']);
    });

    test('marginLeft', () => {
      expect(styler({ marginLeft: undefined })).toEqual([]);
      expect(styler({ marginLeft: XL })).toEqual(['marginLeftXL']);
    });

    test('marginHorizontal', () => {
      expect(styler({ marginHorizontal: undefined })).toEqual([]);
      expect(styler({ marginHorizontal: XL })).toEqual(['marginRightXL', 'marginLeftXL']);
    });

    test('marginVertical', () => {
      expect(styler({ marginVertical: undefined })).toEqual([]);
      expect(styler({ marginVertical: XL })).toEqual(['marginTopXL', 'marginBottomXL']);
    });
  });

  describe('padding', () => {
    test('default', () => {
      expect(styler({ padding: [] })).toEqual([]);
      expect(styler({ padding: [XS, S, M, L] })).toEqual([
        'paddingTopXS',
        'paddingRightS',
        'paddingBottomM',
        'paddingLeftL',
      ]);
      expect(styler({ padding: [XS, null, null, L] })).toEqual(['paddingTopXS', 'paddingLeftL']);
    });

    test('paddingTop', () => {
      expect(styler({ paddingTop: undefined })).toEqual([]);
      expect(styler({ paddingTop: XL })).toEqual(['paddingTopXL']);
    });

    test('paddingRight', () => {
      expect(styler({ paddingRight: undefined })).toEqual([]);
      expect(styler({ paddingRight: XL })).toEqual(['paddingRightXL']);
    });

    test('paddingBottom', () => {
      expect(styler({ paddingBottom: undefined })).toEqual([]);
      expect(styler({ paddingBottom: XL })).toEqual(['paddingBottomXL']);
    });

    test('paddingLeft', () => {
      expect(styler({ paddingLeft: undefined })).toEqual([]);
      expect(styler({ paddingLeft: XL })).toEqual(['paddingLeftXL']);
    });

    test('paddingHorizontal', () => {
      expect(styler({ paddingHorizontal: undefined })).toEqual([]);
      expect(styler({ paddingHorizontal: XL })).toEqual(['paddingRightXL', 'paddingLeftXL']);
    });

    test('paddingVertical', () => {
      expect(styler({ paddingVertical: undefined })).toEqual([]);
      expect(styler({ paddingVertical: XL })).toEqual(['paddingTopXL', 'paddingBottomXL']);
    });
  });
});

describe('hook:useStyler', () => {
  test('default', () => {
    expect(useStyler()).toEqual({ style: [undefined] });
  });

  test('customStyle', () => {
    expect(useStyler({ customStyle: 'reactorStyle' })).toEqual({ style: ['reactorStyle'] });
  });

  // test('styler props', () => {
  //   expect(useStyler({ alignSelf: ALIGNS.CENTER, marginVertical: SPACES.XS, paddingHorizontal: SPACES.XL })).toEqual({
  //     style: 'alignSelfCenter marginTopXS marginBottomXS paddingRightXL paddingLeftXL',
  //   });
  // });

  // test('combining all', () => {
  //   expect(
  //     useStyler({
  //       customStyle: 'aurora-style',
  //       alignSelf: ALIGNS.CENTER,
  //       marginVertical: SPACES.XS,
  //       paddingHorizontal: SPACES.XL,
  //     }),
  //   ).toEqual({
  //     style: 'aurora-component aurora-style alignSelfCenter marginTopXS marginBottomXS paddingRightXL paddingLeftXL',
  //   });
  // });
});
