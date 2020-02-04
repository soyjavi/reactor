import { arrayOf, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { Text } from '../..';

import styles from './DayNames.style';

export const DayNames = ({ locale = [], ...others }) => (
  <View style={styles.container}>
    {locale.map((day) => (
      <Text key={day} subtitle {...others.styleDayNames} style={[styles.cell, others.range && styles.cellExpand]}>
        {day}
      </Text>
    ))}
  </View>
);

DayNames.propTypes = {
  locale: arrayOf(string).isRequired,
};

export default DayNames;
