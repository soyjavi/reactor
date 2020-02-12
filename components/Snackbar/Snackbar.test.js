import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import { Snackbar } from '..';

const icon = 'comment-question-outline';
const onClose = () => {};
const DEFAULTS = {
  caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  visible: true,
};
const {
  COLOR: { BRAND: color },
} = THEME;

jest.useFakeTimers();

describe('<Snackbar>', () => {
  it('renders', () => {
    const tree = renderer.create(<Snackbar {...DEFAULTS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Snackbar {...DEFAULTS} color={color} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {icon}', () => {
    const tree = renderer.create(<Snackbar {...DEFAULTS} icon={icon} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onClose}', () => {
    const tree = renderer.create(<Snackbar {...DEFAULTS} onClose={onClose} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {visible} (false)', () => {
    const tree = renderer.create(<Snackbar {...DEFAULTS} visible={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
