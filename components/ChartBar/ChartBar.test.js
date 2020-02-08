import React from 'react';
import renderer from 'react-test-renderer';

import { ChartBar } from '..';
import MOCKS from './ChartBar.mocks';

const DEFAULT = { captions: MOCKS.CAPTIONS, values: MOCKS.VALUES };

jest.useFakeTimers();

describe('<ChartBar>', () => {
  it('renders', () => {
    const tree = renderer.create(<ChartBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {values}', () => {
    const tree = renderer.create(<ChartBar values={MOCKS.VALUES} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<ChartBar color={MOCKS.COLOR} values={MOCKS.VALUES} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {captions}', () => {
    const tree = renderer.create(<ChartBar {...DEFAULT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {scales}', () => {
    const tree = renderer.create(<ChartBar scales={MOCKS.SCALES} {...DEFAULT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {inverted}', () => {
    const tree = renderer.create(<ChartBar inverted {...DEFAULT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {highlight}', () => {
    const tree = renderer.create(<ChartBar highlight={MOCKS.HIGHLIGHT} {...DEFAULT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {lines}', () => {
    const tree = renderer.create(<ChartBar lines={MOCKS.LINES} {...DEFAULT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {styleContainer}', () => {
    const tree = renderer
      .create(<ChartBar styleContainer={MOCKS.STYLE_CONTAINER} scales={MOCKS.SCALES} {...DEFAULT} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {styleBar}', () => {
    const tree = renderer.create(<ChartBar styleBar={MOCKS.STYLE_BAR} scales={MOCKS.SCALES} {...DEFAULT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
