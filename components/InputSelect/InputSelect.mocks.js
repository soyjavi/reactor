import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import styles from './InputSelectTemplate.style';

const DATASOURCE = [
  { title: 'one', caption: 'Example of caption' },
  { title: 'two', caption: 'Example of caption' },
  { title: 'three', caption: 'Example of caption' },
  { title: 'four', caption: 'Example of caption' },
  { title: 'five', caption: 'Example of caption' },
  { title: 'six', caption: 'Example of caption' },
  { title: 'seven', caption: 'Example of caption' },
  { title: 'eight', caption: 'Example of caption' },
  { title: 'nine', caption: 'Example of caption' },
  { title: 'ten', caption: 'Example of caption' },
];

const DATASOURCE_STRING = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

const ERROR = 'Something happened...';

const HINT = 'Optional field';

const LABEL = 'Username';

const STYLE = {
  backgroundColor: 'rgba(0,255,0,0.25)',
  paddingBottom: 32,
  marginRight: 16,
  width: 256,
};

const TEMPLATE = ({
  caption, disabled, selected, title, ...inherit // eslint-disable-line
}) => (
  <View style={[inherit.style, selected && { backgroundColor: '#eee' }]}>
    <View>
      <Text headline lighten={disabled} style={styles.title}>
        {title}
      </Text>
      {caption && (
        <Text caption lighten>
          {caption}
        </Text>
      )}
    </View>
  </View>
);

export { DATASOURCE, DATASOURCE_STRING, ERROR, HINT, LABEL, STYLE, TEMPLATE };
