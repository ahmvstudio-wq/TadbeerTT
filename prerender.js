import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
// We read from your normal build folder
const DIST_DIR = path.join(__dirname, 'dist');
// We save the final, SEO-ready files to a completely clean folder
const OUT_DIR = path.join(__dirname, 'dist-static');

// 1. Copy all static assets (images, CSS, JS) to the new output folder
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    if (fs.lstatSync(fromPath).isFile()) {
      // We skip index.html because Puppeteer is going to build a better one
      if (element !== 'index.html') {
        fs.copyFileSync(fromPath, toPath);
      }
    } else {
      copyFolderSync(fromPath, toPath);
    }
  });
}

console.log('Copying static assets to clean output folder...');
copyFolderSync(DIST_DIR, OUT_DIR);

// 2. Start the server reading from the ORIGINAL dist folder
const server = http.createServer((req, res) => {
  let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  const ext = path.extname(filePath);
  let contentType = 'text/html';
  if (ext === '.js') contentType = 'text/javascript';
  else if (ext === '.css') contentType = 'text/css';
  else if (ext === '.png') contentType = 'image/png';
  else if (ext === '.jpg') contentType = 'image/jpeg';
  else if (ext === '.svg') contentType = 'image/svg+xml';
  else if (ext === '.json') contentType = 'application/json';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end(`Server Error: ${err.code}`);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const routes = [
  '/',
  '/services/software-solutions',
  '/services/ai-technology',
  '/services/digital-marketing',
  '/services/human-capital',
  '/resources',
  '/careers',
  '/privacy-policy',
  '/terms-of-service'
];

server.listen(PORT, async () => {
  console.log(`Prerender server running at http://localhost:${PORT}`);

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Set high viewport size to render desktop layouts correctly
    await page.setViewport({ width: 1440, height: 900 });

    for (const route of routes) {
      console.log(`Prerendering route: ${route}`);
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Allow any animations/loading states to settle
      await new Promise(resolve => setTimeout(resolve, 1500));

      const html = await page.content();

      // 3. Save the rendered HTML to the NEW dist-static folder
      const destPath = route === '/'
        ? path.join(OUT_DIR, 'index.html')
        : path.join(OUT_DIR, route, 'index.html');

      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.writeFileSync(destPath, html, 'utf-8');
      console.log(`Saved: ${destPath}`);
    }

    await browser.close();
    console.log('✅ Prerendering complete! Tell Vercel to deploy the "dist-static" folder.');
  } catch (error) {
    console.error('Error during prerendering:', error);
  } finally {
    server.close();
    process.exit(0);
  }
});