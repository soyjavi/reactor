import { func, node } from 'prop-types';
import React, { useState, createContext } from 'react';
import { View } from 'react-native';

import { LAYOUT } from '../../common';
import { useBanStylerProps, useEnvironment, useStyler } from '../../hooks';
import styles from './Layout.style';

const { Provider, Consumer: LayoutConsumer } = createContext('reactor:layout');

const LayoutView = ({ children, onResize, ...others }) => {
  const { IS_WEB, IS_MOBILE_WEB } = useEnvironment();

  const [key, setKey] = useState(`${LAYOUT.VIEWPORT.W}x${LAYOUT.VIEWPORT.H}`);

  const handleLayout = ({ nativeEvent: { layout = {} } }) => {
    setTimeout(() => {
      LAYOUT.calc();
      if (onResize) onResize(LAYOUT.VIEWPORT);
      setKey(`${layout.width}x${layout.height}`);
    }, 40);
  };

  return (
    <Provider value={{ style: {}, viewport: LAYOUT.VIEWPORT }}>
      <View
        {...useBanStylerProps(others)}
        key={key}
        onLayout={IS_WEB && !IS_MOBILE_WEB ? handleLayout : undefined}
        style={[styles.container, ...useStyler(others)]}
      >
        {children}
      </View>
    </Provider>
  );
};

LayoutView.propTypes = {
  children: node,
  onResize: func,
};

export { LayoutConsumer, LayoutView };
