import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import { Button, Price } from '..';

jest.useFakeTimers();

describe('<Button>', () => {
  it('renders', () => {
    const snapshot = renderer.create(<Button />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('when {title}', () => {
    const snapshot = renderer.create(<Button title="Press me" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('when {activity}', () => {
    const snapshot = renderer.create(<Button activity title="Press me" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('when {borderRadius}', () => {
    const snapshot = renderer.create(<Button borderRadius={10} title="Press me" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('when {children}', () => {
    const snapshot = renderer
      .create(
        <Button>
          <Price headline color="white" value={19.95} symbol="$" />
        </Button>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('when {color}', () => {
    const snapshot = renderer.create(<Button color={THEME.COLOR.BLACK} title="Press me" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const snapshot = renderer.create(<Button disabled title="Press me" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('when {icon}', () => {
    const snapshot = renderer.create(<Button icon="close" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('when {icon} & {title}', () => {
    const snapshot = renderer.create(<Button icon="close" title="Press me" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('when {onPress}', () => {
    // @TODO: Test <Button /> {onPress}
  });

  it('when {outlined}', () => {
    const snapshot = renderer.create(<Button outlined title="Press me" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('when {size}', () => {
    const snapshot = renderer.create(<Button size="S" title="Press me" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('when {wide}', () => {
    const snapshot = renderer.create(<Button wide title="Press me" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('when {style}', () => {
    const snapshot = renderer
      .create(<Button title="Press me" style={{ backgroundColor: 'rgba(0,255,0,0.25)' }} />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('hook:styler', () => {
    const snapshot = renderer.create(<Button title="Press me" marginBottom="M" />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
