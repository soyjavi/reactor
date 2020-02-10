import { THEME } from '../common';
import styles from './styler.styles';

const DOMAINS = [
  'alignSelf',
  'margin',
  'marginHorizontal',
  'marginVertical',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'padding',
  'paddingHorizontal',
  'paddingVertical',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
];

const TOP = 'Top';
const RIGHT = 'Right';
const BOTTOM = 'Bottom';
const LEFT = 'Left';
const CENTER = 'Center';
const SUFFIXES = { Horizontal: [RIGHT, LEFT], Vertical: [TOP, BOTTOM] };
const COORDS = [TOP, RIGHT, BOTTOM, LEFT];
const STYLER_PROPS = [...DOMAINS, 'style'];

export const ALIGNS = { LEFT, CENTER, RIGHT };
export const SPACES = {
  XS: 'XS',
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
  XXL: 'XXL',

  RESET: '0',
};

export const styler = (props = {}) => {
  const keys = [];

  DOMAINS.forEach((domain) => {
    const style = props[domain];

    if (Array.isArray(style)) {
      style.forEach((size, coord) => {
        if (size) keys.push(`${domain}${COORDS[coord]}${size.toUpperCase()}`);
      });
    } else if (style) {
      const styled = Object.keys(SUFFIXES).some((suffix) => {
        const [baseDomain, ...rest] = domain.split(suffix);
        const found = rest.length > 0;

        if (found) SUFFIXES[suffix].forEach((coord) => keys.push(`${baseDomain}${coord}${style}`));
        return found;
      });

      if (!styled) keys.push(`${domain}${style}`);
    }
  });

  return keys;
};

export const useStyler = ({ style, ...props } = {}) => [...styler(props).map((key) => styles[key]), style];

export const useBanStylerProps = (props) => {
  const safeProps = {};

  for (const prop in props) {
    if (!STYLER_PROPS.includes(prop)) safeProps[prop] = props[prop];
  }

  return safeProps;
};
