import React, { useState } from 'react';

import { Button, LayoutView, Text, Viewport } from './components';
import PKG from './package.json';
import {
  Content,
  Header,
  ButtonStory,
  CalendarStory,
  DialogStory,
  FormStory,
  LayoutStory,
  SliderStory,
  TextStory,
} from './storybook';

if (typeof global.self === 'undefined') global.self = global;

const buttonProps = {
  color: 'black',
  marginVertical: 'XS',
  outlined: true,
};

const App = () => {
  const [story, setStory] = useState('dialog');
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
          <Button {...buttonProps} text="Button" onPress={() => setStory('button')} />
          <Button {...buttonProps} disabled text="Calendar" onPress={() => setStory('calendar')} />
          <Button {...buttonProps} disabled text="ChartBar" onPress={() => setStory('chartbar')} />
          <Button {...buttonProps} text="Dialog" onPress={() => setStory('dialog')} />
          <Button {...buttonProps} text="Form" onPress={() => setStory('form')} />
          <Button {...buttonProps} disabled text="Icon" onPress={() => setStory('icon')} />
          <Button {...buttonProps} disabled text="Image" onPress={() => setStory('image')} />
          <Button {...buttonProps} text="Layout" onPress={() => setStory('layout')} />
          <Button {...buttonProps} disabled text="Link" onPress={() => setStory('link')} />
          <Button {...buttonProps} disabled text="Motion" onPress={() => setStory('motion')} />
          <Button {...buttonProps} disabled text="Price" onPress={() => setStory('price')} />
          <Button {...buttonProps} disabled text="ProgressBar" onPress={() => setStory('progressbar')} />
          <Button {...buttonProps} disabled text="Skeleton" onPress={() => setStory('skeleton')} />
          <Button {...buttonProps} text="Slider" onPress={() => setStory('slider')} />
          <Button {...buttonProps} disabled text="Touchable" onPress={() => setStory('touchable')} />
          <Button {...buttonProps} text="Text" onPress={() => setStory('text')} />
        </Content>
      </Viewport>

      <ButtonStory visible={story === 'button'} onBack={handleBack} />
      <DialogStory visible={story === 'dialog'} onBack={handleBack} />
      <CalendarStory visible={story === 'calendar'} onBack={handleBack} />
      <FormStory visible={story === 'form'} onBack={handleBack} />
      <LayoutStory visible={story === 'layout'} onBack={handleBack} />
      <SliderStory visible={story === 'slider'} onBack={handleBack} />
      <TextStory visible={story === 'text'} onBack={handleBack} />
    </LayoutView>
  );
};

export default App;
