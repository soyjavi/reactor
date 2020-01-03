import { func } from 'prop-types';
import React, { useState } from 'react';
import { Image as ImageNative, View } from 'react-native';

import Skeleton from '../Skeleton';
import styles from './Image.style';

const Image = ({ onLoad, ...inherit }) => {
  const [ready, setReady] = useState(false);

  return (
    <View style={[styles.container, inherit.styleContainer || inherit.style]}>
      <ImageNative
        {...inherit}
        onLoad={(event) => {
          setReady(true);
          onLoad(event);
        }}
      />
      {!ready && <Skeleton style={styles.skeleton} />}
    </View>
  );
};

Image.propTypes = {
  onLoad: func,
};

Image.defaultProps = {
  onLoad() {},
};

export default Image;
