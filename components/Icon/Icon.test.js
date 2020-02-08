import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import { Icon } from '..';
import MOCKS from './Icon.mocks';

jest.useFakeTimers();

describe('<Icon>', () => {
  it('renders', () => {
    const tree = renderer.create(<Icon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<Icon value={MOCKS.VALUE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color} (only Native)', () => {
    const tree = renderer.create(<Icon color={MOCKS.COLOR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {size}', () => {
    const tree = renderer.create(<Icon size={MOCKS.SIZE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {family}', () => {
    const tree = renderer.create(<Icon value={MOCKS.VALUE} family={MOCKS.FAMILY} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
