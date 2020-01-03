import { createElement } from 'react';

import { serverSideStyle } from '../../common';

export default ({ children, href, style }) => createElement('a', { href, style: serverSideStyle(style) }, children);
