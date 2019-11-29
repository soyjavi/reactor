import React, { useState } from 'react';

import {
  Activity,
  Button,
  Calendar,
  ChartBar,
  Dialog,
  Form,
  Image,
  InputDate,
  Viewport,
  Skeleton,
  Slider,
} from './components';

import { ATTRIBUTES } from './components/Form/Form.mocks';
import MOCKS_CHARTBAR from './components/ChartBar/ChartBar.mocks';

import { Consumer, Provider } from './context';

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

export default () => {
  const [dialog, setDialog] = useState(false);
  const [calendar, setCalendar] = useState(undefined);
  const [form, setForm] = useState({});

  return (
    <Provider dictionary={DICTIONARY} language="en-EN">
      <Viewport visible scroll styleContent={{ padding: 10 }}>
        <Consumer>
          { ({ l10n }) => <Button onPress={() => setDialog(true)} title={l10n.GREETINGS} /> }
        </Consumer>
        <Activity />

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

        <Skeleton style={{ width: 320, height: 200 }} />

        <InputDate onChange={setCalendar} range value={calendar} />

        <ChartBar values={MOCKS_CHARTBAR.VALUES} styleContainer={{ height: 128 }} />

        <Form
          attributes={ATTRIBUTES}
          onChange={setForm}
          onValid={(value) => console.log('onValid', value)}
          validate
          value={form}
        />

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
