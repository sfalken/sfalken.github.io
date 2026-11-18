import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sfalken.github.io',
  base: '/belgium-trip',
  output: 'static',
  trailingSlash: 'always',
});
