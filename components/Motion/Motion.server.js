import { createElement } from 'react';

import { serverSideStyle } from '../../common';

export default ({ children, style }) => createElement('div', { style: serverSideStyle(style) }, children);
