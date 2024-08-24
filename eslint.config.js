import globals from 'globals'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import tsEslintParser from '@typescript-eslint/parser'
import vitest from '@vitest/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import noRelativeParentImportPaths from 'eslint-plugin-no-relative-import-paths'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'coverage'] },
  eslintConfigPrettier,
  stylistic.configs['recommended-flat'],
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsEslintParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'no-relative-import-paths': noRelativeParentImportPaths,
      '@stylistic': stylistic,
      vitest,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...vitest.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-relative-import-paths/no-relative-import-paths': [
        'warn',
        { allowSameFolder: false },
      ],
      '@stylistic/arrow-parens': ['warn', 'always'],
      '@stylistic/brace-style': ['warn', '1tbs'],
      '@stylistic/template-curly-spacing': ['warn', 'never'],
      '@stylistic/jsx-newline': ['error', { prevent: true }],
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/jsx-sort-props': ['warn', { callbacksLast: true }],
      '@stylistic/array-bracket-newline': ['warn', { multiline: true }],
      '@stylistic/array-element-newline': [
        'warn',
        { consistent: true, multiline: true },
      ],
      '@stylistic/object-curly-newline': [
        'warn',
        { multiline: true, consistent: true },
      ],
      '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
      '@stylistic/function-paren-newline': ['warn', 'consistent'],
      '@typescript-eslint/no-unused-vars': 'error',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },
  },
)
