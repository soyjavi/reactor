import { string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Image from '../Image';
import Input from '../Input';
import styles from './InputImage.style';

const InputImage = ({ value, ...inherit }) => {
  const isValidUrl = value.length > 0;

  return (
    <View style={[styles.container, inherit.style]}>
      { isValidUrl && <Image source={{ uri: value }} style={styles.image} styleContainer={styles.imageContainer} /> }
      <Input
        {...inherit}
        style={[styles.input, isValidUrl && styles.inputMargin]}
        value={value}
      />
    </View>
  );
};

InputImage.propTypes = {
  value: string,
};

InputImage.defaultProps = {
  value: '',
};

export default InputImage;
