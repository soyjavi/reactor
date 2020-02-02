const TRANSFORM_PROPERTIES = ['scale', 'translateX', 'translateY', 'rotate'];

export default (timeline = [], state = {}) => {
  if (timeline.length === 0 || Object.keys(state).length === 0) return undefined;

  let style = {};
  timeline.forEach(({ property }) => {
    const newValue = state[property];

    style = {
      ...style,
      ...(TRANSFORM_PROPERTIES.includes(property)
        ? { transform: [{ [property]: newValue }] }
        : { [property]: newValue }),
    };
  });

  return style;
};
