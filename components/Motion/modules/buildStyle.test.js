import buildStyle from './buildStyle';

const props = {
  delay: 100,
  duration: 1000,
  type: 'timming',
  useNativeDriver: true,
}

const state = {
  timeline: [
    { property: 'opacity', value: 0.75 },
    { property: 'scale', value: 0.5 },
    { property: 'left', value: 128 },
  ]
};

jest.useFakeTimers();

describe('layout()', () => {
  it('default', () => {
    const style = buildStyle();
    expect(style).toEqual(undefined);
  });

  it('using native driver', () => {
    const style = buildStyle({ props, state });
    expect(Object.keys(style).length).toEqual(3);
    // expect(style.transitionDelay).toEqual('100ms');
    // expect(style.transitionDuration).toEqual('1000ms');
    // expect(style.transitionProperty).toEqual('opacity, transform, left');
    // expect(style.transitionTimingFunction).toEqual('cubic-bezier(0.4, 0.0, 0.2, 1)');
    expect(style.opacity).toEqual(0.75);
    expect(style.transform).toEqual([{"scale": 0.5}]);
    expect(style.left).toEqual(128);
  });

  it('NOT using native driver', () => {
    const style = buildStyle({ props: { ...props, useNativeDriver: false }, state });
    expect(Object.keys(style).length).toEqual(3);
    expect(style.opacity).toEqual(undefined);
    expect(style.transform).toEqual([{ scale: undefined }]);
    expect(style.left).toEqual(undefined);
  });

  it('NOT using native driver with state', () => {
    let style = buildStyle({
      props: { ...props, useNativeDriver: false },
      state: { ...state, opacity: 0.75, scale: 0.5, left: 128 },
    });
    expect(Object.keys(style).length).toEqual(3);
    expect(style.opacity).toEqual(0.75);
    expect(style.transform).toEqual([{ scale: 0.5 }]);
    expect(style.left).toEqual(128);
  });
});
