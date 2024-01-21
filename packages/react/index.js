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
    'react/jsx-boolean-value': 2,
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [1, {
      maximum: 5,
    }],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-pascal-case': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/self-closing-comp': 0,
    'no-unused-vars': 0,
  },
}
