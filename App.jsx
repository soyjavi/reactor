import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { ActivityStory, ButtonStory, DialogStory, FormStory, PriceStory, SliderStory, TextStory } from './storybook';
import { Button, LayoutView, Viewport } from './components';

if (typeof global.self === 'undefined') global.self = global;

const App = () => {
  const [viewport, setViewport] = useState(false);

  return (
    <LayoutView>
      <Viewport backward={viewport} visible scroll={false}>
        <ScrollView>
          <Button onPress={() => setViewport(true)} title="viewport" />
          <DialogStory />
          <FormStory />
        </ScrollView>
      </Viewport>
      <Viewport visible={viewport}>
        <Button onPress={() => setViewport(false)} title="back" />
        <ActivityStory />
        <ButtonStory />
        <PriceStory />
        <SliderStory />
        <TextStory />
      </Viewport>
    </LayoutView>
  );
};

export default App;
