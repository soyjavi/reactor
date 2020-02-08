import { func, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { Button, Dialog, Text } from '..';
import styles from './Alert.style';

export const Alert = ({ accept, cancel, caption, color, onAccept, onCancel, title, ...others }) => (
  <Dialog {...others}>
    <Text bold subtitle style={styles.title}>
      {title}
    </Text>
    {caption && <Text>{caption}</Text>}
    <View style={styles.buttons}>
      {onCancel && <Button color={color} outlined onPress={onCancel} style={styles.buttonCancel} title={cancel} />}
      <Button color={color} onPress={onAccept} style={styles.buttonAccept} title={accept} />
    </View>
  </Dialog>
);

Alert.propTypes = {
  accept: string,
  cancel: string,
  caption: string,
  color: string,
  onAccept: func,
  onCancel: func,
  title: string.isRequired,
};

export default Alert;
