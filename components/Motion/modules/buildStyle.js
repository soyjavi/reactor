import { ENV, THEME } from '../../../common';

const { IS_WEB } = ENV;
const { MOTION } = THEME;
const TRANSFORM_PROPERTIES = ['scale', 'translateX', 'translateY', 'rotate'];

export default ({
  props: { delay = 0, duration, useNativeDriver } = {},
  state: { timeline = [], ...state } = {},
} = {}) => {
  if (timeline.length === 0) return undefined;

  let style = {};

  timeline.forEach(({ value, property }) => {
    const newValue = useNativeDriver ? value : state[property];

    style = {
      ...style,
      ...(TRANSFORM_PROPERTIES.includes(property)
        ? { transform: [{ [property]: newValue }] }
        : { [property]: newValue }),
    };
  });

  if (useNativeDriver && IS_WEB) {
    style = {
      ...style,
      transitionDelay: `${delay}ms`,
      transitionDuration: `${duration}ms`,
      transitionProperty: Object.keys(style).join(', '),
      transitionTimingFunction: MOTION.EASE,
    };
  }

  return style;
};
