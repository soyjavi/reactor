import { createElement } from 'react';

import { serverSideStyle } from '../../common';

export default ({ alt = 'reactor', source: { uri }, style, title }) =>
  createElement('img', {
    alt,
    src: uri,
    style: serverSideStyle(style),
    title,
  });
