import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { useBanStylerProps, useStyler } from '../../hooks';
import styles from './Row.style';

const ALIGNS = ['start', 'center', 'end'];

export const Row = ({ align = 'center', justify = 'start', ...others }) => (
  <View
    style={[styles.container, styles[align], styles[`justify${justify}`], ...useStyler(others)]}
    {...useBanStylerProps(others)}
  />
);

Row.propTypes = {
  align: PropTypes.oneOf(ALIGNS),
  justify: PropTypes.oneOf([...ALIGNS, 'space']),
};
