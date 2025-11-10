import eslint from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import tsEslintPlugin from 'typescript-eslint';
import globalConfig from './eslint-config-overrides/global.config.mjs';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default tsEslintPlugin.config(
    {
        ...eslint.configs.recommended,
        files: [...globalConfig.tsFiles, ...globalConfig.jsFiles],
    },
    ...tsEslintPlugin.configs.recommended.map(config => ({
        ...config,
        files: globalConfig.tsFiles,
        rules: {
            ...config.rules,
            '@typescript-eslint/no-unused-vars': ['error', { caughtErrorsIgnorePattern: '^(ignore|e)' }],
        },
    })),
    globalConfig.config,
    globalIgnores(['./build/*']),
    pluginQuery.configs['flat/recommended'],
    {
        files: ['**/*.page.ts[x]', '**/*.d.ts', 'vite.config.ts', '**/*.[m]js'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
);
