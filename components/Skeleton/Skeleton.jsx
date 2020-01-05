import { number } from 'prop-types';
import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Skeleton.style';

import Motion from '../Motion';
import { THEME } from '../../common';

const {
  MOTION: { DURATION },
} = THEME;

const Skeleton = ({ opacity, ...inherit }) => {
  const [interval, setInter] = useState(undefined);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setInter(
      setInterval(() => {
        if (visible) setVisible((value) => !value);
      }, DURATION * 3),
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={[styles.container, inherit.style]}>
      <Motion
        duration={DURATION * 3}
        style={styles.motion}
        timeline={[{ property: 'opacity', value: visible ? opacity : 0 }]}
      />
    </View>
  );
};

Skeleton.propTypes = {
  opacity: number,
};

Skeleton.defaultProps = {
  opacity: 0.5,
};

export default Skeleton;
