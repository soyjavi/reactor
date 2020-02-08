import React, { useState } from 'react';

import {
  ActivityStory,
  ButtonStory,
  DialogStory,
  FormStory,
  PriceStory,
  SliderStory,
  SnackbarStory,
  TextStory,
} from './storybook';
import { Button, LayoutView, Viewport } from './components';

import { L10NProvider, useL10N } from './context';

import { THEME } from './common';

if (typeof global.self === 'undefined') global.self = global;

const { COLOR } = THEME;
const DICTIONARY = {
  'es-ES': {
    GREETINGS: 'Hola Mundo...',
  },

  'en-EN': {
    GREETINGS: 'Hello World...',
  },
};

const App = () => {
  const [viewport, setViewport] = useState(false);
  const l10n = useL10N();

  return (
    <L10NProvider dictionary={DICTIONARY} language="en-EN">
      <LayoutView>
        <Viewport backward={viewport} visible scroll={false}>
          <ActivityStory />

          <Button onPress={() => setViewport(true)} title="viewport" />

          <DialogStory />
          <SnackbarStory />
          <ButtonStory />
          <PriceStory />
          <SliderStory />
          <TextStory />
          <FormStory />
        </Viewport>
        <Viewport visible={viewport}>
          <Button onPress={() => setViewport(false)} title="back" />
        </Viewport>
      </LayoutView>
    </L10NProvider>
  );
};

export default App;
