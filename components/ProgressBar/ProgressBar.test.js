import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import { ProgressBar } from '..';

const { SPACE } = THEME;

jest.useFakeTimers();

describe('<ProgressBar>', () => {
  it('renders', () => {
    const tree = renderer.create(<ProgressBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {progress}', () => {
    const tree = renderer.create(<ProgressBar progress={0.33} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<ProgressBar color={THEME.COLOR.ERROR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {trackColor}', () => {
    const tree = renderer.create(<ProgressBar trackColor={THEME.COLOR.ERROR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<ProgressBar style={{ borderRadius: SPACE.XS, height: SPACE.M }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
