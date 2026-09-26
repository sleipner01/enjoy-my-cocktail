import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { importX } from 'eslint-plugin-import-x';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { reactRefresh } from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import { configs as tseslintConfigs } from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist', 'coverage']),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslintConfigs.recommended,
      reactHooks.configs.flat['recommended-latest'],
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript,
      prettierConfig,
    ],
    plugins: {
      'react-refresh': reactRefresh.plugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      prettier,
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.vitest },
    },
    settings: {
      react: { version: '19.3' },
      'import-x/resolver-next': [createTypeScriptImportResolver()],
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import-x/no-unresolved': 'error',
      'unused-imports/no-unused-imports': 'error',
      'prettier/prettier': 'error',
    },
  },
]);
