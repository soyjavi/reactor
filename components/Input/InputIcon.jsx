import { bool } from 'prop-types';
import React from 'react';

import { THEME } from '../../common';
import { Icon } from '../Icon';

const { COLOR } = THEME;

export const InputIcon = ({ active = true, rounded = true, ...others }) => {
  let value;
  if (rounded) value = active ? 'check-circle' : 'checkbox-blank-circle-outline';
  else value = active ? 'checkbox-marked' : 'checkbox-blank-outline';

  return <Icon color={active ? COLOR.BRAND : undefined} _size={20} value={value} {...others} />;
};

InputIcon.propTypes = {
  active: bool,
  rounded: bool,
};
