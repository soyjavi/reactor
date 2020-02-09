import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import { Text } from '..';

const LOREM = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

describe('<Text>', () => {
  it('renders', () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {headline}', () => {
    const tree = renderer.create(<Text headline>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {subtitle}', () => {
    const tree = renderer.create(<Text subtitle>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {caption}', () => {
    const tree = renderer.create(<Text caption>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {lighten}', () => {
    const tree = renderer.create(<Text lighten>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Text color={THEME.COLOR.ERROR}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {numberOfLines}', () => {
    const tree = renderer.create(<Text numberOfLines={2}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Text style={{ color: 'orange' }}>{LOREM}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook:styler', () => {
    const snapshot = renderer.create(<Text marginBottom="M" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
