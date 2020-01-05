import { arrayOf, bool, node, number, oneOf, shape, string } from 'prop-types';
import { createElement, PureComponent } from 'react';
import { Animated, View } from 'react-native';

import { ENV, SHAPE, THEME } from '../../common';
import { buildStyle, presetVisibility } from './modules';

const { IS_TEST, IS_WEB } = ENV;
const { MOTION } = THEME;

class Motion extends PureComponent {
  static propTypes = {
    children: node,
    delay: number,
    disabled: bool,
    duration: number,
    preset: oneOf(['fade', 'fadeleft', 'pop']),
    timeline: arrayOf(shape(SHAPE.MOTION)),
    type: string,
    useNativeDriver: bool,
    visible: bool,
  };

  static defaultProps = {
    children: undefined,
    delay: 0,
    disabled: false,
    duration: MOTION.DURATION,
    preset: undefined,
    timeline: undefined,
    type: 'timing',
    useNativeDriver: IS_WEB,
    visible: false,
  };

  constructor(props) {
    super(props);
    const { preset, timeline = [], useNativeDriver, visible } = props;
    const state = { timeline };

    if (preset) state.timeline = presetVisibility(preset, visible);

    if (!useNativeDriver) {
      state.timeline.forEach(({ property, value }) => {
        state[property] = new Animated.Value(value);
      });
    }

    this.state = { ...state };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { props, state = {} } = this;
    const { delay, disabled, duration, preset, timeline = [], type, useNativeDriver, visible } = {
      ...props,
      ...nextProps,
    };

    state.timeline = timeline;
    if (preset) {
      state.timeline = presetVisibility(preset, visible);
      this.setState(state);
    }

    if (IS_TEST || disabled || useNativeDriver) return;

    const animatedProps = { delay, duration, useNativeDriver: true };
    const motions = state.timeline.map(({ property, value: toValue }) =>
      Animated[type](state[property], { toValue, ...animatedProps }).start(),
    );
    Animated.parallel(motions).start();
  }

  render() {
    const { children, disabled, useNativeDriver, ...inherit } = this.props;

    const props = { style: [inherit.style, !disabled && buildStyle(this)] };
    if (inherit.pointerEvents) props.pointerEvents = inherit.pointerEvents;

    return createElement(!disabled && useNativeDriver ? View : Animated.View, props, children);
  }
}

export default Motion;
