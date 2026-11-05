import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Ganti dengan domain produksi (atau set env SITE_URL saat build).
const SITE_URL = process.env.SITE_URL ?? 'https://www.contoh-domain.id';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
