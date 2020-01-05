import { number, string, oneOf } from 'prop-types';
import React from 'react';

import { THEME } from '../../common';

const { COLOR, SPACE } = THEME;
const DEFAULT = {
  FAMILY: 'MaterialCommunityIcons',
  VALUE: 'file-question',
};

const Icon = ({ color = COLOR.TEXT, family = DEFAULT.FAMILY, size = SPACE.REGULAR, value = DEFAULT.VALUE }) => {
  let IconFamily = require(`@expo/vector-icons/${family}`).default;

  return <IconFamily name={value} color={color} size={size} />;
};

Icon.propTypes = {
  color: string,
  family: oneOf([
    'AntDesign',
    'Entypo',
    'EvilIcons',
    'Feather',
    'FontAwesome',
    'Foundation',
    'Icons',
    'Ionicons',
    'MaterialCommunityIcons',
    'MaterialIcons',
    'Octicons',
    'SimpleLineIcons',
    'Zocial',
  ]),
  size: number,
  value: string,
};

export default Icon;
