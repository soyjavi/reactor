import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';
import { number, string, oneOf } from 'prop-types';
import React from 'react';

import { THEME } from '../../common';

const { COLOR, SPACE } = THEME;
const DEFAULT = {
  FAMILY: 'MaterialCommunityIcons',
  VALUE: 'file-question',
};

export const Icon = ({ color = COLOR.TEXT, family = DEFAULT.FAMILY, size = SPACE.M, value = DEFAULT.VALUE }) => {
  let IconFamily;

  if (family === 'MaterialCommunityIcons') IconFamily = MaterialCommunityIcons;
  else if (family === 'AntDesign') IconFamily = AntDesign;
  else if (family === 'Entypo') IconFamily = Entypo;
  else if (family === 'EvilIcons') IconFamily = EvilIcons;
  else if (family === 'Feather') IconFamily = Feather;
  else if (family === 'FontAwesome') IconFamily = FontAwesome;
  else if (family === 'Foundation') IconFamily = Foundation;
  else if (family === 'Ionicons') IconFamily = Ionicons;
  else if (family === 'MaterialIcons') IconFamily = MaterialIcons;
  else if (family === 'Octicons') IconFamily = Octicons;
  else if (family === 'SimpleLineIcons') IconFamily = SimpleLineIcons;
  else if (family === 'Zocial') IconFamily = Zocial;

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
