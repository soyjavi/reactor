import React, { useEffect, useState } from 'react';

import { Button, Calendar, Dialog, Form, Icon, Image, Snackbar, Text, Viewport, Slider } from './components';

import { ATTRIBUTES } from './components/Form/Form.mocks';

import { L10NProvider, useL10N } from './context';

if (typeof global.self === 'undefined') global.self = global;

const DICTIONARY = {
  'es-ES': {
    GREETINGS: 'Hola Mundo...',
  },

  'en-EN': {
    GREETINGS: 'Hello World...',
  },
};

const THEME = {
  FONT: { FAMILY: 'Courier New' },
};

const LOREM = 'Lorem Ipsum...';

const App = () => {
  const [dialog, setDialog] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [theme, setTheme] = useState(undefined);
  const [form, setForm] = useState();
  useEffect(() => console.log('useEffect::form', form), [form]);
  const l10n = useL10N();

  return (
    <L10NProvider dictionary={DICTIONARY} language="en-EN" theme={theme}>
      <Viewport visible scroll styleContent={{ padding: 10 }}>
        <Icon />
        <Text headline>{LOREM}</Text>
        <Text subtitle>{LOREM}</Text>
        <Text>{LOREM}</Text>
        <Text caption>{LOREM}</Text>
        <Text bold headline>
          {LOREM}
        </Text>
        <Text bold subtitle>
          {LOREM}
        </Text>
        <Text bold>{LOREM}</Text>
        <Text bold caption>
          {LOREM}
        </Text>
        <Button icon="eye" iconFamily="Feather" iconSize={16} onPress={() => setDialog(true)} title={l10n.GREETINGS} />

        <Button icon="cellphone-message" title="Show Snackbar" onPress={() => setSnackbar(true)} />

        <Button icon="file" title="Toggle Theme" onPress={() => setTheme(theme ? undefined : THEME)} />

        <Form
          attributes={ATTRIBUTES}
          onChange={setForm}
          onValid={(value) => console.log('::onValid::', value)}
          validate
          value={form}
        />

        <Slider itemWidth={320} navigation>
          <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={{ width: 320, height: 200 }} />
          <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={{ width: 320, height: 200 }} />
          <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={{ width: 320, height: 200 }} />
          <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={{ width: 320, height: 200 }} />
          <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={{ width: 320, height: 200 }} />
          <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={{ width: 320, height: 200 }} />
          <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={{ width: 320, height: 200 }} />
          <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={{ width: 320, height: 200 }} />
          <Image source={{ uri: 'https://picsum.photos/320/200/?random' }} style={{ width: 320, height: 200 }} />
        </Slider>

        <Dialog title="Example of Dialog" visible={dialog} onClose={() => setDialog(false)}>
          <Calendar />
        </Dialog>

        <Snackbar
          caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          visible={snackbar}
          button="Close"
          onPress={() => setSnackbar(false)}
        />
      </Viewport>
    </L10NProvider>
  );
};

export default App;
