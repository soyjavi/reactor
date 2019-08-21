export default (values = []) => {
  if (values.length === 0) return {};
  const max = Math.floor(Math.max(...values));
  let min = Math.floor((parseInt(Math.min(...(values.filter((value) => value > 0))), 10) || 0) / 1.05);
  // min = 0;
  let avg = Math.floor(values.reduce((a, b) => a + b) / (values.length - values.findIndex((value) => value > 0)));

  if (avg === max) {
    avg /= 2;
    min = 0;
  }

  return { max, min, avg };
};
