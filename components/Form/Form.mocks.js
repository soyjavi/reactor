import { DATASOURCE, DATASOURCE_STRING } from '../InputSelect/InputSelect.mocks';

const ATTRIBUTES = {
  username: {
    disabled: true,
    required: true,
    defaultValue: 'soyjavi',
  },
  password: {
    required: true,
    defaultValue: 'soyjavi',
  },
  mail: {
    keyboard: 'email-address',
    placeholder: 'Your email...',
    required: true,
    requiredIcon: true,
    hint: 'we will not send you spam.',
    inline: 3,
  },
  phone: {
    keyboard: 'phone-pad',
    placeholder: '000 000 000',
    inline: 3,
  },
  phoneCountryCode: {
    countryCode: true,
    keyboard: 'phone-pad',
    placeholder: '+00 000 000 000',
    hint: 'Using property countryCode',
    inline: 3,
  },
  bio: { lines: 4 },
  currency: {
    required: true,
    currency: '$',
    inline: 3,
  },
  role: {
    // required: true,
    type: 'select',
    defaultValue: DATASOURCE_STRING[2],
    dataSource: DATASOURCE_STRING,
    inline: 3,
  },
  roleAdvanced: {
    // required: true,
    type: 'select',
    defaultValue: 2,
    dataSource: DATASOURCE,
    inline: 3,
  },

  date: {
    type: 'date',
    inline: 2,
  },
  dateRange: {
    range: true,
    type: 'date',
    inline: 2,
  },
  avatar: { type: 'image', defaultValue: 'http://soyjavi.com/assets/images/soyjavi.jpg' },
  twitter: { icon: 'twitter', inline: 3 },
  isPublic: { type: 'bool', inline: 3 },
  isPrivate: { type: 'bool', inline: 3 },

  isOption1: { type: 'option', label: 'Option' },
  isOption2: { type: 'option', label: 'Option 2' },
  isOption3: { type: 'option', label: 'Option 3' },
  isOptionRounded: { type: 'option', rounded: false, label: 'Checkbox' },

  // social: {
  //   title: 'Social Networks',
  //   attributes: {
  //     twitter: { icon: 'twitter', inline: 3 },
  //     facebook: { icon: 'facebook', inline: 3 },
  //     github: { inline: 3, required: true, requiredIcon: true },
  //   },
  // },
  languages: { type: 'list' },
  terms: { type: 'option', label: 'ACCEPT, terms & conditions', rounded: false },
};

const VALUE = {
  username: 'soyjavi',
  isPublic: true,
  social: {
    twitter: 'soyjavi',
    facebook: '😅',
  },
  languages: ['JavaScript', 'CoffeeScript', 'C++'],
};

const STYLE = {
  backgroundColor: 'rgba(255,255,255,1)',
  padding: 20,
};

export { ATTRIBUTES, VALUE, STYLE };
