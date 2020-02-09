import React from 'react';
import renderer from 'react-test-renderer';

import { Dialog } from '..';
import MOCKS from './Dialog.mocks';

const position = 'bottom';
const fn = () => {};

jest.useFakeTimers();

describe('<Dialog>', () => {
  it('renders', () => {
    const tree = renderer.create(<Dialog />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {visible}', () => {
    const tree = renderer.create(<Dialog visible />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<Dialog>{MOCKS.CHILDREN}</Dialog>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {highlight}', () => {
    const tree = renderer.create(<Dialog title={MOCKS.TITLE} highlight />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onClose}', () => {
    const tree = renderer.create(<Dialog onClose={fn} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {position}', () => {
    const tree = renderer.create(<Dialog position={MOCKS.POSITION} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Dialog style={MOCKS.STYLE} styleOverlay={MOCKS.STYLE_CONTAINER} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook:styler', () => {
    const snapshot = renderer.create(<Dialog marginBottom="M" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
