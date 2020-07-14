import { func, node, number, string } from 'prop-types';
import React, { PureComponent } from 'react';
import { Animated, Easing, TouchableWithoutFeedback, View } from 'react-native';

import { THEME } from '../../common';
import { useBanStylerProps, useStyler } from '../../hooks';
import Ripple from './components/Ripple';
import styles from './Touchable.style';

const { COLOR, MOTION } = THEME;
const ANIMATION = {
  toValue: 1,
  easing: Easing.out(Easing.ease),
  duration: MOTION.EXPAND * 2,
  useNativeDriver: true,
};

export class Touchable extends PureComponent {
  mounted = false;

  static propTypes = {
    children: node,
    containerBorderRadius: number,
    onPress: func,
    onPressIn: func,
    onPressOut: func,
    rippleColor: string,
  };

  static defaultProps = {
    children: undefined,
    containerBorderRadius: undefined,
    onPress: undefined,
    onPressIn: undefined,
    onPressOut: undefined,
    rippleColor: COLOR.BACKGROUND,
  };

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      mask: new Animated.Value(0),
      ripples: [],
      width: 0,
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onAnimationEnd = () => {
    if (this.mounted) this.setState(({ ripples }) => ({ ripples: ripples.slice(1) }));
  };

  _onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({ width, height });
  };

  _onPressIn = (event) => {
    const {
      onAnimationEnd,
      state: { mask, ripples, width, height },
    } = this;
    const { locationX: x, locationY: y } = event.nativeEvent;

    Animated.timing(mask, {
      ...ANIMATION,
      delay: MOTION.EXPAND,
      toValue: 0.25,
    }).start();

    const w = 0.5 * width;
    const h = 0.5 * height;
    const offsetX = Math.abs(w - x);
    const offsetY = Math.abs(h - y);
    const ripple = {
      key: new Date().getTime(),
      progress: new Animated.Value(0),
      range: Math.sqrt((w + offsetX) ** 2 + (h + offsetY) ** 2),
      x,
      y,
    };

    Animated.timing(ripple.progress, ANIMATION).start(onAnimationEnd);
    this.setState({ ripples: [...ripples, ripple] });
  };

  _onPressOut = () => {
    const {
      state: { mask },
    } = this;

    Animated.timing(mask, { ...ANIMATION, toValue: 0 }).start();
  };

  _onPress = (event) => {
    const {
      props: { onPress },
    } = this;

    event.preventDefault();
    onPress(event);
  };

  render() {
    const {
      _onPressIn,
      _onPress,
      _onPressOut,
      _onLayout,
      props: { children, containerBorderRadius, onPress, onPressIn, onPressOut, rippleColor, ...others },
      state: { mask, width, height, ripples = [] },
    } = this;
    const events = onPress
      ? {
          onLayout: _onLayout,
          onPressIn: onPressIn || _onPressIn,
          onPress: _onPress,
          onPressOut: onPressOut || _onPressOut,
        }
      : {};

    return (
      <TouchableWithoutFeedback {...events}>
        <View
          pointerEvents={onPress ? 'box-only' : 'none'}
          style={[styles.container, ...useStyler(others), others.style]}
          {...useBanStylerProps(others)}
        >
          {children}
          <View style={[styles.ripples, containerBorderRadius && { borderRadius: containerBorderRadius }]}>
            {ripples.map((props, index) => (
              <Ripple key={index.toString()} color={rippleColor} {...props} />
            ))}
            <Animated.View
              style={[styles.mask, { opacity: mask, height, width }, rippleColor && { backgroundColor: rippleColor }]}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
