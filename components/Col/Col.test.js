import React from 'react';
import renderer from 'react-test-renderer';

import { Col } from '..';

describe('<Col>', () => {
  it('renders', () => {
    const tree = renderer.create(<Col />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {alignContent}', () => {
    const tree = renderer.create(<Col alignContent="center" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {alignItems}', () => {
    const tree = renderer.create(<Col alignItems="center" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {justifyContent}', () => {
    const tree = renderer.create(<Col justifyContent="center" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook:styler', () => {
    const snapshot = renderer.create(<Col marginBottom="M" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
