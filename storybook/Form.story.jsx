import React, { useEffect, useState } from 'react';

import { Form } from '../components';

import { ATTRIBUTES } from '../components/Form/Form.mocks';

export const FormStory = () => {
  const [form, setForm] = useState();

  useEffect(() => console.log('useEffect::form', form), [form]);

  return (
    <>
      <Form
        attributes={ATTRIBUTES}
        onChange={setForm}
        onValid={(value) => console.log('::onValid::', value)}
        validate
        value={form}
      />
    </>
  );
};
