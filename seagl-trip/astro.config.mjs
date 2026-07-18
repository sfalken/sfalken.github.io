import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://sfalken.github.io',
  base: '/seagl-trip',
  output: 'static',
  trailingSlash: 'always',
});
