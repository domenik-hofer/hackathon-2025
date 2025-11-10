import swc from 'unplugin-swc';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
    plugins: [react(), swc.vite()],
    esbuild: {
        format: 'esm',
        target: 'es2020',
    },
    test: {
        clearMocks: true,
        include: ['./src/**/*.spec.{ts,tsx}'],
        exclude: [...configDefaults.exclude, './build/**/*', './**/*/vitest*', './eslint-config-overrides/**/*'],
        coverage: {
            reporter: ['html'],
            provider: 'v8',
            reportsDirectory: './coverage',
            clean: true,
            include: ['**/*.{ts,tsx}'],
            exclude: [
                ...(configDefaults.coverage.exclude || []),
                './build/**/*',
                '**/*/index.ts',
                '**/*/test-util/**/*',
            ],
        },
    },
});
