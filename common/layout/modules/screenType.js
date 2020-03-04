export default (width = 360) => ({
  S: width < 420,
  M: width >= 420 && width < 720,
  L: width >= 720,
});
