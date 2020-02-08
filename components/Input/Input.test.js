import React from 'react';
import renderer from 'react-test-renderer';

import { Input } from '..';

jest.useFakeTimers();

describe('<Input>', () => {
  it('renders', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Input color="green" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {currency}', () => {
    const tree = renderer.create(<Input currency="$" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<Input disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {error}', () => {
    const tree = renderer.create(<Input error="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {hint}', () => {
    const tree = renderer.create(<Input hint="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {icon}', () => {
    const tree = renderer.create(<Input icon="email" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {keyboard}', () => {
    const tree = renderer.create(<Input keyboard="numeric" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {label}', () => {
    const tree = renderer.create(<Input label="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {lines}', () => {
    const tree = renderer.create(<Input lines={5} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {required}', () => {
    const tree = renderer.create(<Input required />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {required} & {requiredIcon}', () => {
    const tree = renderer.create(<Input required requiredIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {valid}', () => {
    const tree = renderer.create(<Input valid value="soyjavi" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<Input value="soyjavi" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer
      .create(<Input style={{ backgroundColor: 'rgba(0,255,0,0.25)', padding: 10, width: 256 }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
