import React from 'react';
import TestRenderer from 'react-test-renderer';

import { L10NProvider } from './L10N';

global.fetch = () => {};

describe('<ProviderL10N>', () => {
  it('renders', () => {
    const tree = TestRenderer.create(<L10NProvider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
