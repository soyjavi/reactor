import { func, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Button from '../../Button';
import Text from '../../Text';
import styles from './Selector.style';

const Selector = ({ onPrevious, onNext, title }) => (
  <View style={styles.container}>
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
  </View>
);

Selector.propTypes = {
  onNext: func,
  onPrevious: func,
  title: string.isRequired,
};

Selector.defaultProps = {
  onNext: undefined,
  onPrevious: undefined,
};

export default Selector;
