import React from 'react';

import { Image, Slider, Viewport } from '../components';

import { Content, Header } from './components';

const ITEM = { width: 320, height: 200 };
const URI = `https://via.placeholder.com/${ITEM.width}x${ITEM.height}.png`;

export const SliderStory = (props) => (
  <Viewport {...props} scroll={false}>
    <Header {...props} title="Slider" />
    <Content>
      <Slider itemWidth={ITEM.width} navigation>
        {Array.from(Array(10).keys()).map((item) => (
          <Image key={item} source={{ uri: `${URI}?text=item+${item}` }} style={ITEM} />
        ))}
      </Slider>
    </Content>
  </Viewport>
);
