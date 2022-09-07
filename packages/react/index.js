module.exports = {
  extends: [
    'plugin:react/recommended',
    '@pity/eslint-config-ts',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/react-in-jsx-scope': 'off',
    'react/prefer-read-only-props': 'error',
    'react/sort-comp': 'error',
  },
}
