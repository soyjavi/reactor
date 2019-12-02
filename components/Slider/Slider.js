import {
  arrayOf, bool, func, node, number, shape, string,
} from 'prop-types';
import React, { useRef, useState } from 'react';
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

const Slider = ({
  caption, children, dataSource, navigation, snap, steps, title,
  item: Item, itemMargin, itemWidth = LAYOUT.CARD.SLIDER, onChange,
  ...inherit
}) => {
  const scrollViewEl = useRef(null);
  const [x, setX] = useState(0);

  const onPressButton = (type) => {
    const itemOffset = itemWidth + itemMargin;
    const length = dataSource.length || children.length;
    const max = ((length + 1) * itemOffset) - scrollViewEl.current.getScrollableNode().offsetWidth;
    let nextX = itemOffset * steps;

    nextX = type === NEXT ? x + nextX : x - nextX;
    if (nextX < 0 || nextX > max) nextX = 0;

    scrollViewEl.current.scrollTo({ x: nextX });
    setX(nextX);
  };

  const onScroll = ({ nativeEvent: { contentOffset } }) => {
    if (x !== contentOffset.x) setX(contentOffset.x);
    if (onChange) onChange(contentOffset);
  };

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
          <Text headline style={styles.title}>
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
          <Button icon="left" onPress={onPressButton} small />
        </View>
      )}

      { navigation && (
        <View style={[styles.navigation, styles.next]}>
          <Button icon="right" onPress={() => onPressButton(NEXT)} small />
        </View>
      )}

      <ScrollView
        {...DEFAULT_PROPS}
        {...snapProps}
        contentContainerStyle={inherit.style}
        onScroll={onScroll}
        ref={scrollViewEl}
        scrollEventThrottle={1000}
      >
        { dataSource.map((data, index) => (
          <View key={index.toString()} style={{ marginRight: itemMargin }}>
            <Item data={data} />
          </View>
        ))}
        { children }
      </ScrollView>
    </View>
  );
};

Slider.propTypes = {
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

Slider.defaultProps = {
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

export default Slider;
