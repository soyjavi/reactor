import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { useBanStylerProps, useStyler } from '../../hooks';
import styles from './Row.style';

const ALIGNS = ['start', 'center', 'end'];
const ALIGN = ALIGNS[0];

export const Row = ({ alignContent = ALIGN, alignItems = ALIGN, justifyContent = ALIGN, ...others }) => (
  <View
    style={[
      styles.container,
      styles[`alignContent${alignContent}`],
      styles[`alignItems${alignItems}`],
      styles[`justifyContent${justifyContent}`],
      ...useStyler(others),
    ]}
    {...useBanStylerProps(others)}
  />
);

Row.propTypes = {
  alignContent: PropTypes.oneOf(ALIGNS),
  alignItems: PropTypes.oneOf(ALIGNS),
  justifyContent: PropTypes.oneOf([...ALIGNS, 'space']),
};
