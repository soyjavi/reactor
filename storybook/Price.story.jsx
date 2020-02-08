import React from 'react';

import { Price } from '../components';

export const PriceStory = () => (
  <>
    <Price currency="$" fixed={2} operator="+" value={1234.56789} />
  </>
);
