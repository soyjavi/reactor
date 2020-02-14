import React from 'react';
import renderer from 'react-test-renderer';

import { Row } from '..';

describe('<Row>', () => {
  it('renders', () => {
    const tree = renderer.create(<Row />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {alignContent}', () => {
    const tree = renderer.create(<Row alignContent="center" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {alignItems}', () => {
    const tree = renderer.create(<Row alignItems="center" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {justifyContent}', () => {
    const tree = renderer.create(<Row justifyContent="center" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook:styler', () => {
    const snapshot = renderer.create(<Row marginBottom="M" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
