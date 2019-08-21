import { number } from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import Motion from '../Motion';
import styles from './ProgressBar.style';

class ProgressBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { layoutWidth: 0 };
  }

  render() {
    const {
      props: { progress = 0, ...inherit },
      state: { layoutWidth = 0 },
    } = this;

    return (
      <View
        onLayout={({ nativeEvent: { layout = {} } }) => this.setState({ layoutWidth: layout.width })}
        style={[
          styles.container,
          inherit.style,
          inherit.trackColor && { backgroundColor: inherit.trackColor },
        ]}
      >
        <Motion
          duration={inherit.duration}
          style={[styles.progress, inherit.color && { backgroundColor: inherit.color }]}
          timeline={[{ property: 'width', value: progress * layoutWidth }]}
          type="timing"
        />
      </View>
    );
  }
}

ProgressBar.propTypes = {
  progress: number,
};

ProgressBar.defaultProps = {
  progress: undefined,
};

export default ProgressBar;
