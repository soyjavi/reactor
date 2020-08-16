module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  globals: {
    global: 'readonly',
    process: 'readonly',
    require: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['import', 'prettier', 'react', 'react-hooks', 'react-native'],
  rules: {
    // react
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'warn',

    // sorting
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          // {
          //   pattern: '{react,react-native,react-native-*}',
          //   group: 'external',
          //   position: 'before',
          // },
          {
            pattern: '@**',
            group: 'external',
            position: 'after',
          },
        ],
        // pathGroupsExcludedImportTypes: ['react', 'react-native', 'react-native-*'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // 'max-len': [1, 120, { tabWidth: 2, ignoreComments: true }],
    // 'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
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
  // overrides: [
  //   {
  //     files: '*.jsx',
  //     rules: {},
  //   },
  // ],
  // root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  // settings: {
  //   react: {
  //     version: require('./package.json').peerDependencies.react,
  //   },
  // },
};
