import { LAYOUT } from '../../../common';

export default ({ inline, style }, styles) => {
  if (!inline) return [styles.anchor, style];

  const value = [style];
  const {
    VIEWPORT: { REGULAR, LARGE },
  } = LAYOUT;

  if (inline === 2) value.push(styles.inline2);
  else if (REGULAR || LARGE) value.push(styles[`inline${inline}`]);

  return value;
};
