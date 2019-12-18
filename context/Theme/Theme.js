import { node, shape } from 'prop-types';
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';

import THEME from '../../common/theme';

const ThemeContext = createContext('reactor:theme');

const ThemeProvider = ({ children, style }) => {
  const [theme, setTheme] = useState(THEME.extend(style));
  useEffect(() => {
    setTheme(THEME.extend(style));
  }, [style]);

  return (
    <ThemeContext.Provider value={theme}>
      { children }
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: node,
  style: shape({}),
};

ThemeProvider.defaultProps = {
  children: undefined,
  style: {},
};

export { ThemeProvider };

export const useTheme = () => useContext(ThemeContext);
