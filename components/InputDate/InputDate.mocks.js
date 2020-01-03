const ERROR = 'Something happened...';

const HINT = 'Optional field';

const LABEL = 'Date';

const PLACEHOLDER = 'Select date...';

const STYLE = {
  backgroundColor: 'rgba(0,255,0,0.25)',
  paddingBottom: 32,
  marginRight: 16,
  width: 256,
};

const VALUE = new Date(2019, 10, 10, 0, 0);
const VALUE_RANGE = [VALUE, new Date(2019, 10, 21, 0, 0)];

export { ERROR, HINT, LABEL, PLACEHOLDER, STYLE, VALUE, VALUE_RANGE };
