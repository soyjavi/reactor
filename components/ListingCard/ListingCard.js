import {
  func, node, string,
} from 'prop-types';
import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { LAYOUT } from '../../common';
import PictureCard from '../PictureCard';
import Text from '../Text';

import styles from './ListingCard.style';

const ListingCard = ({
  category, children, description, onPress, title, ...inherit
}) => (
  <View style={inherit.styleContainer}>
    <TouchableWithoutFeedback disabled={!onPress} onPress={onPress}>
      <View style={[styles.container, LAYOUT.CARD.WIDTH]}>
        <PictureCard {...inherit} styleContainer={null} />
        <View style={styles.content}>
          { category && (
          <Text lighten caption>
            {category}
          </Text>
          ) }
          { title && (
          <Text subtitle level={3} numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>
          ) }
          { description && (
          <Text lighten caption numberOfLines={3} ellipsizeMode="tail">
            {description}
          </Text>
          ) }
          { children }
        </View>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

ListingCard.propTypes = {
  category: string,
  children: node,
  description: string,
  image: string,
  onPress: func,
  title: string,
};

ListingCard.defaultProps = {
  category: undefined,
  children: undefined,
  description: undefined,
  image: undefined,
  onPress: undefined,
  title: undefined,
};

export default ListingCard;
