/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['@inthepocket/eslint-config-next'],
  overrides: [
    {
      files: ['*.mdx'],
      extends: 'plugin:mdx/recommended',
    },
  ],
};
