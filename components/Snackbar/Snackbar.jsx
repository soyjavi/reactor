import { func, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { THEME } from '../../common';
import { Button, Dialog, Icon, Text } from '..';
import styles from './Snackbar.style';

const { COLOR, SPACE } = THEME;

export const Snackbar = ({ caption, color = COLOR.BLACK, icon, onClose, ...others }) => (
  <Dialog background={false} style={{ backgroundColor: color }} styleOverlay={styles.overlay} visible={others.visible}>
    <View style={styles.content}>
      {icon && <Icon color={COLOR.WHITE} size={SPACE.XL} value={icon} style={styles.icon} />}
      <Text caption color={COLOR.WHITE} style={styles.caption}>
        {caption}
      </Text>
      {onClose && (
        <Button color={color} icon="close" iconSize={SPACE.M} onPress={onClose} size="S" style={styles.button} />
      )}
    </View>
  </Dialog>
);

Snackbar.propTypes = {
  caption: string.isRequired,
  color: string,
  icon: string,
  onClose: func,
};

export default Snackbar;
