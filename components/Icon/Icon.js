import { bool, number, oneOfType, string } from 'prop-types';
import React from 'react';
import { Platform, StyleSheet, Image } from 'react-native';

import ASSETS from './assets';
import styles from './Icon.style';

const isWeb = Platform.OS === 'web';

const Icon = ({ color, invert, size, value, ...inherit }) => {
  const [, navigation] = typeof value === 'string' ? value.split('nav') : [];
  let asset;
  let rotate;

  if (navigation) {
    asset = ASSETS.navArrow;
    if (navigation === 'Down') rotate = 90;
    else if (navigation === 'Left') rotate = -180;
    else if (navigation === 'Up') rotate = 270;
  } else {
    asset = ASSETS[value];
    if (!asset) asset = typeof value === 'string' ? { uri: value } : value;
  }

  return (
    <Image
      resizeMode="contain"
      source={asset}
      style={[
        styles.container,
        inherit.style,

        (color || invert || rotate || size) &&
          StyleSheet.flatten([
            color && !isWeb && { tintColor: color },
            invert && isWeb && { filter: 'invert(100%)' },
            rotate && { transform: [{ rotate: `${rotate}deg` }] },
            size && { width: size, height: size },
          ]),
      ]}
    />
  );
};

Icon.propTypes = {
  color: string,
  invert: bool,
  size: number,
  value: oneOfType([number, string]),
};

Icon.defaultProps = {
  color: undefined,
  invert: false,
  size: undefined,
  value: 'errorOutline',
};

export default Icon;
