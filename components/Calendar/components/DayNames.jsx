import { arrayOf, string } from 'prop-types';
import React from 'react';

import { Row, Text } from '../..';
import styles from './DayNames.style';

export const DayNames = ({ locale = [], ...others }) => (
  <Row justifyContent="center" marginTop="XS" marginBottom="S">
    {locale.map((day) => (
      <Text key={day} subtitle {...others.styleDayNames} style={[styles.cell, others.range && styles.cellExpand]}>
        {day}
      </Text>
    ))}
  </Row>
);

DayNames.propTypes = {
  locale: arrayOf(string).isRequired,
};

export default DayNames;
