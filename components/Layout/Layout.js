import { func, node } from 'prop-types';
import React, { createContext, PureComponent } from 'react';
import { View } from 'react-native';
import styles from './Layout.style';

import { ENV, LAYOUT } from '../../common';

const { IS_WEB, IS_SERVER, IS_MOBILE_WEB } = ENV;
const { Provider, Consumer: LayoutConsumer } = createContext('reactor:layout');

class LayoutView extends PureComponent {
  static propTypes = {
    children: node,
    onLayout: func,
  };

  static defaultProps = {
    children: undefined,
    onLayout() {},
  };

  constructor(props) {
    super(props);
    this.state = { key: `${LAYOUT.VIEWPORT.W}x${LAYOUT.VIEWPORT.H}` };
  }

  _onLayout = ({ nativeEvent: { layout = {} } }) => {
    const { props: { onLayout } } = this;

    setTimeout(() => {
      LAYOUT.calc();
      onLayout(LAYOUT.VIEWPORT);
      this.setState({ key: `${layout.width}x${layout.height}` });
    }, 40);
  }

  render() {
    const {
      _onLayout,
      props: { children, onLayout, ...inherit },
      state: { key },
    } = this;

    return (
      <Provider value={{ style: LAYOUT.STYLE, viewport: LAYOUT.VIEWPORT }}>
        <View
          {...inherit}
          key={key}
          onLayout={IS_WEB && !IS_SERVER && !IS_MOBILE_WEB ? _onLayout : undefined}
          style={[styles.container, inherit.style]}
        >
          {children}
        </View>
      </Provider>
    );
  }
}

export { LayoutConsumer };

export default LayoutView;
