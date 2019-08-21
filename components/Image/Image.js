import { bool, number } from 'prop-types';
import React, { PureComponent } from 'react';
import { Image as ImageNative, View } from 'react-native';

import Skeleton from '../Skeleton';
import styles from './Image.style';
import resize from './modules/resize';

class Image extends PureComponent {
  static propTypes = {
    ratio: number,
    responsive: bool,
    width: number,
    height: number,
  };

  static defaultProps = {
    ratio: 1,
    responsive: false,
    width: null,
    height: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  _onLoad = (event) => {
    const { props: { ...inherit } } = this;

    this.setState({ ready: true });
    if (inherit.onLoad) inherit.onLoad(event);
  }

  render() {
    const {
      _onLoad,
      props: {
        ratio, responsive, width, height, ...inherit
      },
      state: { ready },
    } = this;
    let { source: { uri } = {} } = inherit;

    if (responsive && uri) {
      uri = resize({
        uri, ratio, width, height,
      });
    }

    return (
      <View style={[styles.container, inherit.styleContainer || inherit.style]}>
        <ImageNative
          {...inherit}
          source={uri ? { uri } : undefined}
          onLoad={_onLoad}
        />
        { !ready && <Skeleton style={styles.skeleton} /> }
      </View>
    );
  }
}

export default Image;
