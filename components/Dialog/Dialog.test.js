import React from 'react';
import renderer from 'react-test-renderer';

import Dialog from './Dialog';
import MOCKS from './Dialog.mocks';

const EVENT = () => {};

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

  it('when {reverse}', () => {
    const tree = renderer.create(<Dialog visible reverse />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<Dialog title={MOCKS.TITLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<Dialog>{MOCKS.CHILDREN}</Dialog>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {background}', () => {
    const tree = renderer.create(<Dialog background={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Dialog style={MOCKS.STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {styleContainer}', () => {
    const tree = renderer.create(<Dialog styleContainer={MOCKS.STYLE_CONTAINER} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onClose}', () => {
    const tree = renderer.create(<Dialog onClose={EVENT} />).toJSON();
    expect(tree).toMatchSnapshot();
    // @TODO: Test <Dialog /> {onClose}
  });

  it('when {highlight}', () => {
    const tree = renderer.create(<Dialog title={MOCKS.TITLE} onClose={EVENT} highlight />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
