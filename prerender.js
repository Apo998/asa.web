import fs from 'fs';
import puppeteer from 'puppeteer';
import { preview } from 'vite';

(async () => {
  console.log('Starting pre-rendering...');
  // Start the vite preview server
  const server = await preview({ preview: { port: 5173 } });
  
  // Launch puppeteer
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Define routes to prerender
  const routes = ['/', '/about', '/insights', '/contact'];
  
  for (const route of routes) {
    console.log(`Prerendering ${route}...`);
    // Load the route
    await page.goto(`http://localhost:5173${route}`, { waitUntil: 'networkidle0' });
    
    // Get the HTML content
    const html = await page.content();
    
    // Save to the dist folder
    const fileRoute = route === '/' ? '/index.html' : `${route}/index.html`;
    const dir = `./dist${route}`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    fs.writeFileSync(`./dist${fileRoute}`, html);
    console.log(`Saved ./dist${fileRoute}`);
  }
  
  await browser.close();
  server.httpServer.close();
  console.log('Pre-rendering complete!');
  process.exit(0);
})();
