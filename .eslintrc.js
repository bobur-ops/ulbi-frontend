module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx']
      }
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': 0,
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 110
      }
    ],
    'react/jsx-wrap-multilines': 0,
    'object-curly-newline': 'off'
  },
  globals: {
    __IS_DEV__: true
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts, tsx}'],
      rules: {
        //     'i18next/no-literal-string': 'off'
      }
    }
  ]
};
