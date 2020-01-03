import { node, shape, string } from 'prop-types';
import React from 'react';

import SHAPE from '../common/shape';
import { ProviderTracking } from './Tracking';
import { L10NProvider, useL10N } from './L10N';
import { ThemeProvider, useTheme } from './Theme';

const Provider = ({ children, dictionary, language, session, theme }) => (
  <ProviderTracking session={session}>
    <L10NProvider dictionary={dictionary} language={language}>
      <ThemeProvider style={theme}>{children}</ThemeProvider>
    </L10NProvider>
  </ProviderTracking>
);

Provider.propTypes = {
  children: node.isRequired,
  session: shape(SHAPE.SESSION),
  theme: shape({}),
  dictionary: shape({}),
  language: string,
};

Provider.defaultProps = {
  dictionary: undefined,
  language: undefined,
  session: undefined,
  theme: undefined,
};

export { Provider, ProviderTracking, L10NProvider, ThemeProvider, useL10N, useTheme };
