import React, { useEffect, useState } from 'react';

import { Form } from '../components';

import { Button, Row, Text, Viewport } from '../components';
import { ATTRIBUTES } from '../components/Form/Form.mocks';

import { Content, Header } from './components';

export const FormStory = (props) => {
  const [form, setForm] = useState();

  useEffect(() => console.log('useEffect::form', form), [form]);

  return (
    <Viewport {...props} scroll={false}>
      <Header {...props} title="Form" />
      <Content>
        <Form
          attributes={ATTRIBUTES}
          onChange={setForm}
          onValid={(value) => console.log('::onValid::', value)}
          validate
          value={form}
        />
      </Content>
    </Viewport>
  );
};
