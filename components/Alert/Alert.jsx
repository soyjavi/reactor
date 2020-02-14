import { func, node, string } from 'prop-types';
import React from 'react';

import { useBanStylerProps, useStyler } from '../../hooks';
import { Button, Dialog, Row, Text } from '..';
import styles from './Alert.style';

export const Alert = ({ accept, cancel, caption, children, color, onAccept, onCancel, title, ...others }) => (
  <Dialog {...useBanStylerProps(others)} style={useStyler(others)}>
    <Text bold subtitle style={styles.title}>
      {title}
    </Text>
    {caption && <Text>{caption}</Text>}
    {children}
    <Row marginTop="M">
      {onCancel && <Button color={color} outlined onPress={onCancel} style={styles.buttonCancel} title={cancel} />}
      <Button color={color} onPress={onAccept} style={styles.buttonAccept} title={accept} />
    </Row>
  </Dialog>
);

Alert.propTypes = {
  accept: string,
  cancel: string,
  caption: string,
  children: node,
  color: string,
  onAccept: func,
  onCancel: func,
  title: string.isRequired,
};

export default Alert;
