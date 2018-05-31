import { array, arrayOf, func, number, object, oneOfType, shape, string } from 'prop-types';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { THEME } from '../../common';
import Link from '../Link';
import styles from './Breadcrumbs.style';

const { COLOR } = THEME;

const Breadcrumbs = ({
  color, dataSource, onPress, style,
}) => (
  <View style={styles.container}>
    { dataSource.map(({ caption, href }, index) => (
      <Link
        href={href}
        key={caption}
        onPress={() => {
          onPress(index);
          return false;
        }}
        style={StyleSheet.flatten([styles.link, { color }, style])}
        small
      >
        {`${caption}${index < dataSource.length - 1 ? ' ·' : ''}`}
      </Link>
    ))}
  </View>
);

Breadcrumbs.propTypes = {
  color: string,
  dataSource: arrayOf(shape({})),
  onPress: func,
  style: oneOfType([array, number, object]),
};

Breadcrumbs.defaultProps = {
  color: COLOR.TEXT,
  dataSource: [],
  onPress() {},
  style: [],
};

export default Breadcrumbs;
