import { node, shape } from 'prop-types';
import React from 'react';

import SHAPE from '../common/shape';
import { ProviderTracking } from './Tracking';
import { useL10N, L10NProvider } from './L10N';
import { ConsumerTheme, ProviderTheme } from './Theme';

const Provider = ({
  children, session, theme, ...l10n
}) => (
  <ProviderTracking session={session}>
    <L10NProvider {...l10n}>
      {children}
    </L10NProvider>
  </ProviderTracking>
);

Provider.propTypes = {
  children: node.isRequired,
  session: shape(SHAPE.SESSION),
  theme: shape({}),
};

Provider.defaultProps = {
  session: undefined,
  theme: undefined,
};

export {
  Provider,

  ProviderTracking,
  L10NProvider,
  ProviderTheme,

  ConsumerTheme,

  useL10N,
};
