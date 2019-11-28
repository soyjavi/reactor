import {
  arrayOf, bool, func, oneOfType, shape, string,
} from 'prop-types';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { LAYOUT } from '../../common';
import Calendar from '../Calendar';
import { LOCALE } from '../Calendar/modules';
import Icon from '../Icon';
import { InputHint, InputLabel } from '../Input';
import Motion from '../Motion';
import Text from '../Text';
import Touchable from '../Touchable';
import styles from './InputDate.style';
import verboseValue from './modules/verboseValue';

const InputDate = ({
  disabled, error, hint, label, locale, onChange, placeholder, range, value, ...inherit
}) => {
  const [active, setActive] = useState(false);
  const [calendar, setCalendar] = useState(value);

  const onToggle = () => setActive((currentValue) => !currentValue);

  const onSelect = (nextValue) => {
    setCalendar(nextValue);
    if (!range || (nextValue[0] && nextValue[1])) onChange(nextValue);
    if (!range) onToggle();
  };

  const { VIEWPORT: { REGULAR, LARGE } } = LAYOUT;

  return (
    <View style={[styles.container, active && styles.active, inherit.style]}>
      { label && <InputLabel>{label}</InputLabel> }

      <Touchable onPress={!disabled ? onToggle : undefined}>
        <View
          style={[
            styles.border,
            disabled && styles.disabled,
            !disabled && error && styles.error,
            active && styles.focus,
          ]}
        >
          <Text input lighten={disabled || !value} numberOfLines={1} style={styles.value}>
            {verboseValue(value, locale) || placeholder}
          </Text>

          { !disabled && !error && (
            <Motion timeline={[{ property: 'rotate', value: active ? '180deg' : '0deg' }]}>
              <Icon value="navDown" style={[styles.icon, styles.iconNav]} />
            </Motion>
          )}

          { !disabled && error && <Icon value="error" style={styles.icon} /> }
        </View>
      </Touchable>

      { hint && <InputHint>{hint}</InputHint> }

      { active && (
        <Calendar
          box={false}
          disabledPast={inherit.disabledPast}
          edges={inherit.edges}
          expanded={REGULAR || LARGE}
          locale={locale}
          range={range}
          onSelect={onSelect}
          style={[styles.calendar, label && styles.withLabel]}
          value={calendar}
        />
      )}
    </View>
  );
};

InputDate.propTypes = {
  disabled: bool,
  error: oneOfType([bool, string]),
  hint: string,
  label: string,
  locale: shape(),
  onChange: func,
  placeholder: string,
  range: bool,
  value: oneOfType([shape(), arrayOf(shape())]),
};

InputDate.defaultProps = {
  disabled: false,
  error: undefined,
  hint: undefined,
  label: undefined,
  locale: LOCALE,
  onChange() {},
  placeholder: undefined,
  range: false,
  value: undefined,
};

export default InputDate;
