import React from 'react';
import renderer from 'react-test-renderer';

import InputImage from './InputImage';

const VALUE = 'http://soyjavi.com/assets/images/soyjavi.jpg';
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10 };

jest.useFakeTimers();

describe('<InputImage>', () => {
  it('renders', () => {
    const tree = renderer.create(<InputImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<InputImage disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {error}', () => {
    const tree = renderer.create(<InputImage error="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {hint}', () => {
    const tree = renderer.create(<InputImage hint="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {label}', () => {
    const tree = renderer.create(<InputImage label="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {required}', () => {
    const tree = renderer.create(<InputImage required />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<InputImage value={VALUE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<InputImage style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
