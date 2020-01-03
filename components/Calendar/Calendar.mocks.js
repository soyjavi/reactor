const STYLE = { borderWidth: 1, borderColor: 'lightgrey', minWidth: 500 };
const STYLE_DAYNAMES = { subtitle: false, lighten: true };

const TODAY = new Date();
const YESTERDAY = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 1);
const TOMORROW = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 1);
const NEXT_MONTH = new Date(TODAY.getFullYear(), TODAY.getMonth() + 1);
const DATES = [
  new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 3),
  new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 4),
  new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 5),
];
const CAPTIONS = [
  { date: DATES[1], value: '$10' },
  { date: DATES[2], value: '$19' },
];

const LOCALE = {
  DAY_NAMES: ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do'],
  MONTHS: [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ],
};

export { CAPTIONS, DATES, LOCALE, NEXT_MONTH, STYLE, STYLE_DAYNAMES, TOMORROW, YESTERDAY };
