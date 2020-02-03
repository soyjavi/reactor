import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import { Price } from '..';
import Button from './Button';

jest.useFakeTimers();

describe('<Button>', () => {
  it('renders', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<Button title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {activity}', () => {
    const tree = renderer.create(<Button activity title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {borderRadius}', () => {
    const tree = renderer.create(<Button borderRadius={10} title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer
      .create(
        <Button>
          <Price headline color="white" value={19.95} symbol="$" />
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Button color={THEME.COLOR.BLACK} title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<Button disabled title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {icon}', () => {
    const tree = renderer.create(<Button icon="closeContrast" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {icon} & {title}', () => {
    const tree = renderer.create(<Button icon="closeContrast" title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onPress}', () => {
    // @TODO: Test <Button /> {onPress}
  });

  it('when {outlined}', () => {
    const tree = renderer.create(<Button outlined title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {size}', () => {
    const tree = renderer.create(<Button size="S" title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {wide}', () => {
    const tree = renderer.create(<Button wide title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer
      .create(<Button title="Press me" style={{ backgroundColor: 'rgba(0,255,0,0.25)' }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
