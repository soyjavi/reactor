import PropTypes from 'prop-types';
import React from 'react';

import { THEME } from '../../common';
import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { Icon } from '../Icon';
import { Row } from '../Row';
import { Text } from '../Text';
import { View } from '../View';
import styles from './Snackbar.style';

const { COLOR, SPACE } = THEME;

export const Snackbar = ({
  caption = '',
  children,
  color = COLOR.BLACK,
  icon,
  iconSize = SPACE.XL,
  onClose,
  position = 'bottom',
  ...others
}) => (
  <Dialog
    background={false}
    position={position}
    style={[styles.dialog, { backgroundColor: color }, others.style]}
    styleOverlay={styles.dialogOverlay}
    visible={others.visible}
  >
    <Row alignItems="center">
      {icon && <Icon color={COLOR.WHITE} family={others.family} size={iconSize} value={icon} style={styles.icon} />}
      <View style={styles.caption}>
        <Text color={COLOR.WHITE}>{caption}</Text>
        {children}
      </View>
      {onClose && (
        <Button color={color} icon="close" iconSize={SPACE.M} onPress={onClose} size="S" style={styles.button} />
      )}
    </Row>
  </Dialog>
);

Snackbar.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  onClose: PropTypes.func,
  position: PropTypes.string,
};

export default Snackbar;
