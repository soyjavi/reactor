import { StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import { INPUT_HEIGHT } from '../Input/Input.style';

const { BORDER_RADIUS, COLOR, ELEVATION, SPACE } = THEME;

export default StyleSheet.create({
  active: {
    zIndex: 1,
  },

  border: {
    ...LAYOUT.STYLE.ROW,
    backgroundColor: COLOR.BACKGROUND_INPUT,
    borderColor: COLOR.BASE,
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    minHeight: INPUT_HEIGHT + 2,
    paddingHorizontal: SPACE.XXS,
    width: '100%',
  },

  calendar: {
    ...ELEVATION.REGULAR,
    paddingTop: SPACE.S,
    position: 'absolute',
    top: INPUT_HEIGHT,
    zIndex: 1,
  },

  container: {
    marginBottom: SPACE.REGULAR,
    maxWidth: '100%',
  },

  disabled: {
    backgroundColor: COLOR.DISABLED,
  },

  error: {
    borderColor: COLOR.ERROR,
  },

  focus: {
    borderColor: COLOR.PRIMARY,
  },

  icon: {
    marginHorizontal: SPACE.XXS,
  },

  iconNav: {
    height: SPACE.MEDIUM,
  },

  value: {
    flex: 1,
    paddingHorizontal: SPACE.XS,
  },

  withLabel: {
    marginTop: SPACE.REGULAR + SPACE.XS,
  },
});
