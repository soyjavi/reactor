import React, { useEffect, useState } from 'react';

import { Calendar, Viewport } from '../components';

import { Content, Header } from './components';

export const CalendarStory = (props) => {
  const [form, setForm] = useState();

  useEffect(() => console.log('useEffect::form', form), [form]);

  return (
    <Viewport {...props} scroll={false}>
      <Header {...props} title="Calendar" />
      <Content>
        <Calendar />
      </Content>
    </Viewport>
  );
};
