import { LOCALE } from '../../Calendar/modules';

const format = (date, { MONTHS = [] }) =>
  `${date.getDate()} ${MONTHS[date.getMonth()].substring(0, 3)}. ${date.getFullYear()}`;

export default (date, locale = LOCALE) => {
  let value;

  if (date) {
    value = Array.isArray(date)
      ? `${format(new Date(date[0]), locale)} - ${format(new Date(date[1]), locale)}`
      : format(new Date(date), locale);
  }

  return value;
};
