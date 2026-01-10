import globals from 'globals'
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['build/', '.next/'] },

  // Configuration générale pour tous les fichiers TS/TSX
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      // Console - Erreur par défaut, mais autorisé dans scripts
      'no-console': 'error',

      // Variables inutilisées
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      // TypeScript - Types plus stricts
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-unused-expressions': 'error',

      // Code quality (règles JavaScript natives)
      'no-debugger': 'error',
      'no-alert': 'warn',
      'prefer-const': 'error',
    },
  },

  // Configuration spéciale pour les scripts de build
  {
    files: ['scripts/**/*.{ts,js}'],
    rules: {
      'no-console': 'off', // Autorisé dans les scripts
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Configuration pour les tests
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }
)
