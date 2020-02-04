import React from 'react';
import renderer from 'react-test-renderer';

import InputOption from './InputOption';

const style = {
  backgroundColor: 'rgba(0,255,0,0.25)',
  padding: 10,
};
const LABEL = 'Lorem Ipsum...';

jest.useFakeTimers();

describe('<InputOption>', () => {
  it('renders', () => {
    const tree = renderer.create(<InputOption />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('label', () => {
    const tree = renderer.create(<InputOption label={LABEL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('value', () => {
    const tree = renderer.create(<InputOption value />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('rounded (false)', () => {
    const tree = renderer.create(<InputOption rounded={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('othersy:style', () => {
    const tree = renderer.create(<InputOption style={style} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('onChange', () => {
    // @TODO: Test <InputOption /> {onChange}
  });
});
