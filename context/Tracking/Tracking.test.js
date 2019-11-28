import React from 'react';
import TestRenderer from 'react-test-renderer';

import { ConsumerTracking, ProviderTracking } from './Tracking';

global.fetch = () => {};

describe('<ProviderTracking>', () => {
  it('renders', () => {
    const tree = TestRenderer.create(<ProviderTracking />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
