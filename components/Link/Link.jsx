import { string } from 'prop-types';
import React, { useState } from 'react';

import { Text } from '..';

export const Link = ({ href, ...others }) => {
  const [hover, setHover] = useState(false);

  return (
    <Text
      {...others}
      accessibilityRole="link"
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={[others.style, hover && others.styleHover]}
    />
  );
};

Link.propTypes = {
  href: string.isRequired,
};
