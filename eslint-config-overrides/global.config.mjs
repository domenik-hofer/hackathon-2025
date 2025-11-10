import importPlugin from 'eslint-plugin-import';
import nodePlugin from 'eslint-plugin-node';
import prettier from 'eslint-plugin-prettier';
import reactEslintPlugin from 'eslint-plugin-react';
import reactHooksEslintPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

const tsFiles = ['./src/**/*.{ts,tsx}', 'vite.config.ts'];
const jsFiles = ['./eslint-config-overrides/**/*.mjs', 'eslint.config.mjs'];

const globalConfig = {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            ...globals.es2021,
            ...globals.jest,
        },
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            node: true,
        },
    },
    files: [...tsFiles, ...jsFiles],
    plugins: {
        'simple-import-sort': simpleImportSort,
        prettier,
        react: reactEslintPlugin,
        'react-hooks': reactHooksEslintPlugin,
        import: importPlugin,
        node: nodePlugin,
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'react/jsx-filename-extension': 'off',
        'node/file-extension-in-import': [
            'error',
            'never',
            {
                tryExtensions: ['.js', '.json', '.node'],
                '.json': 'always',
                '.page': 'always',
                '.svg': 'always',
                '.type': 'always',
                '.service': 'always',
                '.css': 'always',
                '.module.css': 'always',
            },
        ],
        'react/jsx-closing-tag-location': 'off',
        'simple-import-sort/imports': 'error',
        'prettier/prettier': 'error',
        'newline-per-chained-call': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'no-console': 'warn',
        'no-confusing-arrow': 'off',
        'class-methods-use-this': 'off',
        'no-bitwise': 'off',
        'no-unused-vars': 'off',
        'no-param-reassign': [
            'error',
            {
                props: false,
            },
        ],
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'no-underscore-dangle': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};

export default {
    tsFiles,
    jsFiles,
    config: globalConfig,
};
