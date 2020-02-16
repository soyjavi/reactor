import React from 'react';
import renderer from 'react-test-renderer';

import { Row } from '..';

describe('<Row>', () => {
  it('renders', () => {
    const tree = renderer.create(<Row />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {align}', () => {
    const tree = renderer.create(<Row align="start" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {justify}', () => {
    const tree = renderer.create(<Row justify="center" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook:styler', () => {
    const snapshot = renderer.create(<Row marginBottom="M" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
