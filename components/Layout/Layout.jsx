import { func, node } from 'prop-types';
import React, { useState, createContext } from 'react';
import { View } from 'react-native';
import styles from './Layout.style';

import { ENV, LAYOUT } from '../../common';

const { IS_WEB, IS_SERVER, IS_MOBILE_WEB } = ENV;
const { Provider, Consumer: LayoutConsumer } = createContext('reactor:layout');

const LayoutView = ({ children, onLayout, ...inherit }) => {
  const [key, setKey] = useState(`${LAYOUT.VIEWPORT.W}x${LAYOUT.VIEWPORT.H}`);

  const handleLayout = ({ nativeEvent: { layout = {} } }) => {
    setTimeout(() => {
      LAYOUT.calc();
      onLayout(LAYOUT.VIEWPORT);
      setKey(`${layout.width}x${layout.height}`);
    }, 40);
  };

  return (
    <Provider value={{ style: LAYOUT.STYLE, viewport: LAYOUT.VIEWPORT }}>
      <View
        {...inherit}
        key={key}
        onLayout={IS_WEB && !IS_SERVER && !IS_MOBILE_WEB ? handleLayout : undefined}
        style={[styles.container, inherit.style]}
      >
        {children}
      </View>
    </Provider>
  );
};

LayoutView.propTypes = {
  children: node,
  onLayout: func,
};

LayoutView.defaultProps = {
  children: undefined,
  onLayout() {},
};

export { LayoutConsumer };

export default LayoutView;
