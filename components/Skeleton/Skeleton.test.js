import React from 'react';
import renderer from 'react-test-renderer';

import { Skeleton } from '..';

const STYLE = {
  height: 128,
  width: 128,
};

jest.useFakeTimers();

describe('<Skeleton>', () => {
  it('renders', () => {
    const tree = renderer.create(<Skeleton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {opacity}', () => {
    const tree = renderer.create(<Skeleton opacity={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Skeleton style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
