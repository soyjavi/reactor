import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { COLOR, SPACE } = THEME;

const styles = StyleSheet.create({
  container: {
    color: COLOR.BACKGROUND,
    padding: SPACE.M,
  },
});

export const Content = ({ children }) => <ScrollView style={styles.container}>{children}</ScrollView>;

Content.propTypes = {
  children: PropTypes.node,
};
