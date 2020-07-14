import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import { THEME } from '../../common';
import { useStyler } from '../../hooks';
import { Icon } from '../Icon';
import { Motion } from '../Motion';
import { Row } from '../Row';
import { Text } from '../Text';
import { Touchable } from '../Touchable';
import styles from './Button.style';

const { BORDER_RADIUS, COLOR } = THEME;
let timeout;

export const Button = ({
  borderRadius = BORDER_RADIUS,
  busy,
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

  const { current: { state: { width: buttonWidth = 0 } = {} } = {} } = ref || {};

  const handlePress = {
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
      onPress={!disabled && !busy ? onPress : undefined}
      {...(delay ? handlePress : undefined)}
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
      <>
        {(busy || (!disabled && delay)) && (
          <Motion
            config={{ useNativeDriver: false }}
            duration={busy || delay}
            style={[styles.motion, { backgroundColor: colorContent }]}
            timeline={[{ property: 'width', value: busy || delayEvent ? buttonWidth : 0 }]}
            type="timing"
          />
        )}

        <Row justify="center" width="auto">
          {icon && <Icon color={colorContent} family={others.iconFamily} size={others.iconSize} value={icon} />}
          {title && (
            <Text color={colorContent} style={[styles.text, size === 'S' && styles.textS]}>
              {title}
            </Text>
          )}
          {children}
        </Row>
      </>
    </Touchable>
  );
};

Button.propTypes = {
  borderRadius: PropTypes.number,
  busy: PropTypes.number,
  children: PropTypes.node,
  color: PropTypes.string,
  colorText: PropTypes.string,
  delay: PropTypes.number,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onPress: PropTypes.func,
  outlined: PropTypes.bool,
  size: PropTypes.oneOf(['S', 'M', 'L']),
  title: PropTypes.string,
  wide: PropTypes.bool,
};
