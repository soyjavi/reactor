import React, { useState } from 'react';

import { Button, Dialog, Text } from '../components';

export const DialogStory = () => {
  const [dialog, setDialog] = useState(false);

  return (
    <>
      <Button onPress={() => setDialog(true)} title="Show dialog" />

      <Dialog title="Example of Dialog" visible={dialog} onClose={() => setDialog(false)}>
        <Text headline>Sign In</Text>
        <Text subtitle>Need an account? Create an account</Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s
        </Text>
      </Dialog>
    </>
  );
};
