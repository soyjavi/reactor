import { func, string } from 'prop-types';
import React from 'react';

import { THEME } from '../../common';
import { Button, Dialog, Icon, Row, Text } from '..';
import styles from './Snackbar.style';

const { COLOR, SPACE } = THEME;

export const Snackbar = ({ caption, color = COLOR.BLACK, icon, onClose, ...others }) => (
  <Dialog
    background={false}
    position="bottom"
    style={[styles.dialog, { backgroundColor: color }]}
    styleOverlay={styles.dialogOverlay}
    visible={others.visible}
  >
    <Row alignItems="center">
      {icon && <Icon color={COLOR.WHITE} size={SPACE.XL} value={icon} style={styles.icon} />}
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
  caption: string.isRequired,
  color: string,
  icon: string,
  onClose: func,
};

export default Snackbar;
