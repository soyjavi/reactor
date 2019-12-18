import { node, shape, string } from 'prop-types';
import React, { createContext, useContext } from 'react';

const L10NContext = createContext('reactor:l10n');

const L10NProvider = ({ children, dictionary, language }) => (
  <L10NContext.Provider value={dictionary[language] || {}}>
    { children }
  </L10NContext.Provider>
);

L10NProvider.propTypes = {
  children: node,
  dictionary: shape({}),
  language: string,
};

L10NProvider.defaultProps = {
  children: undefined,
  dictionary: {},
  language: 'en-EN',
};

export { L10NProvider };

export const useL10N = () => useContext(L10NContext);
