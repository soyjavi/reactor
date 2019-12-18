import React from 'react';
import TestRenderer from 'react-test-renderer';

import { ThemeProvider } from './Theme';
import THEME from '../../common/theme';

const customTheme = { COLOR: { PRIMARY: 'green' } };

describe('<ThemeProvider>', () => {
  it('renders', () => {
    const tree = TestRenderer.create(<ThemeProvider />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    expect(THEME.COLOR.PRIMARY).toEqual('#10c0bc');
    const tree = TestRenderer.create(<ThemeProvider style={customTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(THEME.COLOR.PRIMARY).toEqual(customTheme.COLOR.PRIMARY);
  });
});
