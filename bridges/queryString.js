export const queryString = (props = {}) =>
  Object.keys(props)
    .filter((key) => props[key] !== undefined && props[key] !== '')
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(props[key])}`)
    .join('&');
