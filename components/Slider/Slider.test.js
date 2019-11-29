import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import Slider from './Slider';

const dataSource = [...Array(2).keys()]
  .map(index => ({
    title: `Title ${index}`,
    image: `https://picsum.photos/320/200?image=1${index + 1}`,
  }));

const Item = ({ data }) => <View {...data} />;

describe('<Slider>', () => {
  it('renders', () => {
    const tree = renderer.create(<Slider />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {dataSource}', () => {
    const tree = renderer.create(<Slider dataSource={dataSource} item={Item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {navigation}', () => {
    const tree = renderer.create(<Slider navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {itemMargin}', () => {
    const tree = renderer.create(<Slider dataSource={dataSource} item={Item} itemMargin={16} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {snap=false}', () => {
    const tree = renderer.create(<Slider dataSource={dataSource} item={Item} snap={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {steps}', () => {
    const tree = renderer.create(<Slider dataSource={dataSource} item={Item} steps={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<Slider title="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {caption}', () => {
    const tree = renderer.create(<Slider caption="Hello World" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onChange}', () => {
    // @TODO: Test <Slider /> {onChange}
  });

  it('when {children}', () => {
    const tree = renderer.create(<Slider><View /></Slider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Slider dataSource={dataSource} item={Item} style={{ backgroundColor: 'orange', padding: 20 }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
