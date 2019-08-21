import {
  arrayOf, bool, func, node, number, shape, string,
} from 'prop-types';
import React, { PureComponent, createRef } from 'react';
import { Platform, ScrollView, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import Button from '../Button';
import Text from '../Text';
import styles from './Slider.style';

const { SPACE } = THEME;
const DEFAULT_PROPS = {
  horizontal: true,
  removeClippedSubviews: true,
  showsHorizontalScrollIndicator: false,
};
const NEXT = 'next';

class Slider extends PureComponent {
  static propTypes = {
    caption: string,
    children: node,
    dataSource: arrayOf(shape({})),
    item: func,
    itemMargin: number,
    itemWidth: number,
    onChange: func,
    navigation: bool,
    snap: bool,
    steps: number,
    title: string,
  };

  static defaultProps = {
    caption: undefined,
    children: undefined,
    dataSource: [],
    item() {},
    itemMargin: SPACE.S,
    itemWidth: undefined,
    onChange: undefined,
    navigation: false,
    snap: true,
    steps: 1,
    title: undefined,
  };

  constructor(props) {
    super(props);
    this.scrollview = createRef();
    this.state = { x: 0 };
  }

  componentWillReceiveProps() {
    this.setState({ x: 0 });
  }

  _onPressButton = (type) => {
    const {
      scrollview: { current },
      props: {
        children, dataSource, itemMargin, itemWidth = LAYOUT.CARD.SLIDER, steps,
      },
    } = this;
    const itemOffset = itemWidth + itemMargin;
    const length = dataSource.length || children.length;
    const max = ((length + 1) * itemOffset) - current.getScrollableNode().offsetWidth;
    const nextX = itemOffset * steps;
    let { state: { x } } = this;

    x = type === NEXT ? x + nextX : x - nextX;
    if (x < 0 || x > max) x = 0;

    this.scrollview.current.scrollTo({ x });
    this.setState({ x });
  }

  _onScroll = ({ nativeEvent: { contentOffset } }) => {
    const { props: { onChange }, state: { x } } = this;

    if (x !== contentOffset.x) this.setState({ x: contentOffset.x });
    if (onChange) onChange(contentOffset);
  }

  render() {
    const {
      _onPressButton, _onScroll,
      props: {
        caption, dataSource, navigation, snap, steps, title,
        item: Item, itemMargin, itemWidth = LAYOUT.CARD.SLIDER,
        ...inherit
      },
    } = this;
    const snapProps = snap
      ? {
        decelerationRate: 'fast',
        pagingEnabled: Platform.OS !== 'ios',
        snapToInterval: (itemWidth + itemMargin) * steps,
        snapToAlignment: 'start',
      }
      : undefined;

    return (
      <View style={styles.container}>
        { (title || caption) && (
          <View style={styles.header}>
            { title && (
            <Text headline level={6} style={styles.title}>
              {title}
            </Text>
            )}
            { caption && (
            <Text caption lighten>
              {caption}
            </Text>
            )}
          </View>
        )}

        { navigation && (
          <View style={[styles.navigation, styles.previous]}>
            <Button icon="left" onPress={_onPressButton} small />
          </View>
        )}

        { navigation && (
          <View style={[styles.navigation, styles.next]}>
            <Button icon="right" onPress={() => _onPressButton(NEXT)} small />
          </View>
        )}

        <ScrollView
          {...DEFAULT_PROPS}
          {...snapProps}
          contentContainerStyle={inherit.style}
          onScroll={_onScroll}
          ref={this.scrollview}
          scrollEventThrottle={1000}
        >
          { dataSource.map((data, index) => (
            <View key={index.toString()} style={{ marginRight: itemMargin }}>
              <Item data={data} />
            </View>
          ))}
          { inherit.children }
        </ScrollView>
      </View>
    );
  }
}

export default Slider;
