import { Platform, StyleSheet } from 'react-native';

import { useEnvironment } from '../../hooks';

const { IS_TEST } = useEnvironment();

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    ...Platform.select({
      web: {
        height: !IS_TEST ? window.innerHeight : undefined,
        width: '100vw',
      },
    }),
  },
});
