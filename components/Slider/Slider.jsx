import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { Platform, ScrollView } from 'react-native';

import { THEME } from '../../common';
import { View } from '../View';
import styles from './Slider.style';

const { SPACE } = THEME;

export const Slider = forwardRef(
  (
    {
      children,
      dataSource = [],
      Item = () => {},
      itemMargin = SPACE.S,
      itemWidth,
      onChange,
      snap = true,
      steps = 1,
      ...others
    },
    ref,
  ) => {
    const handleScroll = ({ nativeEvent: { contentOffset } }) => {
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
      <View {...others} style={styles.container}>
        <ScrollView
          {...snapProps}
          contentContainerStyle={others.style}
          horizontal
          ref={ref}
          scrollEventThrottle={1000}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
        >
          {dataSource.map((data, index) => (
            <View key={index.toString()} style={{ marginRight: itemMargin }}>
              <Item data={data} />
            </View>
          ))}
          {children}
        </ScrollView>
      </View>
    );
  },
);

Slider.propTypes = {
  children: PropTypes.node,
  dataSource: PropTypes.arrayOf(PropTypes.shape({})),
  Item: PropTypes.func,
  itemMargin: PropTypes.number,
  itemWidth: PropTypes.number,
  navigation: PropTypes.bool,
  onChange: PropTypes.func,
  snap: PropTypes.bool,
  steps: PropTypes.number,
};
