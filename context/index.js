import { func, node, shape } from 'prop-types';
import React from 'react';

import SHAPE from '../common/shape';
import { ConsumerTracking, ProviderTracking } from './Tracking';
import { ConsumerL10N, ProviderL10N } from './L10N';
import { ConsumerTheme, ProviderTheme } from './Theme';

const Consumer = ({ children }) => (
  <ConsumerTracking>
    { (tracking) => (
      <ConsumerL10N>
        { (l10n) => children({ ...tracking, ...l10n }) }
      </ConsumerL10N>
    )}
  </ConsumerTracking>
);

Consumer.propTypes = {
  children: func.isRequired,
};

const Provider = ({
  children, session, theme, ...l10n
}) => (
  <ProviderTracking session={session}>
    <ProviderL10N {...l10n}>
      {children}
    </ProviderL10N>
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
  Consumer,
  Provider,

  ConsumerTracking,
  ProviderTracking,

  ConsumerL10N,
  ProviderL10N,

  ConsumerTheme,
  ProviderTheme,
};
