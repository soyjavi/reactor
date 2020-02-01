import { bool, func, node, string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import Activity from '../Activity';
import Icon from '../Icon';
import Text from '../Text';
import Touchable from '../Touchable';
import styles, { REGULAR_SIZE } from './Button.style';
import calcColor from './modules/calcColor';

const {
  COLOR: { BASE, TEXT_LIGHTEN, WHITE },
} = THEME;

const Button = ({
  activity,
  children,
  color,
  colorContent,
  contained,
  disabled,
  icon,
  large,
  onPress,
  outlined,
  responsive,
  rounded,
  shadow,
  small,
  title,
  isSolid = contained && !outlined, // eslint-disable-line
  rippleColor = isSolid ? undefined : color, // eslint-disable-line
  ...inherit
}) => (
  <View style={inherit.style}>
    <Touchable
      containerBorderRadius={rounded ? REGULAR_SIZE / 2 : undefined}
      onPress={disabled ? undefined : onPress}
      rippleColor={isSolid && color === WHITE ? BASE : rippleColor || WHITE}
      style={[styles.touchable, rounded && styles.rounded, isSolid && shadow && !disabled && styles.shadow]}
    >
      <View
        style={[
          styles.container,
          styles.regular,
          styles.row,
          // -- Layout
          small && styles.small,
          responsive && !small && !LAYOUT.VIEWPORT.REGULAR && !LAYOUT.VIEWPORT.LARGE && styles.small,
          large && styles.large,
          rounded && styles.rounded,
          !title && !children && !activity && styles.noPadding,
          // -- Color
          isSolid && { backgroundColor: color || TEXT_LIGHTEN },
          isSolid && disabled && styles.disabled,
          outlined && styles.outlined,
          outlined && { borderColor: color || TEXT_LIGHTEN },
          !isSolid && disabled && styles.disabledOpacity,
        ]}
      >
        {icon && !activity && (
          <Icon
            color={calcColor({ isSolid, color, colorContent, disabled })}
            family={inherit.iconFamily}
            size={inherit.iconSize}
            value={icon}
          />
        )}
        <View style={[styles.row, icon && (title || children) && styles.textMarginLeft]}>
          {title && (
            <Text
              color={calcColor({ isSolid, color, colorContent, disabled })} // eslint-disable-line
              style={[styles.text, small && styles.textSmall, responsive && !small && styles.textSmall]}
            >
              {title}
            </Text>
          )}
          {children}
        </View>
        {activity && <Activity color={calcColor({ isSolid, color, colorContent, disabled })} style={styles.activity} />}
      </View>
    </Touchable>
  </View>
);

Button.propTypes = {
  activity: bool,
  children: node,
  color: string,
  colorContent: string,
  contained: bool,
  disabled: bool,
  icon: string,
  large: bool,
  onPress: func,
  outlined: bool,
  responsive: bool,
  rounded: bool,
  shadow: bool,
  small: bool,
  title: string,
};

Button.defaultProps = {
  activity: false,
  children: undefined,
  color: BASE,
  colorContent: undefined,
  contained: true,
  disabled: false,
  icon: undefined,
  large: false,
  onPress: undefined,
  outlined: false,
  responsive: false,
  rounded: false,
  shadow: false,
  small: false,
  title: undefined,
};

export default Button;
