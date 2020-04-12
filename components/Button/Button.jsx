import { bool, func, node, number, string, oneOf } from 'prop-types';
import React, { useRef, useState } from 'react';

import { THEME } from '../../common';
import { useStyler } from '../../hooks';
import { Activity, Icon, Motion, Row, Text, Touchable } from '../';
import styles from './Button.style';

const { BORDER_RADIUS, COLOR } = THEME;
let timeout;

export const Button = ({
  activity,
  borderRadius = BORDER_RADIUS,
  children,
  color = COLOR.CTA,
  colorText = COLOR.WHITE,
  delay,
  disabled,
  icon,
  onPress,
  outlined,
  title,
  size = 'M',
  wide,
  ...others
}) => {
  const ref = useRef(undefined);

  const [delayEvent, setDelayEvent] = useState(false);

  const colorContent = disabled ? COLOR.LIGHTEN : outlined ? color : colorText;

  const event = !delay
    ? { onPress }
    : {
        onPress: () => {},
        onPressIn: () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            setDelayEvent(false);
            onPress();
          }, delay);
          setDelayEvent(true);
        },
        onPressOut: () => {
          clearTimeout(timeout);
          setDelayEvent(false);
        },
      };

  return (
    <Touchable
      {...(!disabled ? event : undefined)}
      containerBorderRadius={borderRadius}
      ref={ref}
      rippleColor={colorContent}
      style={[
        styles.container,
        wide && styles.wide,
        styles[size],
        outlined && styles.outlined,
        { borderRadius, [outlined ? 'borderColor' : 'backgroundColor']: !disabled ? color : COLOR.BASE },
        ...useStyler(others),
      ]}
    >
      {!disabled && delay && ref && (
        <Motion
          config={{ useNativeDriver: false }}
          duration={delay}
          style={[styles.motion, { backgroundColor: colorContent }]}
          type="timing"
          timeline={[{ property: 'width', value: delayEvent ? ref.current.state.width : 0 }]}
        />
      )}

      <Row justify="center" width="auto">
        {activity ? (
          <Activity color={colorContent} />
        ) : (
          <>
            {icon && <Icon color={colorContent} family={others.iconFamily} size={others.iconSize} value={icon} />}
            {title && (
              <Text color={colorContent} style={[styles.text, size === 'S' && styles.textS]}>
                {title}
              </Text>
            )}
            {children}
          </>
        )}
      </Row>
    </Touchable>
  );
};

Button.propTypes = {
  activity: bool,
  borderRadius: number,
  children: node,
  color: string,
  colorText: string,
  delay: number,
  disabled: bool,
  icon: string,
  onPress: func,
  outlined: bool,
  size: oneOf(['S', 'M', 'L']),
  title: string,
  wide: bool,
};
