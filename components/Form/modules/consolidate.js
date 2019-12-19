export default (attributes = {}, value = {}) => {
  const nextValue = {};

  Object.keys(attributes).forEach((key) => {
    nextValue[key] = value[key];
    if (attributes[key].defaultValue && nextValue[key] === undefined) {
      nextValue[key] = attributes[key].defaultValue;
    }
  });

  return nextValue;
};
