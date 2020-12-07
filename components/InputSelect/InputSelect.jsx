import { arrayOf, bool, func, number, oneOf, oneOfType, shape, string } from 'prop-types';
import React, { createRef, PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import { Picker, ScrollView, View } from 'react-native';

import { LAYOUT } from '../../common';
import { Icon } from '../Icon';
import { INPUT_HEIGHT } from '../Input/Input.style';
import { Touchable } from '../Touchable';
import styles from './InputSelect.style';
import Template from './InputSelectTemplate';
import { TEMPLATE_HEIGHT } from './InputSelectTemplate.style';

export class InputSelect extends PureComponent {
  static propTypes = {
    dataSource: arrayOf(oneOfType([string, shape({})])),
    disabled: bool,
    hint: string,
    ItemTemplate: func,
    onChange: func,
    size: oneOf(['S', 'M', 'L']),
    value: oneOfType([string, number]),
  };

  static defaultProps = {
    dataSource: [],
    disabled: false,
    hint: undefined,
    ItemTemplate: Template,
    onChange: undefined,
    size: 'M',
    value: 0,
  };

  constructor(props) {
    super(props);
    const { dataSource: [firstValue] = [] } = props;

    this.component = createRef();
    this.scrollview = createRef();
    this.state = { active: false, regular: true, schema: typeof firstValue === 'object' };
  }

  _onToggleDataSource = () => {
    const {
      component,
      scrollview,
      props: { dataSource, size, value = 0 },
      state: { active },
    } = this;
    const {
      VIEWPORT: { H },
    } = LAYOUT;
    const { y } = findDOMNode(component.current).getBoundingClientRect(); // eslint-disable-line

    this.setState({ active: !active, regular: y < H / 2 }, () => {
      if (!active) {
        const height = dataSource[0].caption ? TEMPLATE_HEIGHT : INPUT_HEIGHT[size];
        scrollview.current.scrollTo({ y: (value - 2) * height, animated: false });
      }
    });
  };

  _onItem = (index) => {
    const {
      _onToggleDataSource,
      props: { onChange },
    } = this;

    _onToggleDataSource();
    if (onChange) onChange(index);
  };

  render() {
    const {
      _onToggleDataSource,
      _onItem,
      props: { dataSource = [], disabled, onChange, ItemTemplate, size, value = 0, ...others },
      state: { active, regular, schema },
    } = this;
    // eslint-disable-next-line no-unused-vars
    const { valid, ...pickerProps } = others;
    const {
      VIEWPORT: { H },
    } = LAYOUT;
    const hasDataSource = dataSource.length > 1;
    const event = !disabled && hasDataSource ? _onToggleDataSource : undefined;

    return (
      <View ref={this.component} style={styles.container}>
        {!disabled && <Icon value="menu-down" style={styles.button} />}
        {schema ? (
          <>
            <Touchable onPress={event}>
              <ItemTemplate {...dataSource[value]} disabled={disabled} active style={styles.template} />
            </Touchable>
            <ScrollView
              ref={this.scrollview}
              style={[
                styles.dataSource,
                !active && styles.dataSourceHidden,
                !regular && styles.dataSourceBottom,
                { maxHeight: Math.floor(H / 2 / TEMPLATE_HEIGHT) * TEMPLATE_HEIGHT },
              ]}
            >
              {dataSource.map((item, index) => (
                <Touchable key={item.title} onPress={() => _onItem(index)}>
                  <ItemTemplate {...item} selected={index === value} style={styles.template} />
                </Touchable>
              ))}
            </ScrollView>
          </>
        ) : (
          <Picker
            mode="dropdown"
            {...pickerProps}
            enabled={!disabled}
            onValueChange={onChange}
            selectedValue={value}
            style={[styles.picker, styles[size]]}
          >
            {dataSource.map((item) => (
              <Picker.Item key={item} label={item} value={item} style={styles.pickerItem} />
            ))}
          </Picker>
        )}
      </View>
    );
  }
}
