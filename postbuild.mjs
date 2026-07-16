import { copyFileSync, existsSync } from 'fs';

// vite-plugin-ssg outputs pre-rendered HTML to dist/home.html
// Copy it over dist/index.html so Vercel serves it as the entry point
if (existsSync('dist/home.html')) {
  copyFileSync('dist/home.html', 'dist/index.html');
  console.log('✅ Copied dist/home.html → dist/index.html');
} else {
  console.warn('⚠️  dist/home.html not found, index.html unchanged');
}
