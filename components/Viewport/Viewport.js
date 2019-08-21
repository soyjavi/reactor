import {
  array, bool, func, node, number, object, oneOfType,
} from 'prop-types';
import React, { createElement, PureComponent } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import { ENV, LAYOUT, THEME } from '../../common';
import Motion from '../Motion';
import styles from './Viewport.style';

const { MOTION } = THEME;
const { IS_NATIVE } = ENV;

class Viewport extends PureComponent {
  static propTypes = {
    backward: bool,
    children: node,
    onScroll: func,
    scroll: bool,
    styleContent: oneOfType([array, number, object]),
    visible: bool,
  };

  static defaultProps = {
    backward: false,
    children: undefined,
    onScroll: undefined,
    scroll: true,
    styleContent: [],
    visible: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      height: IS_NATIVE ? LAYOUT.VIEWPORT.H : '100vh',
      width: IS_NATIVE ? LAYOUT.VIEWPORT.W : '100vw',
    };
  }

  _onScroll = ({ nativeEvent: { contentOffset: { y } } }) => {
    const { props: { onScroll } } = this;
    onScroll({ y });
  }

  render() {
    const {
      _onScroll,
      props: {
        backward, children, onScroll, scroll, styleContent, visible, ...inherit
      },
      state: { height, width },
    } = this;

    return (
      <Motion
        duration={MOTION.DURATION}
        style={[styles.container, { height, width }, inherit.style]}
        timeline={backward && visible
          ? [{ property: 'translateX', value: -64 }]
          : [{ property: 'translateX', value: visible ? 0 : width }]}
      >
        <SafeAreaView style={styles.safeArea}>
          { createElement(
            scroll ? ScrollView : View,
            {
              ...(scroll && onScroll ? { onScroll: _onScroll, scrollEventThrottle: 32 } : {}),
              style: [styles.content, styleContent],
            },
            children,
          )}
        </SafeAreaView>
      </Motion>
    );
  }
}

export default Viewport;
