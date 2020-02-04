import { func, node, oneOfType, shape, string } from 'prop-types';
import React, { createElement } from 'react';

import { Text } from '../..';
import styles from './ItemList.style';

export const ItemList = ({ template, value = {} }) =>
  template ? (
    createElement(template, { ...value })
  ) : (
    <Text style={styles.text}>{typeof value === 'object' ? value.title : value}</Text>
  );

ItemList.propTypes = {
  template: oneOfType([func, node]),
  value: oneOfType([string, shape({})]).isRequired,
};
