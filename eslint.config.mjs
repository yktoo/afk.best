import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import pluginMocha from 'eslint-plugin-mocha';
import pluginNoOnlyTests from 'eslint-plugin-no-only-tests';

export default tseslint.config(
    // Frontend Typescript
    {
        files: ['src/**/*.ts'],
        ignores: [
            'src/app/api/**',
            'src/coverage/**',
        ],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
        ],
        processor: angular.processInlineTemplates,
        plugins: {
            pluginMocha,
            'no-only-tests': pluginNoOnlyTests,
        },
        rules: {
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'off',
            'brace-style': 'error',
            curly: ['error', 'all'],
            quotes: ['error', 'single'],
            'no-only-tests/no-only-tests': ['error', {functions: ['fdescribe', 'xdescribe', 'fit', 'xit']}],
            semi: ['error', 'always'],
        },
    },

    // Frontend HTML templates
    {
        files: ['src/app/**/*.html'],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
        ],
        rules: {
            '@angular-eslint/template/elements-content': 'off',
        },
    },
);
