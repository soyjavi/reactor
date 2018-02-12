import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, color, select } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Activity from './Activity';

storiesOf('Activity', module)
  .addWithJSX('default', () => (
    <Activity />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Activity
      animating={boolean('animating', true)}
      color={color('color', THEME.COLOR.ACCENT)}
      hidesWhenStopped={boolean('hidesWhenStopped', false)}
      size={select('size', ['small', 'large'], 'small')}
    />
  ));
