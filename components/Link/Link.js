import { string } from 'prop-types';
import React, { PureComponent } from 'react';

import { THEME } from '../../common';
import Text from '../Text';

class Link extends PureComponent {
  static propTypes = {
    href: string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  render() {
    const {
      props: { href, ...inherit },
      state: { hover },
    } = this;

    return (
      <Text
        {...inherit}
        accessibilityRole="link"
        href={href}
        color={hover && !inherit.styleHover ? THEME.COLOR.ERROR : undefined}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        style={[inherit.style, hover && inherit.styleHover]}
      />
    );
  }
}

export default Link;
