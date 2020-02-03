import { bool, func, node, number, string, oneOf } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { THEME } from '../../common';
import Activity from '../Activity';
import Icon from '../Icon';
import Text from '../Text';
import Touchable from '../Touchable';
import styles from './Button.style';

const { COLOR } = THEME;

const Button = ({
  activity,
  borderRadius,
  children,
  color = COLOR.CTA || COLOR.GRAY.M,
  disabled,
  icon,
  onPress,
  outlined,
  title,
  size = 'M',
  wide,
  ...others
}) => {
  const colorContent = disabled ? COLOR.GRAY.L : outlined ? color : others.colorContent || COLOR.WHITE;

  return (
    <Touchable
      containerBorderRadius={borderRadius}
      onPress={disabled ? undefined : onPress}
      rippleColor={colorContent}
      style={[
        styles.container,
        outlined && styles.outlined,
        disabled ? styles.disabled : { borderRadius, [outlined ? 'borderColor' : 'backgroundColor']: color },
        wide && styles.wide,
        styles[size],
        others.style,
      ]}
    >
      {activity ? (
        <Activity color={colorContent} style={styles.activity} />
      ) : (
        <View style={styles.row}>
          {icon && <Icon color={colorContent} family={others.iconFamily} size={others.iconSize} value={icon} />}
          {title && (
            <Text color={colorContent} style={[styles.text, size === 'S' && styles.textS]}>
              {title}
            </Text>
          )}
          {children}
        </View>
      )}
    </Touchable>
  );
};

Button.propTypes = {
  activity: bool,
  borderRadius: number,
  children: node,
  color: string,
  disabled: bool,
  icon: string,
  onPress: func,
  outlined: bool,
  size: oneOf(['S', 'M', 'L']),
  title: string,
  wide: bool,
};

export default Button;
