import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import { Snackbar } from '..';

const LOREM =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.';
const DEFAULTS = { visible: true };
const { COLOR } = THEME;

jest.useFakeTimers();

describe('<Snackbar>', () => {
  it('renders', () => {
    const tree = renderer.create(<Snackbar {...DEFAULTS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {caption}', () => {
    const tree = renderer.create(<Snackbar {...DEFAULTS} caption={LOREM} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {button}', () => {
    const tree = renderer.create(<Snackbar {...DEFAULTS} button="CLOSE" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<Snackbar {...DEFAULTS}>{LOREM}</Snackbar>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Snackbar {...DEFAULTS} color={COLOR.ALERT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {visible} (false)', () => {
    const tree = renderer.create(<Snackbar visible={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('when {onPress}', () => {
  //   // @TODO: Test <Snackbar /> {onPress}
  // });
});
