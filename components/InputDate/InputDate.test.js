import React from 'react';
import renderer from 'react-test-renderer';

import InputDate from './InputDate';
import {
  ERROR, HINT, LABEL, PLACEHOLDER, STYLE, TEMPLATE, VALUE, VALUE_RANGE
} from './InputDate.mocks';

jest.useFakeTimers();

describe('<InputDate>', () => {
  it('renders', () => {
    const tree = renderer.create(<InputDate />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<InputDate disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {error}', () => {
    const tree = renderer.create(<InputDate error={ERROR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {hint}', () => {
    const tree = renderer.create(<InputDate hint={HINT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {label}', () => {
    const tree = renderer.create(<InputDate label={LABEL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {placeholder}', () => {
    const tree = renderer.create(<InputDate placeholder={PLACEHOLDER} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<InputDate value={3} value={VALUE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value} & {range}', () => {
    const tree = renderer.create(<InputDate value={3} value={VALUE_RANGE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<InputDate style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
