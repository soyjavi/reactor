import React, { useEffect, useState } from 'react';

import {
  Activity,
  Button,
  Calendar,
  Dialog,
  Form,
  Image,
  InputDate,
  Viewport,
  Skeleton,
  Slider,
} from './components';

import { ATTRIBUTES } from './components/Form/Form.mocks';

import { Provider, useL10N } from './context';

if (typeof global.self === 'undefined') global.self = global;

const ItemListingCard = ({ data }) => <ListingCard {...data} />; // eslint-disable-line

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

export default () => {
  const [dialog, setDialog] = useState(false);
  const [theme, setTheme] = useState(undefined);
  const [form, setForm] = useState();
  useEffect(() => console.log('useEffect::form', form), [form]);
  const l10n = useL10N();

  return (
    <Provider dictionary={DICTIONARY} language="en-EN" theme={theme}>
      <Viewport visible scroll styleContent={{ padding: 10 }}>
        <Button onPress={() => setDialog(true)} title={l10n.GREETINGS} />

        <Button title="Toggle Theme" onPress={() => setTheme(theme ? undefined : THEME)} />

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

        <Dialog
          title="Example of Dialog"
          visible={dialog}
          onClose={() => setDialog(false)}
        >
          <Calendar />
        </Dialog>
      </Viewport>
    </Provider>
  );
};
