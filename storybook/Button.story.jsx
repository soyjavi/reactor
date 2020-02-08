import React from 'react';

import { Button } from '../components';

const defaults = { style: { marginVertical: 4 } };

export const ButtonStory = () => (
  <>
    <Button {...defaults} title="default" />
    <Button {...defaults} size="S" title="small" />
    <Button {...defaults} size="L" title="large" />
  </>
);
