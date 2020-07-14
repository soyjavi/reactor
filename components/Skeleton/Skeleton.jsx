import { number } from 'prop-types';
import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Skeleton.style';

import { Motion } from '../Motion';
import { THEME } from '../../common';

const { MOTION } = THEME;

export const Skeleton = ({ opacity = 0.5, ...others }) => {
  const [visible, setVisible] = useState(false);
  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      setVisible((value) => !value);
    }, MOTION.EXPAND * 2);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={[styles.container, others.style]}>
      <Motion
        duration={MOTION.EXPAND * 2}
        style={styles.motion}
        timeline={[{ property: 'opacity', value: visible ? opacity : 0 }]}
        type="timing"
      />
    </View>
  );
};

Skeleton.propTypes = {
  opacity: number,
};
