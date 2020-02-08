import React from 'react';

import { Text } from '../components';

const DEFAULTS = {
  children: 'Lorem Ipsum...',
};

export const TextStory = () => (
  <>
    <Text headline {...DEFAULTS} />
    <Text subtitle {...DEFAULTS} />
    <Text bold {...DEFAULTS} />
    <Text {...DEFAULTS} />
    <Text caption {...DEFAULTS} />
    <Text lighten {...DEFAULTS} />
  </>
);
