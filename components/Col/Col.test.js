import React from 'react';
import renderer from 'react-test-renderer';

import { Col } from '..';

describe('<Col>', () => {
  it('renders', () => {
    const tree = renderer.create(<Col />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {align}', () => {
    const tree = renderer.create(<Col align="center" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {width}', () => {
    const tree = renderer.create(<Col width="auto" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook:styler', () => {
    const snapshot = renderer.create(<Col marginBottom="M" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
