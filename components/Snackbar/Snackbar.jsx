import { func, string, node } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { THEME } from '../../common';
import { Button, Dialog, Text } from '..';
import styles from './Snackbar.style';

const { COLOR, SPACE } = THEME;

export const Snackbar = ({ caption, children, color = COLOR.BLACK, onClose, ...others }) => (
  <Dialog background={false} style={{ backgroundColor: color }} styleOverlay={styles.overlay} visible={others.visible}>
    <View style={styles.content}>
      {caption && (
        <Text caption color={COLOR.WHITE} style={styles.caption}>
          {caption}
        </Text>
      )}
      {children}
      {onClose && (
        <Button color={color} icon="close" iconSize={SPACE.L} onPress={onClose} size="S" style={styles.button} />
      )}
    </View>
  </Dialog>
);

Snackbar.propTypes = {
  caption: string,
  children: node,
  color: string,
  onClose: func,
};

export default Snackbar;
