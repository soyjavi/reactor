import { func, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { THEME } from '../../common';
import Button from '../Button';
import Dialog from '../Dialog';
import Text from '../Text';
import styles from './Snackbar.style';

const { COLOR } = THEME;

const Snackbar = ({
  button, caption, color, onPress, ...inherit
}) => (
  <Dialog
    background={false}
    style={[styles.frame, { backgroundColor: color }]}
    styleContainer={styles.dialog}
    visible={inherit.visible}
  >
    <View style={styles.container}>
      <Text color={COLOR.WHITE} style={styles.caption}>{caption}</Text>
      { button && <Button color={COLOR.WHITE} contained={false} onPress={onPress} small title={button} /> }
    </View>
  </Dialog>
);

Snackbar.propTypes = {
  button: string,
  caption: string,
  color: string,
  onPress: func,
};

Snackbar.defaultProps = {
  button: undefined,
  caption: undefined,
  color: COLOR.BLACK,
  onPress: undefined,
};

export default Snackbar;
