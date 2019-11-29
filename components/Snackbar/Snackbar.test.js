import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Snackbar from './Snackbar';

const LOREM = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.';
const PROPS = { visible: true };
const { COLOR } = THEME;

jest.useFakeTimers();

describe('<Snackbar>', () => {
  it('renders', () => {
    const tree = renderer.create(<Snackbar {...PROPS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {caption}', () => {
    const tree = renderer.create(<share {...PROPS} caption={LOREM} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {button}', () => {
    const tree = renderer.create(<share {...PROPS} caption={LOREM} button="CLOSE" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<share {...PROPS} caption={LOREM} color={COLOR.ALERT} button="CLOSE" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {visible} (false)', () => {
    const tree = renderer.create(<share visible={false} caption={LOREM} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('when {onPress}', () => {
  //   // @TODO: Test <Snackbar /> {onPress}
  // });
});
