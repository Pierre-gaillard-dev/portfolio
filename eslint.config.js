import globals from 'globals'
import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
  {
    ignores: [
      '**/dist/',
      '**/.astro/',
      'api/',
      // Reliquats Next.js
      'build/',
      '.next/',
      'next-env.d.ts',
    ],
  },

  // Configuration générale pour tous les fichiers JS/TS
  js.configs.recommended,
  tseslint.configs.recommended,

  // Fichiers .astro (frontmatter TS + scripts client)
  astro.configs.recommended,

  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // Console - Erreur par défaut, mais autorisé dans scripts
      'no-console': 'off',

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
      '@typescript-eslint/consistent-type-imports': 'error',

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
    files: ['**/*.test.ts', '**/*.spec.ts'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }
)
