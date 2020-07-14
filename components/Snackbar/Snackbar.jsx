import PropTypes from 'prop-types';
import React from 'react';

import { THEME } from '../../common';
import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { Icon } from '../Icon';
import { Row } from '../Row';
import { Text } from '../Text';
import styles from './Snackbar.style';

const { COLOR, SPACE } = THEME;

export const Snackbar = ({ caption = '', color = COLOR.BLACK, icon, iconSize = SPACE.XL, onClose, ...others }) => (
  <Dialog
    background={false}
    position="bottom"
    style={[styles.dialog, { backgroundColor: color }, others.style]}
    styleOverlay={styles.dialogOverlay}
    visible={others.visible}
  >
    <Row alignItems="center">
      {icon && <Icon color={COLOR.WHITE} family={others.family} size={iconSize} value={icon} style={styles.icon} />}
      <Text caption color={COLOR.WHITE} style={styles.caption}>
        {caption}
      </Text>
      {onClose && (
        <Button color={color} icon="close" iconSize={SPACE.M} onPress={onClose} size="S" style={styles.button} />
      )}
    </Row>
  </Dialog>
);

Snackbar.propTypes = {
  caption: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  onClose: PropTypes.func,
};

export default Snackbar;
