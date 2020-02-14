import React, { useState } from 'react';

import { Alert, Button, Dialog, Row, Snackbar, Text } from '../components';

export const DialogStory = () => {
  const [alert, setAlert] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  return (
    <>
      <Row paddingVertical="M" justifyContent="space">
        <Button onPress={() => setDialog(true)} title="<Dialog>" />
        <Button onPress={() => setSnackbar(true)} title="<Snackbar>" />
        <Button onPress={() => setAlert(true)} title="<Alert>" />
      </Row>

      <Dialog title="Example of Dialog" visible={dialog} onClose={() => setDialog(false)}>
        <Text headline>Sign In</Text>
        <Text subtitle>Need an account? Create an account</Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          standard dummy text ever since the 1500s
        </Text>
      </Dialog>

      <Alert
        accept="Aceptar"
        cancel="Cancelar"
        caption="Alert messaging (or alert notification) is machine-to-person communication that is important or time sensitive. "
        position="top"
        title="Delete this item?"
        visible={alert}
        onAccept={() => setAlert(false)}
        onCancel={() => setAlert(false)}
        onClose={() => setAlert(false)}
      />

      <Snackbar
        caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        icon="comment-question-outline"
        visible={snackbar}
        onClose={() => setSnackbar(false)}
      />
    </>
  );
};
