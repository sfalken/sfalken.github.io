import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sfalken.github.io',
  base: '/europe-trip',
  output: 'static',
  trailingSlash: 'always',
});
