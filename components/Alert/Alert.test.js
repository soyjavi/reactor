import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import { Alert } from '..';

const accept = 'Accept';
const cancel = 'Cancel';
const caption = '... of the printing and typesetting industry';
const fn = () => {};
const icon = 'comment-question-outline';
const onClose = () => {};
const DEFAULTS = {
  title: 'Lorem Ipsum is simply dummy text...',
  visible: true,
};
const {
  COLOR: { BRAND: color },
} = THEME;

jest.useFakeTimers();

describe('<Alert>', () => {
  it('renders', () => {
    const tree = renderer.create(<Alert {...DEFAULTS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {accept}', () => {
    const tree = renderer.create(<Alert {...DEFAULTS} accept={accept} onAccept={fn} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {cancel}', () => {
    const tree = renderer.create(<Alert {...DEFAULTS} cancel={cancel} onAccept={fn} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {caption}', () => {
    const tree = renderer.create(<Alert {...DEFAULTS} caption={caption} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Alert {...DEFAULTS} color={color} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {visible} (false)', () => {
    const tree = renderer.create(<Alert {...DEFAULTS} visible={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook:styler', () => {
    const snapshot = renderer.create(<Alert {...DEFAULTS} marginBottom="M" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
