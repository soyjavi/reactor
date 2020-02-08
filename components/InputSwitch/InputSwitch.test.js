import React from 'react';
import renderer from 'react-test-renderer';

import { InputSwitch } from '..';

describe('<InputSwitch>', () => {
  it('renders', () => {
    const tree = renderer.create(<InputSwitch />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<InputSwitch color="green" value />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {label}', () => {
    const tree = renderer.create(<InputSwitch label="Hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<InputSwitch visible />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<InputSwitch style={{ backgroundColor: 'orange' }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
