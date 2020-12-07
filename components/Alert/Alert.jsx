import PropTypes from 'prop-types';
import React from 'react';

import { useBanStylerProps, useStyler } from '../../hooks';
import { Button } from '../Button';
import { Col } from '../Col';
import { Dialog } from '../Dialog';
import { Row } from '../Row';
import { Text } from '../Text';

export const Alert = ({ accept, cancel, caption, children, color, delay, onAccept, onCancel, title, ...others }) => (
  <Dialog {...useBanStylerProps(others)} style={useStyler(others)}>
    <Row>
      <Col>
        <Text bold>{title}</Text>
        {caption && (
          <Text caption marginTop="S">
            {caption}
          </Text>
        )}
        {children}
      </Col>
      <Col width="auto">
        <Button color={color} delay={delay} size="S" text={accept} onPress={onAccept} />
        {onCancel && <Button color={color} marginTop="S" outlined size="S" text={cancel} onPress={onCancel} />}
      </Col>
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
