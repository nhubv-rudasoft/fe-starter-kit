import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

// Use dynamic import for ESM-only packages
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default defineConfig(async () => {
  // Dynamically import the tailwindcss plugin
  const tailwindcssModule = await import('@tailwindcss/vite');
  const tailwindcss = tailwindcssModule.default;

  return {
    root: __dirname,
    cacheDir: '../../../../node_modules/.vite/libs/ui/raptor',
    plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md']), tailwindcss()],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
    test: {
      watch: false,
      globals: true,
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reporters: ['default'],
      coverage: { reportsDirectory: '../../../../coverage/libs/ui/raptor', provider: 'v8' },
    },
  };
});
