import { createElement } from 'react';

import { serverSideStyle, THEME } from '../../common';

const { COLOR } = THEME;
const STYLE = { color: COLOR.TEXT, marginTop: 0, marginBottom: 0 };

export default ({ children, color, headline, subtitle, caption, level = 1, style }) => {
  let tag = 'p';

  if (headline) tag = `h${level}`;
  else if (subtitle) tag = 'strong';
  else if (caption) tag = 'small';

  return createElement(
    tag,
    {
      style: { ...STYLE, ...serverSideStyle(style), color },
    },
    children,
  );
};
