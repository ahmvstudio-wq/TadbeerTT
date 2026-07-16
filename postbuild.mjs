import { readFileSync, writeFileSync, existsSync } from 'fs';

if (existsSync('dist/home.html') && existsSync('dist/index.html')) {
  const homeHtml = readFileSync('dist/home.html', 'utf8');
  const indexHtml = readFileSync('dist/index.html', 'utf8');

  // Extract the content of <div id="root">...</div> from homeHtml
  const rootStartTag = '<div id="root">';
  const rootStartIndex = homeHtml.indexOf(rootStartTag);
  
  if (rootStartIndex !== -1) {
    const contentStartIndex = rootStartIndex + rootStartTag.length;
    // Find the matching closing div tag for <div id="root">
    // Since home.html is simple, we can find the next </div> after the content
    const rootEndIndex = homeHtml.indexOf('</div>', contentStartIndex);
    
    // Actually, because of nesting, we should find the last </div> before </body>
    const bodyIndex = homeHtml.indexOf('</body>');
    const lastDivIndex = homeHtml.lastIndexOf('</div>', bodyIndex);

    if (lastDivIndex !== -1 && lastDivIndex > contentStartIndex) {
      const preRenderedContent = homeHtml.slice(contentStartIndex, lastDivIndex);
      
      // Inject it into index.html's <div id="root"></div>
      const targetTag = '<div id="root"></div>';
      const targetIndex = indexHtml.indexOf(targetTag);

      if (targetIndex !== -1) {
        const updatedIndexHtml = indexHtml.replace(targetTag, `<div id="root">${preRenderedContent}</div>`);
        writeFileSync('dist/index.html', updatedIndexHtml, 'utf8');
        console.log('✅ Successfully merged pre-rendered content into dist/index.html for hydration!');
      } else {
        // Try replacing with open/close tag if it has spaces or newlines
        const fallbackRegex = /<div id="root">\s*<\/div>/;
        if (fallbackRegex.test(indexHtml)) {
          const updatedIndexHtml = indexHtml.replace(fallbackRegex, `<div id="root">${preRenderedContent}</div>`);
          writeFileSync('dist/index.html', updatedIndexHtml, 'utf8');
          console.log('✅ Successfully merged pre-rendered content into dist/index.html (fallback match) for hydration!');
        } else {
          console.warn('⚠️  Could not find <div id="root"></div> in dist/index.html');
        }
      }
    } else {
      console.warn('⚠️  Could not parse pre-rendered content bounds in dist/home.html');
    }
  } else {
    console.warn('⚠️  Could not find <div id="root"> in dist/home.html');
  }
} else {
  console.warn('⚠️  dist/home.html or dist/index.html not found, no pre-rendering merged');
}
