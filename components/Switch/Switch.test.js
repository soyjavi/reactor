import React from 'react';
import renderer from 'react-test-renderer';

import { Switch } from './Switch';

describe('<Switch>', () => {
  it('renders', () => {
    const tree = renderer.create(<Switch />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Switch color="green" value />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {label}', () => {
    const tree = renderer.create(<Switch label="Hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<Switch visible />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Switch style={{ backgroundColor: 'orange' }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
