import React from 'react';
import { Text } from 'react-native';
import TestRenderer from 'react-test-renderer';

import { Viewport } from '..';

jest.useFakeTimers();

describe('<Viewport>', () => {
  it('renders', () => {
    const renderer = TestRenderer.create(<Viewport />).toJSON();
    expect(renderer).toMatchSnapshot();
  });

  it('when {children}', () => {
    const renderer = TestRenderer.create(
      <Viewport>
        <Text>Hello World</Text>
      </Viewport>,
    ).toJSON();
    expect(renderer).toMatchSnapshot();
  });

  it('when {onScroll}', () => {
    const renderer = TestRenderer.create(<Viewport onScroll={() => {}} />).toJSON();
    expect(renderer).toMatchSnapshot();
  });

  it('when {style}', () => {
    const renderer = TestRenderer.create(<Viewport style={{ width: 320, height: 480 }} />).toJSON();
    expect(renderer).toMatchSnapshot();
  });

  it('when {styleContent}', () => {
    const renderer = TestRenderer.create(<Viewport styleContent={{ padding: 32 }} />).toJSON();
    expect(renderer).toMatchSnapshot();
  });

  it('when {visible}', () => {
    const renderer = TestRenderer.create(<Viewport visible />).toJSON();
    expect(renderer).toMatchSnapshot();
  });

  it('when {backward}', () => {
    const renderer = TestRenderer.create(<Viewport backward visible />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
});
