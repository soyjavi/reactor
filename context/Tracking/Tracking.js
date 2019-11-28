import { node } from 'prop-types';
import React, { useEffect, useState, createContext } from 'react';

import { Fingerprint } from './modules';

const { Provider, Consumer: ConsumerTracking } = createContext('reactor:tracking');

const ProviderTracking = ({ children }) => {
  const [fingerprint, setFingerprint] = useState(undefined);
  useEffect(async () => {
    setFingerprint(await Fingerprint());
  }, [fingerprint]);

  return <Provider value={{ fingerprint }}>{ children }</Provider>;
};

ProviderTracking.propTypes = {
  children: node,
};

ProviderTracking.defaultProps = {
  children: undefined,
};

export { ConsumerTracking, ProviderTracking };
