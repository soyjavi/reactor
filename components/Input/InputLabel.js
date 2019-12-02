import { string } from 'prop-types';
import React from 'react';

import { THEME } from '../../common';
import Text from '../Text';
import styles from './InputLabel.style';

const { COLOR } = THEME;

const InputLabel = ({ color, ...inherit }) => (
  <Text
    {...inherit}
    color={color}
    numberOfLines={2}
    subtitle
    lighten
    style={[styles.container, inherit.style]}
  />
);

InputLabel.propTypes = {
  color: string,
};

InputLabel.defaultProps = {
  color: COLOR.TEXT,
};

export default InputLabel;
