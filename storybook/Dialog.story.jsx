import React, { useState } from 'react';

import { THEME } from '../common';
import { Alert, Button, Dialog, Row, Snackbar, Text, Viewport } from '../components';

import { Content, Header } from './components';

const { COLOR } = THEME;
const button = { color: 'black', marginVertical: 'XS', marginRight: 'XS', outlined: true };
const buttonProp = { ...button, size: 'S' };

export const DialogStory = (props) => {
  const [color, setColor] = useState(COLOR.CTA);
  const [position, setPosition] = useState('center');
  const [highlight, setHighlight] = useState(false);

  const [alert, setAlert] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  const dialogCommons = {
    color,
    position,
    highlight,
    style: highlight ? { backgroundColor: COLOR.CTA } : undefined,
    styleOverlay: highlight ? { backgroundColor: 'rgba(0,0,0,0.9)' } : undefined,
    onClose: () => {
      setAlert(false);
      setDialog(false);
      setSnackbar(false);
    },
  };

  return (
    <Viewport {...props} scroll={false}>
      <Header {...props} title="Dialogs" />
      <Content>
        <Text headline>Dialogs</Text>
        <Text marginBottom="M">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi molestiae omnis dolorum nostrum animi
          cum sunt distinctio itaque suscipit ex, debitis laudantium praesentium in dicta, quos reiciendis facilis quia.
        </Text>

        <Text bold>.highlight</Text>
        <Row marginBottom="M">
          {[true, false].map((item) => (
            <Button
              {...buttonProp}
              key={item}
              onPress={() => setHighlight(item)}
              outlined={item !== highlight}
              title={item.toString()}
            />
          ))}
        </Row>

        <Text bold>.position</Text>
        <Row marginBottom="M">
          {['top', 'center', 'bottom'].map((type) => (
            <Button
              {...buttonProp}
              key={type}
              onPress={() => setPosition(type)}
              outlined={type !== position}
              title={type}
            />
          ))}
        </Row>

        <Text bold>.color</Text>
        <Row marginBottom="M">
          {[COLOR.CTA, COLOR.SUCCESS, COLOR.ERROR].map((type) => (
            <Button
              {...buttonProp}
              color={type}
              key={type}
              onPress={() => setColor(type)}
              outlined={type !== color}
              title={type}
            />
          ))}
        </Row>

        <Button {...button} onPress={() => setDialog(true)} title="<Dialog>" wide />
        <Button {...button} onPress={() => setAlert(true)} title="<Alert>" wide />
        <Button {...button} onPress={() => setSnackbar(true)} title="<Snackbar>" wide />
        <Text align="center" caption>
          The Snackbar can not get the props: position & highlights
        </Text>
      </Content>

      <Dialog {...dialogCommons} visible={dialog}>
        <Text bold subtitle>
          Sign In
        </Text>
        <Text marginBottom="M" subtitle>
          Need an account? Create an account
        </Text>
        <Text caption>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          standard dummy text ever since the 1500s
        </Text>
      </Dialog>

      <Alert
        {...dialogCommons}
        accept="Accept"
        cancel="Cancel"
        caption="Alert messaging (or alert notification) is machine-to-person communication that is important or time sensitive. "
        title="Delete this item?"
        visible={alert}
        onAccept={() => setAlert(false)}
        onCancel={() => setAlert(false)}
      />

      <Snackbar
        {...dialogCommons}
        caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        icon="comment-question-outline"
        visible={snackbar}
      />
    </Viewport>
  );
};
