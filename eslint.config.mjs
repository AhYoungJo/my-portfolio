import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'next-env.d.ts',
      '*.config.js',
      '*.config.mjs',
    ],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-var': 'error',
      'no-undef': 'error',

      'react/prop-types': 'off', 
      'react/react-in-jsx-scope': 'off', 
      'react/display-name': 'off',

      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/prefer-as-const': 'error',

      '@next/next/no-img-element': 'warn',
      '@next/next/no-html-link-for-pages': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];

export default eslintConfig;
