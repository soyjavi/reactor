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

  it('when {icon}', () => {
    const tree = renderer.create(<Button icon="closeContrast" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {icon} & {title}', () => {
    const tree = renderer.create(<Button icon="closeContrast" title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {contained=false}', () => {
    const tree = renderer.create(<Button contained={false} title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {outlined}', () => {
    const tree = renderer.create(<Button outlined title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {activity}', () => {
    const tree = renderer.create(<Button activity title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(
      <Button>
        <Price headline color="white" value={19.95} symbol="$" />
      </Button>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Button color="red" title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color} (COLOR.WHITE)', () => {
    const tree = renderer.create(<Button color={THEME.COLOR.WHITE} title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<Button disabled title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {responsive}', () => {
    const tree = renderer.create(<Button responsive title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {rounded}', () => {
    const tree = renderer.create(<Button rounded title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {small}', () => {
    const tree = renderer.create(<Button small title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {large}', () => {
    const tree = renderer.create(<Button large title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {shadow}', () => {
    const tree = renderer.create(<Button shadow title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onPress}', () => {
    // @TODO: Test <Button /> {onPress}
  });

  it('when {style}', () => {
    const tree = renderer.create(<Button title="Press me" style={{ backgroundColor: 'rgba(0,255,0,0.25)' }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
