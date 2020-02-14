import { bool, func, node, number, string, oneOf } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { THEME } from '../../common';
import { useStyler } from '../../hooks';
import { Activity, Icon, Row, Text, Touchable } from '../';
import styles from './Button.style';

const { BORDER_RADIUS, COLOR } = THEME;

export const Button = ({
  activity,
  borderRadius = BORDER_RADIUS,
  children,
  color = COLOR.CTA || COLOR.GRAY.M,
  colorText = COLOR.WHITE,
  disabled,
  icon,
  onPress,
  outlined,
  title,
  size = 'M',
  wide,
  ...others
}) => {
  const colorContent = disabled ? COLOR.GRAY.L : outlined ? color : colorText;

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
        ...useStyler(others),
      ]}
    >
      {activity ? (
        <Activity color={colorContent} style={styles.activity} />
      ) : (
        <Row alignItems="center">
          {icon && <Icon color={colorContent} family={others.iconFamily} size={others.iconSize} value={icon} />}
          {title && (
            <Text color={colorContent} style={[styles.text, size === 'S' && styles.textS]}>
              {title}
            </Text>
          )}
          {children}
        </Row>
      )}
    </Touchable>
  );
};

Button.propTypes = {
  activity: bool,
  borderRadius: number,
  children: node,
  color: string,
  colorText: string,
  disabled: bool,
  icon: string,
  onPress: func,
  outlined: bool,
  size: oneOf(['S', 'M', 'L']),
  title: string,
  wide: bool,
};
