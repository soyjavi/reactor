import PropTypes from 'prop-types';
import React from 'react';

import { useBanStylerProps, useStyler } from '../../hooks';
import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { Row } from '../Row';
import { Text } from '../Text';
import styles from './Alert.style';

export const Alert = ({ accept, cancel, caption, children, color, delay, onAccept, onCancel, title, ...others }) => (
  <Dialog {...useBanStylerProps(others)} style={useStyler(others)}>
    <Text bold subtitle style={styles.title}>
      {title}
    </Text>
    {caption && <Text>{caption}</Text>}
    {children}
    <Row marginTop="M">
      {onCancel && <Button color={color} outlined onPress={onCancel} style={styles.buttonCancel} title={cancel} />}
      <Button color={color} delay={delay} onPress={onAccept} style={styles.buttonAccept} title={accept} />
    </Row>
  </Dialog>
);

Alert.propTypes = {
  accept: PropTypes.string,
  cancel: PropTypes.string,
  caption: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  delay: PropTypes.number,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  title: PropTypes.string.isRequired,
};
