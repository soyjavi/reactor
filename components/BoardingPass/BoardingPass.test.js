import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

import BoardingPass from './BoardingPass';

const CHILDREN = <Text>Children component...</Text>;
const LOADING = <Text>Loading...</Text>;

jest.useFakeTimers();

describe('<BoardingPass>', () => {
  it('renders', () => {
    const tree = renderer.create(<BoardingPass />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<BoardingPass>{CHILDREN}</BoardingPass>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {loading}', () => {
    const tree = renderer.create(<BoardingPass loading={LOADING}>{CHILDREN}</BoardingPass>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {enabled}', () => {
    const tree = renderer.create(<BoardingPass enabled={false}>{CHILDREN}</BoardingPass>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
