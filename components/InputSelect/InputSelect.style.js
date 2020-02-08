import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { INPUT_HEIGHT } from '../Input/Input.style';
import { TEMPLATE_HEIGHT } from './InputSelectTemplate.style';

const { COLOR, ELEVATION, FONT, UNIT } = THEME;

export default StyleSheet.create({
  S: {
    height: INPUT_HEIGHT.S,
  },
  M: {
    height: INPUT_HEIGHT.M,
  },
  L: {
    height: INPUT_HEIGHT.L,
  },

  button: {
    position: 'absolute',
    right: 0,
    top: '33%',
  },

  container: {
    width: '100%',
  },

  dataSource: {
    ...ELEVATION,
    position: 'absolute',
    backgroundColor: COLOR.BACKGROUND,
    width: '100%',
  },

  dataSourceBottom: {
    bottom: 0,
  },

  dataSourceHidden: {
    display: 'none',
  },

  picker: {
    backgroundColor: COLOR.TRANSPARENT,
    borderWidth: 0,
    marginHorizontal: 0,
    ...Platform.select({
      web: {
        color: COLOR.TEXT,
      },
      android: {
        color: COLOR.TEXT,
      },
      ios: {
        height: 'auto',
      },
    }),
  },

  pickerItem: {
    ...FONT.DEFAULT,
    ...FONT.INPUT,
    fontSize: UNIT * 1.6,
    marginHorizontal: 0,
  },

  template: {
    ...LAYOUT.STYLE.ROW,
    height: TEMPLATE_HEIGHT,
  },
});
