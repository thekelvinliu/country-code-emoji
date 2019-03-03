module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['jsdoc'],
  rules: {
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/require-hyphen-before-param-description': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/require-returns': 'error',
    'jsdoc/valid-types': 'error',
  },
};
