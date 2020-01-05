import { string } from 'prop-types';
import React, { useState } from 'react';

import { THEME } from '../../common';
import Text from '../Text';

const Link = ({ href, ...inherit }) => {
  const [hover, setHover] = useState(false);

  return (
    <Text
      {...inherit}
      accessibilityRole="link"
      href={href}
      color={hover && !inherit.styleHover ? THEME.COLOR.ERROR : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={[inherit.style, hover && inherit.styleHover]}
    />
  );
};

Link.propTypes = {
  href: string.isRequired,
};

export default Link;
