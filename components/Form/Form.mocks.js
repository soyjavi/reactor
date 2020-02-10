import { DATASOURCE, DATASOURCE_STRING } from '../InputSelect/InputSelect.mocks';

const ATTRIBUTES = {
  username: {
    disabled: true,
    required: true,
    defaultValue: 'soyjavi',
    marginBottom: 'XL',
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
    inline: true,
  },
  phoneCountryCode: {
    countryCode: true,
    keyboard: 'phone-pad',
    placeholder: '+00 000 000 000',
    hint: 'Using property countryCode',
    inline: true,
  },
  phone: {
    keyboard: 'phone-pad',
    placeholder: '000 000 000',
    disabled: true,
    inline: true,
  },

  bio: { lines: 4 },
  currency: {
    icon: 'money',
    iconFamily: 'FontAwesome',
    required: true,
    currency: '$',
    inline: true,
  },
  role: {
    // required: true,
    type: 'select',
    defaultValue: DATASOURCE_STRING[2],
    dataSource: DATASOURCE_STRING,
    inline: true,
  },
  roleAdvanced: {
    // required: true,
    type: 'select',
    defaultValue: 2,
    dataSource: DATASOURCE,
    inline: true,
  },
  twitter: { icon: 'twitter', iconFamily: 'Feather', inline: true },
  isPublic: { type: 'bool', inline: true },
  isPrivate: { type: 'bool', inline: true },

  isOption1: { type: 'option', label: 'Option' },
  isOption2: { type: 'option', label: 'Option 2' },
  isOption3: { type: 'option', label: 'Option 3' },
  isOptionRounded: { type: 'option', rounded: false, label: 'Checkbox' },

  // social: {
  //   title: 'Social Networks',
  //   attributes: {
  //     twitter: { icon: 'twitter', inline: true },
  //     facebook: { icon: 'facebook', inline: true },
  //     github: { inline: true, required: true, requiredIcon: true },
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
