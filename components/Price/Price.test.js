import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import { Price } from '..';
import MOCKS from './Price.mocks';

jest.useFakeTimers();

describe('<Price>', () => {
  it('renders', () => {
    const tree = renderer.create(<Price />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<Price value={MOCKS.VALUE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {currency}', () => {
    const tree = renderer.create(<Price value={MOCKS.VALUE} currency={MOCKS.CURRENCY} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {locale} (es-ES)', () => {
    const tree = renderer.create(<Price value={MOCKS.VALUE} locale={MOCKS.LOCALE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {fixed} (4)', () => {
    const tree = renderer.create(<Price value={MOCKS.VALUE} fixed={MOCKS.FIXED} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {fixed} (0)', () => {
    const tree = renderer.create(<Price value={MOCKS.VALUE} fixed={MOCKS.FIXED_NULL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {operator}', () => {
    const tree = renderer.create(<Price value={MOCKS.VALUE} operator={MOCKS.OPERATOR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {symbol} (left)', () => {
    const tree = renderer.create(<Price value={MOCKS.VALUE} symbol={MOCKS.SYMBOL_$} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {symbol} (right)', () => {
    const tree = renderer.create(<Price value={MOCKS.VALUE} symbol={MOCKS.SYMBOL_EUR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('inject <Text> properties', () => {
    const tree = renderer.create(<Price value={MOCKS.VALUE} {...MOCKS.TEXT_PROPS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Price value={MOCKS.VALUE} style={MOCKS.STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
