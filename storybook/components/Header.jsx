import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';

import { THEME } from '../../common';
import { Button, Col, Row, Text } from '../../components';

const { COLOR, SPACE } = THEME;

const styles = StyleSheet.create({
  container: {
    height: SPACE.XL * 2,
    backgroundColor: COLOR.BRAND,
  },
});

const buttonProps = { color: COLOR.TRANSPARENT, size: 'S' };

export const Header = ({ onBack, onExtra, title }) => (
  <Row alignItems="center" style={styles.container} paddingHorizontal="S">
    <Col align="start">{onBack && <Button {...buttonProps} icon="home" onPress={onBack} />}</Col>
    <Col align="center" marginHorizontal="M">
      <Text bold color={COLOR.WHITE}>
        {title}
      </Text>
    </Col>
    <Col align="end">{onExtra && <Button {...buttonProps} title="extra" />}</Col>
  </Row>
);

Header.propTypes = {
  onBack: PropTypes.func,
  onExtra: PropTypes.func,
  title: PropTypes.string,
};
