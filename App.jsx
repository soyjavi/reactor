import React, { useState } from 'react';

import PKG from './package.json';
import { ButtonStory, DialogStory, FormStory } from './storybook';
import { Button, LayoutView, Text, Viewport } from './components';
import { Content, Header } from './storybook/components';

if (typeof global.self === 'undefined') global.self = global;

const buttonProps = { color: 'black', marginVertical: 'XS', outlined: true, wide: true };

const App = () => {
  const [story, setStory] = useState(undefined);

  const handleBack = () => setStory(undefined);

  return (
    <LayoutView>
      <Viewport backward={story !== undefined} visible scroll={false}>
        <Header title={`Reactor ${PKG.version}`} />
        <Content>
          <Text marginBottom="S">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veritatis architecto, impedit animi itaque
            perferendis quos hic cupiditate, pariatur, voluptas illum quo non cumque neque sequi delectus quod quia
            amet.
          </Text>

          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veritatis architecto, impedit animi itaque
            perferendis quos hic cupiditate, pariatur, voluptas illum quo non cumque neque sequi delectus quod quia
            amet.
          </Text>

          <Text bold subtitle marginTop="M">
            Stories
          </Text>
          <Button {...buttonProps} title="Buttons" onPress={() => setStory('button')} />
          <Button {...buttonProps} title="Dialogs" onPress={() => setStory('dialog')} />
          <Button {...buttonProps} title="Forms" onPress={() => setStory('form')} />
        </Content>
      </Viewport>

      <ButtonStory visible={story === 'button'} onBack={handleBack} />
      <DialogStory visible={story === 'dialog'} onBack={handleBack} />
      <FormStory visible={story === 'form'} onBack={handleBack} />
    </LayoutView>
  );
};

export default App;
