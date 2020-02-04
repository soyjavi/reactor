import { Platform, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { INPUT_HEIGHT } from '../Input/Input.style';
import { TEMPLATE_HEIGHT } from './InputSelectTemplate.style';

const { COLOR, ELEVATION, FONT, UNIT, SPACE } = THEME;

export default StyleSheet.create({
  active: {
    zIndex: 1,
  },

  content: {},

  button: {
    position: 'absolute',
    top: TEMPLATE_HEIGHT / 2 - SPACE.XS,
    right: SPACE.XS,
    zIndex: 1,
  },

  container: {
    maxWidth: '100%',
  },

  dataSource: {
    ...ELEVATION.M,
    position: 'absolute',
    backgroundColor: COLOR.BACKGROUND_INPUT,
  },

  dataSourceBottom: {
    bottom: 0,
  },

  dataSourceHidden: {
    display: 'none',
  },

  disabled: {
    backgroundColor: COLOR.DISABLED,
  },

  error: {
    borderColor: COLOR.ERROR,
  },

  picker: {
    // backgroundColor: COLOR.TRANSPARENT,
    borderWidth: 0,
    height: INPUT_HEIGHT,
    marginLeft: SPACE.XS,
    marginRight: SPACE.XS,
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

  pickerDisabled: Platform.select({
    web: {
      color: COLOR.TEXT_LIGHTEN,
    },
    android: {
      color: COLOR.TEXT_LIGHTEN,
    },
  }),

  pickerItem: {
    ...FONT.DEFAULT,
    ...FONT.INPUT,
    fontSize: UNIT * 1.6,
  },

  template: {
    ...LAYOUT.STYLE.ROW,
    paddingLeft: SPACE.XS,
    paddingRight: UNIT * 4.4,
    height: TEMPLATE_HEIGHT,
  },
});
