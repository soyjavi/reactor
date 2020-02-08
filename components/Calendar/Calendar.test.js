import React from 'react';
import renderer from 'react-test-renderer';

import { Calendar } from '..';
import { CAPTIONS, LOCALE, STYLE, STYLE_DAYNAMES, STYLE_EDGES } from './Calendar.mocks';

const TODAY = new Date(1980, 10, 4);
const YESTERDAY = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 1);
const TOMORROW = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 1);
const IN_7_DAYS = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 7);
const IN_10_DAYS = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 10);
const NEXT_MONTH = new Date(TODAY.getFullYear(), TODAY.getMonth() + 1);

jest.useFakeTimers();

describe('<Calendar>', () => {
  it('renders', () => {
    const tree = renderer.create(<Calendar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {box:false}', () => {
    const tree = renderer.create(<Calendar box={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {busy}', () => {
    const tree = renderer.create(<Calendar busy />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {date}', () => {
    const tree = renderer.create(<Calendar date={NEXT_MONTH} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {edges}', () => {
    const tree = renderer.create(<Calendar edges />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {expanded}', () => {
    const tree = renderer.create(<Calendar expanded />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {locale}', () => {
    const tree = renderer.create(<Calendar locale={LOCALE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<Calendar value={TOMORROW} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value} & {range}', () => {
    const tree = renderer.create(<Calendar range value={[YESTERDAY, TOMORROW]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {availableDates}', () => {
    const tree = renderer.create(<Calendar availableDates={[IN_7_DAYS, IN_10_DAYS]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabledDates}', () => {
    const tree = renderer.create(<Calendar disabledDates={[IN_7_DAYS, IN_10_DAYS]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabledPast}', () => {
    const tree = renderer.create(<Calendar disabledPast />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {captions}', () => {
    const tree = renderer.create(<Calendar captions={CAPTIONS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Calendar style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style:dayNames}', () => {
    const tree = renderer.create(<Calendar styleDayNames={STYLE_DAYNAMES} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
