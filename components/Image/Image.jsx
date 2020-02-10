import { func } from 'prop-types';
import React, { useState } from 'react';
import { Image as ImageNative, View } from 'react-native';

import { useStyler } from '../../hooks';
import { Skeleton } from '..';
import styles from './Image.style';

export const Image = ({ onLoad, ...others }) => {
  const [ready, setReady] = useState(false);

  return (
    <View style={[styles.container, ...useStyler(others)]}>
      <ImageNative
        {...others}
        onLoad={(event) => {
          setReady(true);
          if (onLoad) onLoad(event);
        }}
      />
      {!ready && <Skeleton style={[others.style, styles.skeleton]} />}
    </View>
  );
};

Image.propTypes = {
  onLoad: func,
};
