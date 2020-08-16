import { arrayOf, bool, func, oneOfType, shape } from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { useEnvironment } from '../../hooks';
import { Row } from '../Row';
import styles from './Calendar.style';
import { DayNames, Selector, Week } from './components';
import { decomposeDate, firstDateOfWeek, LOCALE, nextMonth, previousMonth } from './modules';

const VISIBLE_WEEKS = Array.from(Array(6).keys());

export class Calendar extends PureComponent {
  static propTypes = {
    availableDates: arrayOf(shape()),
    box: bool,
    captions: arrayOf(shape()),
    date: shape(),
    disabledDates: arrayOf(shape()),
    disabledPast: bool,
    edges: bool,
    expanded: bool,
    locale: shape(),
    onChange: func,
    onSelect: func,
    range: bool,
    value: oneOfType([shape(), arrayOf(shape())]),
  };

  static defaultProps = {
    availableDates: undefined,
    box: true,
    date: undefined,
    captions: undefined,
    disabledDates: undefined,
    disabledPast: false,
    edges: false,
    expanded: false,
    locale: LOCALE,
    onChange() {},
    onSelect() {},
    range: false,
    value: undefined,
  };

  constructor(props) {
    super(props);
    const { value, date } = props;
    const { IS_TEST } = useEnvironment();

    const today = !IS_TEST ? new Date() : new Date(1980, 3, 10);
    today.setHours(0, 0, 0, 0);

    this.state = {
      today,
      ...decomposeDate(value || date || today),
    };
  }

  UNSAFE_componentWillReceiveProps({ date, value }) {
    const { props } = this;
    if ((value && value !== props.value) || (date && date !== props.date)) {
      this.setState({ ...decomposeDate(value || date) });
    }
  }

  _onChange = ({ month, year }) => {
    const {
      props: { onChange },
    } = this;

    onChange(month, year);
    this.setState({ month, year });
  };

  Instance = ({ next, onNext, onPrevious }) => {
    const {
      _onChange,
      props: {
        locale: { DAY_NAMES, MONTHS },
        onSelect,
        ...props
      },
      state,
    } = this;
    const date = new Date(state.year, state.month + (next ? 1 : 0));
    const week = Math.ceil((date - new Date(date.getFullYear(), 0, 1)) / 8.64e7 / 7);

    return (
      <View style={styles.instance}>
        <Selector
          onNext={onNext ? () => _onChange(nextMonth(date)) : undefined}
          onPrevious={onPrevious ? () => _onChange(previousMonth(date)) : undefined}
          title={`${MONTHS[date.getMonth()]} ${date.getFullYear()}`}
        />
        <View style={[styles.days]}>
          <DayNames {...props} locale={DAY_NAMES} style={styles.days} />
          {VISIBLE_WEEKS.map((weekIndex) => (
            <Week
              key={week + weekIndex}
              {...props}
              {...state}
              month={date.getMonth()}
              firstDate={firstDateOfWeek(week + weekIndex, date.getFullYear())}
              onSelect={onSelect}
            />
          ))}
        </View>
      </View>
    );
  };

  render() {
    const {
      Instance,
      props: { disabledPast, expanded, ...others },
      state: { month, year, today },
    } = this;
    const disabledPrevious = disabledPast && today.getFullYear() === year && today.getMonth() === month;

    return (
      <View style={[styles.container, others.style]}>
        <Row>
          <Instance onNext={!expanded} onPrevious={!disabledPrevious} />
          {expanded && <Instance next onNext />}
        </Row>
      </View>
    );
  }
}
