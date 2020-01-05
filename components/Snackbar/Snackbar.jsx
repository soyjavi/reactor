import { func, string, node } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { THEME } from '../../common';
import Button from '../Button';
import Dialog from '../Dialog';
import Text from '../Text';
import styles from './Snackbar.style';

const { COLOR } = THEME;

const Snackbar = ({ button, caption, children, color, onPress, ...inherit }) => (
  <Dialog
    background={false}
    style={[inherit.style, { backgroundColor: color }]}
    styleContainer={styles.dialogContainer}
    visible={inherit.visible}
  >
    <View style={styles.container}>
      {caption && (
        <Text caption color={COLOR.WHITE} style={styles.caption}>
          {caption}
        </Text>
      )}
      {children}
      {button && onPress && <Button color={COLOR.WHITE} contained={false} onPress={onPress} small title={button} />}
    </View>
  </Dialog>
);

Snackbar.propTypes = {
  button: string,
  caption: string,
  children: node,
  color: string,
  onPress: func,
};

Snackbar.defaultProps = {
  button: undefined,
  caption: undefined,
  children: undefined,
  color: COLOR.TEXT,
  onPress: undefined,
};

export default Snackbar;
