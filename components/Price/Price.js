import { number, string } from 'prop-types';
import React from 'react';

import Text from '../Text';
import { format } from './modules';

const LOCALE = 'es-ES';

const Price = ({ currency, locale, fixed, operator, symbol, value, ...inherit }) => (
  <Text {...inherit} style={inherit.style}>
    {format({
      currency,
      fixed,
      locale,
      operator,
      symbol,
      value,
    })}
  </Text>
);

Price.propTypes = {
  currency: string,
  fixed: number,
  locale: string,
  operator: string,
  symbol: string,
  value: number,
};

Price.defaultProps = {
  currency: undefined,
  fixed: 2,
  locale: typeof navigator !== 'undefined' ? navigator.language : LOCALE,
  operator: undefined,
  symbol: undefined,
  value: 0,
};

export default Price;
