import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import { Image } from '..';

const dataSource = [
  { caption: 'Spain', href: '/' },
  { caption: 'Basque Country', href: '/' },
  { caption: 'Bilbao', href: '/' },
];

const IMAGE_PLACEHOLDER = 'https://picsum.photos/320/200/?random';

jest.useFakeTimers();

describe('<Image>', () => {
  it('renders', () => {
    const tree = renderer.create(<Image />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {source}', () => {
    const tree = renderer.create(<Image source={{ uri: IMAGE_PLACEHOLDER }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Image style={{ backgroundColor: THEME.COLOR.ERROR }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook:styler', () => {
    const snapshot = renderer.create(<Image marginBottom="M" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
