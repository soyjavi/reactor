import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import { Motion } from '..';
import MOCKS from './Motion.mocks';

jest.useFakeTimers();

describe('<Motion>', () => {
  it('renders', () => {
    const tree = renderer.create(<Motion />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer
      .create(
        <Motion property="left">
          <View />
        </Motion>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {timeline}', () => {
    const tree = renderer.create(<Motion timeline={MOCKS.TIMELINE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {delay}', () => {
    const tree = renderer.create(<Motion timeline={MOCKS.TIMELINE} delay={1000} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<Motion timeline={MOCKS.TIMELINE} disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {duration}', () => {
    const tree = renderer.create(<Motion timeline={MOCKS.TIMELINE} duration={1000} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {type}', () => {
    const tree = renderer.create(<Motion timeline={MOCKS.TIMELINE} type="timing" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Motion timeline={MOCKS.TIMELINE} style={MOCKS.STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {useNativeDriver}', () => {
    const tree = renderer.create(<Motion timeline={MOCKS.TIMELINE} useNativeDriver />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook:styler', () => {
    const snapshot = renderer.create(<Motion marginBottom="M" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
