import { number, string } from 'prop-types';
import React from 'react';

import { Text } from '..';
import { format } from './modules';

const LOCALE = 'es-ES';

const Price = ({
  currency,
  fixed = 2,
  locale = typeof navigator !== 'undefined' ? navigator.language : LOCALE,
  operator,
  symbol,
  value = 0,
  ...others
}) => (
  <Text {...others}>
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

export { Price };
