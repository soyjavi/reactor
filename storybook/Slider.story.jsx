import React from 'react';

import { Image, Slider } from '../components';

const ITEM_STYLE = { width: 320, height: 200 };

export const SliderStory = () => (
  <>
    <Slider itemWidth={ITEM_STYLE.width} navigation>
      <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={ITEM_STYLE} />
      <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={ITEM_STYLE} />
      <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={ITEM_STYLE} />
      <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={ITEM_STYLE} />
      <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={ITEM_STYLE} />
      <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={ITEM_STYLE} />
      <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={ITEM_STYLE} />
      <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={ITEM_STYLE} />
      <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={ITEM_STYLE} />
    </Slider>
  </>
);
