import { bool } from 'prop-types';
import React from 'react';

import { THEME } from '../../common';
import Icon from '../Icon';

const { COLOR } = THEME;

const InputIcon = ({ active, rounded }) => {
  let value;
  if (rounded) value = active ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline';
  else value = active ? 'checkbox-marked' : 'checkbox-blank-outline';

  return <Icon color={active ? COLOR.PRIMARY : undefined} value={value} />;
};

InputIcon.propTypes = {
  active: bool,
  rounded: bool,
};

InputIcon.defaultProps = {
  active: true,
  rounded: true,
};

export default InputIcon;
