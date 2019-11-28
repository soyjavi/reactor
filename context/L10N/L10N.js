import { node, shape, string } from 'prop-types';
import React, { createContext } from 'react';

const { Provider, Consumer: ConsumerL10N } = createContext('reactor:l10n');

const ProviderL10N = ({ children, dictionary, language }) => (
  <Provider value={{ l10n: dictionary[language] || {} }}>
    { children }
  </Provider>
);

ProviderL10N.propTypes = {
  children: node,
  dictionary: shape({}),
  language: string,
};

ProviderL10N.defaultProps = {
  children: undefined,
  dictionary: {},
  language: 'en-EN',
};


export { ConsumerL10N, ProviderL10N };
