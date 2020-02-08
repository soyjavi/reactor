import React, { useState } from 'react';

import { Button, Snackbar } from '../components';

export const SnackbarStory = () => {
  const [snackbar, setSnackbar] = useState(false);

  return (
    <>
      <Button onPress={() => setSnackbar(true)} title="Show snackbar" />

      <Snackbar
        caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        visible={snackbar}
        onClose={() => setSnackbar(false)}
      />
    </>
  );
};
