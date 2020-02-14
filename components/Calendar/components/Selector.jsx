import { func, string } from 'prop-types';
import React from 'react';

import { Button, Row, Text } from '../..';

import styles from './Selector.style';

export const Selector = ({ onPrevious, onNext, title }) => (
  <Row marginBottom="M" justifyContent="center">
    <Button
      disabled={!onPrevious}
      icon="arrow-left"
      onPress={onPrevious}
      rounded
      small
      style={!onPrevious && styles.buttonDisabled}
    />
    <Text headline style={styles.value}>
      {title}
    </Text>
    <Button
      disabled={!onNext}
      icon="arrow-right"
      onPress={onNext}
      rounded
      small
      style={!onNext && styles.buttonDisabled}
    />
  </Row>
);

Selector.propTypes = {
  onNext: func,
  onPrevious: func,
  title: string.isRequired,
};

export default Selector;
