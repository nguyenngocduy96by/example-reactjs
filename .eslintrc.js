module.exports = {
    root: true,
    globals: {
      jest: true,
    },
    extends: ['plugin:import/warnings', 'plugin:import/typescript', '@react-native-community'],
    rules: {
      semi: ['error', 'never'],
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/prefer-default-export': 'off',
      'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }],
    },
  }