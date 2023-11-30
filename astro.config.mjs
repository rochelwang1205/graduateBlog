import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://rochelwang1205.github.io/graduateBlog',
	// base: ""
	// integrations: [mdx(), sitemap()],
});
