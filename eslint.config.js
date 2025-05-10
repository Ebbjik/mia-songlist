import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';
const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

export default ts.config(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    ignores: ["eslint.config.js", "svelte.config.js"],
    rules: {
      'svelte/indent': ['error', {
        indent: 4,
        indentScript: true,
        switchCase: 1,
        alignAttributesVertically: true
      }],
      'svelte/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always'
      }],
      'svelte/html-indent': ['error', {
        indent: 4,
        alignAttributesVertically: true
      }],
      'svelte/html-quotes': ['error', {
        prefer: 'double',
        allow: 'single'
      }],
      'svelte/mustache-spacing': ['error', {
        textExpressions: { spaces: true },
        directives: { spaces: true }
      }],
      'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
      'svelte/valid-compile': 'error',
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }]
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: ts.parser,
        svelteConfig
      }
    }
  }
);

