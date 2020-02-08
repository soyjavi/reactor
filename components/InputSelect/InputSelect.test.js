import React from 'react';
import renderer from 'react-test-renderer';

import { InputSelect } from '..';
import { DATASOURCE, DATASOURCE_STRING, ERROR, HINT, LABEL, STYLE, TEMPLATE } from './InputSelect.mocks';

jest.useFakeTimers();

describe('<InputSelect>', () => {
  it('renders', () => {
    const tree = renderer.create(<InputSelect />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {dataSource}', () => {
    const tree = renderer.create(<InputSelect dataSource={DATASOURCE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {dataSource (string)}', () => {
    const tree = renderer.create(<InputSelect dataSource={DATASOURCE_STRING} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<InputSelect disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {error}', () => {
    const tree = renderer.create(<InputSelect error={ERROR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {hint}', () => {
    const tree = renderer.create(<InputSelect hint={HINT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {label}', () => {
    const tree = renderer.create(<InputSelect label={LABEL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {ItemTemplate}', () => {
    const tree = renderer.create(<InputSelect label={LABEL} ItemTemplate={TEMPLATE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<InputSelect value={3} dataSource={DATASOURCE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<InputSelect style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
