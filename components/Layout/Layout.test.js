import React from 'react';
import renderer from 'react-test-renderer';

import { LayoutView } from '..';

const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)' };

jest.useFakeTimers();

describe('<LayoutView>', () => {
  it('renders', () => {
    const tree = renderer.create(<LayoutView />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<LayoutView style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onLayout}', () => {
    // @TODO: Test <LayoutView /> {onLayout}
  });

  it('hook:styler', () => {
    const snapshot = renderer.create(<LayoutView marginBottom="M" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
