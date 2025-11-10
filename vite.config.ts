import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, PluginOption } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svgr({
            include: '**/icons/*.svg',
            svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
        }),
        react(),
        nodePolyfills({
            protocolImports: true,
        }),
        visualizer({
            template: 'treemap',
            gzipSize: true,
            brotliSize: true,
            filename: 'analyze-chunks.html',
        }) as PluginOption,
    ],
    server: { port: 3000 },
    base: '/hackathon',
    envDir: 'env',
    build: {
        emptyOutDir: true,
        outDir: 'build',
    },
});
