import React from 'react';

import { THEME } from '../common';
import { Text, Viewport } from '../components';

import { Content, Header } from './components';

const { COLOR } = THEME;
const LOREM = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ';
const prop = { caption: true, bold: true, marginTop: 'M' };

export const TextStory = (props) => (
  <Viewport {...props} scroll={false}>
    <Header {...props} title="Form" />
    <Content>
      <Text>{LOREM}</Text>

      <Text {...prop}>.headline</Text>
      <Text headline>{LOREM}</Text>

      <Text {...prop}>.subtitle</Text>
      <Text subtitle>{LOREM}</Text>

      <Text {...prop}>.caption</Text>
      <Text caption>{LOREM}</Text>

      <Text {...prop}>.bold</Text>
      <Text bold>{LOREM}</Text>

      <Text {...prop}>.color</Text>
      <Text color={COLOR.BASE}>{LOREM}</Text>

      <Text bold />
    </Content>
  </Viewport>
);
