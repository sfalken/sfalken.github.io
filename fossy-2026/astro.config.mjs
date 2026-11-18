import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sfalken.github.io',
  base: '/canada-trip',
  output: 'static',
  trailingSlash: 'always',
});
