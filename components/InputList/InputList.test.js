import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import InputList from './InputList';
import Text from '../Text';

const DATA_SOURCE = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
const VALUE = ['one', 'two', 'three', 'four', 'five'];
const VALUE_COMPLEX = [
  { avatar: 'https://api.adorable.io/avatars/128/1', name: 'one' },
  { avatar: 'https://api.adorable.io/avatars/128/2', name: 'two' },
  { avatar: 'https://api.adorable.io/avatars/128/3', name: 'three' },
  { avatar: 'https://api.adorable.io/avatars/128/4', name: 'four' },
  { avatar: 'https://api.adorable.io/avatars/128/5', name: 'five' },
];
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10 };
const item = ({ avatar, name }) => (
  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <Text style={{ marginLeft: 10 }}>{name}</Text>
  </View>
);

describe('<InputList>', () => {
  it('renders', () => {
    const tree = renderer.create(<InputList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<InputList disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {error}', () => {
    const tree = renderer.create(<InputList error="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {hint}', () => {
    const tree = renderer.create(<InputList hint="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {label}', () => {
    const tree = renderer.create(<InputList label="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {dataSource}', () => {
    const tree = renderer.create(<InputList dataSource={DATA_SOURCE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<InputList value={VALUE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {itemTemplate}', () => {
    const tree = renderer.create(<InputList itemTemplate={item} value={VALUE_COMPLEX} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<InputList style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
