import React, { useEffect, useState } from 'react';

import {
  Activity,
  Button,
  ChartBar,
  Dialog,
  Form,
  Image,
  LayoutView,
  Price,
  Skeleton,
  Slider,
  Snackbar,
  Text,
  Viewport,
} from './components';

import MOCKS from './components/ChartBar/ChartBar.mocks';
import { ATTRIBUTES } from './components/Form/Form.mocks';

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

const LOREM = 'Lorem Ipsum...';

const buttonProps = {
  style: { marginVertical: 4 },
  color: COLOR.BRAND,
  title: 'Press me',
  onPress() {},
};

const textProps = {
  children: 'Lorem Ipsum...',
};

const App = () => {
  const [dialog, setDialog] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [viewport, setViewport] = useState(false);
  const [theme, setTheme] = useState(undefined);
  const [form, setForm] = useState();
  useEffect(() => console.log('useEffect::form', form), [form]);
  const l10n = useL10N();

  return (
    <L10NProvider dictionary={DICTIONARY} language="en-EN" theme={theme}>
      <LayoutView>
        <Viewport backward={viewport} visible scroll styleContent={{ padding: 10 }}>
          <Form
            attributes={ATTRIBUTES}
            onChange={setForm}
            onValid={(value) => console.log('::onValid::', value)}
            validate
            value={form}
          />

          <Activity />
          <Button {...buttonProps} size="S" onPress={() => setViewport(true)} title="viewport" />
          <Button
            {...buttonProps}
            color={COLOR.CTA}
            icon="cellphone-message"
            onPress={() => setSnackbar(true)}
            title="snackbar"
          />
          <Button
            {...buttonProps}
            color={COLOR.BLACK}
            outlined
            size="L"
            onPress={() => setDialog(true)}
            title="dialog"
          />

          <ChartBar
            styleContainer={{ height: 128, width: 320, backgroundColor: 'orange' }}
            captions={MOCKS.CAPTIONS}
            values={MOCKS.VALUES}
            _scales={MOCKS.SCALES}
            _lines={MOCKS.LINES}
          />

          <Skeleton style={{ width: 100, height: 100 }} />
          <Image
            source={{ uri: 'https://picsum.photos/320/200/?random' }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text headline {...textProps} />
          <Text subtitle {...textProps} />
          <Text bold {...textProps} />
          <Text {...textProps} />
          <Text caption {...textProps} />
          <Text lighten {...textProps} />

          <Price currency="$" fixed={2} operator="+" value={1234.56789} />

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
        </Viewport>
        <Viewport visible={viewport}>
          <Button {...buttonProps} onPress={() => setViewport(false)} title="back" />
        </Viewport>

        <Dialog title="Example of Dialog" visible={dialog} onClose={() => setDialog(false)}>
          <Text headline>Sign In</Text>
          <Text subtitle>Need an account? Create an account</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </Text>
        </Dialog>

        <Snackbar
          caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          visible={snackbar}
          onClose={() => setSnackbar(false)}
        />
      </LayoutView>
    </L10NProvider>
  );
};

export default App;
