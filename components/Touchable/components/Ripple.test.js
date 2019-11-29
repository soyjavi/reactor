import React from 'react';
import renderer from 'react-test-renderer';
import { View, Text } from 'react-native';

import Ripple from './Ripple';

jest.useFakeTimers();

describe('<Ripple>', () => {
  it('renders', () => {
    const tree = renderer.create(<Ripple />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('when {children}', () => {
  //   const tree = renderer.create(<Touchable><Text>Hello World</Text></Touchable>).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // it('when {containerBorderRadius}', () => {
  //   const tree = renderer.create(<Touchable containerBorderRadius={48} />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // it('when {rippleColor}', () => {
  //   const tree = renderer.create(<Touchable rippleColor="rgba(0,255,0,0.25)" />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // it('when {onPress}', () => {
  //   // @TODO: Test <Touchable /> {onPress}
  // });

  // it('when {style}', () => {
  //   const tree = renderer.create(<Touchable style={{ backgroundColor: 'rgba(0,255,0,0.25)' }} />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});

