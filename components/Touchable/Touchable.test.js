import React from 'react';
import renderer from 'react-test-renderer';
import { View, Text } from 'react-native';

import Touchable from './Touchable';

jest.useFakeTimers();

describe('<Touchable>', () => {
  it('renders', () => {
    const tree = renderer.create(<Touchable><View /></Touchable>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<Touchable><Text>Hello World</Text></Touchable>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {containerBorderRadius}', () => {
    const tree = renderer.create(<Touchable containerBorderRadius={48} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {rippleColor}', () => {
    const tree = renderer.create(<Touchable rippleColor="rgba(0,255,0,0.25)" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onPress}', () => {
    // @TODO: Test <Touchable /> {onPress}
  });

  it('when {style}', () => {
    const tree = renderer.create(<Touchable style={{ backgroundColor: 'rgba(0,255,0,0.25)' }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
