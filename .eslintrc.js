module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
  globals: {
    global: 'readonly',
    process: 'readonly',
    require: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'react-hooks', 'react-native'],
  rules: {
    'max-len': [1, 120, { tabWidth: 2, ignoreComments: true }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
  },
  overrides: [
    {
      files: '*.jsx',
      rules: {},
    },
  ],
  root: true,
  settings: {
    react: {
      version: require('./package.json').peerDependencies.react,
    },
  },
};
