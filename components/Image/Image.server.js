import { createElement } from 'react';

import { serverSideStyle } from '../../common';

const DEFAULT_ALT = 'minube.com';

export default ({
  alt = DEFAULT_ALT, source: { uri }, style, title,
}) => createElement('img', {
  alt,
  src: uri,
  style: serverSideStyle(style),
  title,
});
