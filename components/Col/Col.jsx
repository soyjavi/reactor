import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { useBanStylerProps, useStyler } from '../../hooks';
import styles from './Col.style';

export const Col = ({ align = 'start', width, ...others }) => (
  <View
    style={[styles.container, styles[align], width && styles[width], ...useStyler(others)]}
    {...useBanStylerProps(others)}
  />
);

Col.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  width: PropTypes.oneOf(['auto']),
};
