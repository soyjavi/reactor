import { StyleSheet } from 'react-native';

import { THEME } from '../../common';

const { BORDER_RADIUS, COLOR, ELEVATION, UNIT, SPACE } = THEME;

export default StyleSheet.create({
  bar: {
    backgroundColor: COLOR.LIGHTEN,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    maxHeight: '100%',
    minHeight: UNIT,
    width: '90%',
  },

  barEmpty: {
    opacity: 0.66,
  },

  barInverted: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },

  captions: {
    height: SPACE.M,
  },

  column: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },

  columnInverted: {
    justifyContent: 'flex-start',
  },

  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },

  containerInverted: {
    marginTop: -1,
  },

  content: {
    alignItems: 'flex-end',
    flex: 1,
    height: '100%',
  },

  legend: {
    fontSize: UNIT,
    height: UNIT,
    lineHeight: UNIT,
  },

  line: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    top: 0,
    width: '100%',
    zIndex: 1,
  },

  lineCaption: {
    ...ELEVATION,
    alignSelf: 'flex-start',
    borderRadius: SPACE.S,
    color: COLOR.WHITE,
    height: UNIT + SPACE.XS * 2,
    marginTop: -(UNIT + SPACE.XS * 2) / 2,
    marginLeft: UNIT / 2,
    paddingVertical: SPACE.XS,
    paddingHorizontal: SPACE.XS,
    zIndex: 1,
  },

  rowScale: {
    marginLeft: SPACE.XL,
  },

  scales: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  scaleCaptions: {
    bottom: SPACE.M,
  },

  scaleLines: {
    flex: 1,
    justifyContent: 'space-between',
  },

  scaleLine: {
    minHeight: 1,
    height: 1,
    width: '100%',
    backgroundColor: COLOR.LIGHTEN,
  },

  scaleValues: {
    position: 'absolute',
    bottom: -(UNIT + UNIT / 2),
    top: UNIT / 2,
    left: UNIT / 2,
    justifyContent: 'space-between',
    zIndex: 1,
  },

  scaleValuesInverted: {
    flexDirection: 'column-reverse',
  },
});
