import React from 'react';
import TestRenderer from 'react-test-renderer';

import { ThemeProvider } from './Theme';
import THEME from '../../common/theme';

const customTheme = { COLOR: { BRAND: 'green' } };

describe('<ThemeProvider>', () => {
  it('renders', () => {
    const tree = TestRenderer.create(<ThemeProvider />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    expect(THEME.COLOR.BRAND).toEqual('#191919');
    const tree = TestRenderer.create(<ThemeProvider style={customTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(THEME.COLOR.BRAND).toEqual(customTheme.COLOR.BRAND);
  });
});
