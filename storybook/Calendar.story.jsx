import React, { useEffect, useState } from 'react';

import { Calendar, Viewport } from '../components';

import { Content, Header } from './components';

export const CalendarStory = (props) => {
  // const [value, setValue] = useState();

  // useEffect(() => console.log('useEffect::form', value), value);

  return (
    <Viewport {...props} scroll={false}>
      <Header {...props} title="Calendar" />
      <Content>
        <Calendar />
      </Content>
    </Viewport>
  );
};
