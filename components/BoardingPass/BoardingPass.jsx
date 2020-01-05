import { bool, func, node, shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import fetch from './modules/fetch';

const BoardingPass = ({
  children,
  enabled,
  endpoint,
  headers,
  loading,
  method,
  onError,
  onResponse,
  parameters,
  secure,
  service,
}) => {
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState(undefined);
  useEffect(() => {
    if (service && enabled) {
      setBusy(true);
      setError(undefined);
      fetch({
        endpoint,
        headers,
        method,
        secure,
        service,
        ...parameters,
      })
        .then((response) => {
          onResponse(response);
          setBusy(false);
        })
        .catch((e) => {
          onError(e);
          setBusy(false);
          setError(e);
        });
    }
  }, [enabled, service]);

  return (busy && enabled) || error ? loading : children;
};

BoardingPass.propTypes = {
  children: node,
  enabled: bool,
  endpoint: string,
  headers: shape({}),
  loading: node,
  method: string,
  onError: func,
  onResponse: func,
  parameters: shape({}),
  secure: bool,
  service: string,
};

BoardingPass.defaultProps = {
  children: undefined,
  enabled: true,
  endpoint: undefined,
  headers: {},
  loading: <View />,
  method: 'GET',
  onError() {},
  onResponse() {},
  parameters: {},
  secure: false,
  service: undefined,
};

export { fetch };

export default BoardingPass;
