import React from 'react';
import renderer from 'react-test-renderer';

import Form from './Form';
import { ATTRIBUTES, VALUE, STYLE } from './Form.mocks';

const EVENT = () => {};

jest.useFakeTimers();

describe('<Form>', () => {
  it('renders', () => {
    const tree = renderer.create(<Form attributes={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {attributes}', () => {
    const tree = renderer.create(<Form attributes={ATTRIBUTES} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Form attributes={ATTRIBUTES} color="green" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<Form attributes={ATTRIBUTES} value={VALUE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<Form title="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {validate}', () => {
    const tree = renderer.create(<Form attributes={ATTRIBUTES} value={VALUE} validate />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Form style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onChange}', () => {
    const tree = renderer.create(<Form onChange={EVENT} />).toJSON();
    expect(tree).toMatchSnapshot();
    // @TODO: Test <Form /> {onClose}
  });

  it('when {onValid}', () => {
    const tree = renderer.create(<Form onValid={EVENT} />).toJSON();
    expect(tree).toMatchSnapshot();
    // @TODO: Test <Form /> {onClose}
  });
});
