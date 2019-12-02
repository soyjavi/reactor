import { node, shape } from 'prop-types';
import React, { useEffect, useState, createContext } from 'react';

import THEME from '../../common/theme';

const { Provider, Consumer: ConsumerTheme } = createContext('reactor:l10n');

const ProviderTheme = ({ children, style }) => {
  const [theme, setTheme] = useState(THEME.extend(style));
  useEffect(() => {
    setTheme(THEME.extend(style));
  }, []);

  return <Provider value={theme}>{ children }</Provider>;
};

ProviderTheme.propTypes = {
  children: node,
  style: shape({}),
};

ProviderTheme.defaultProps = {
  children: undefined,
  style: {},
};

export { ConsumerTheme, ProviderTheme };
