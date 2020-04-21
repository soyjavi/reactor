import { string } from 'prop-types';
import React, { useState } from 'react';

import { useBanStylerProps, useStyler } from '../../hooks';
import { Text } from '../Text';

export const Link = ({ href, ...others }) => {
  const [hover, setHover] = useState(false);

  return (
    <Text
      {...useBanStylerProps(others)}
      accessibilityRole="link"
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={[...useStyler(others), hover && others.styleHover]}
    />
  );
};

Link.propTypes = {
  href: string.isRequired,
};
