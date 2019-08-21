import { number } from 'prop-types';
import { View } from 'react-native';
import React, { Component } from 'react';
import styles from './Skeleton.style';

import Motion from '../Motion';
import { THEME } from '../../common';

const { MOTION: { DURATION } } = THEME;

export default class Skeleton extends Component {
  static propTypes = {
    opacity: number,
  };

  static defaultProps = {
    opacity: 0.5,
  };

  interval = undefined;

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { state: { visible } } = this;
      this.setState({ visible: !visible });
    }, DURATION * 3);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { props: { opacity, ...inherit }, state: { visible } } = this;

    return (
      <View style={[styles.container, inherit.style]}>
        <Motion
          duration={DURATION * 3}
          style={styles.motion}
          timeline={[{ property: 'opacity', value: visible ? opacity : 0 }]}
        />
      </View>
    );
  }
}
