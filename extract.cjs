const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const outputDir = path.join(__dirname, 'website_content');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.jsx'));

for (const file of files) {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  
  // Very basic extraction: grab text between > and <
  let text = '';
  const regex = />([^<]+)</g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const extracted = match[1].trim();
    // Filter out obvious code artifacts, curly braces (React variables), empty strings, and short meaningless strings
    if (extracted && extracted.length > 2 && !extracted.includes('{') && !extracted.includes('}') && !extracted.includes('import ') && !extracted.includes('const ') && !extracted.includes('=>') && !extracted.includes(';')) {
      text += extracted + '\n\n';
    }
  }

  // Fallback if the regex fails to catch stuff: just try to strip tags
  if (text.length < 100) {
     const noTags = content.replace(/<[^>]+>/g, '\n').replace(/\{[^}]+\}/g, '').split('\n').map(line => line.trim()).filter(line => line.length > 3 && !line.includes('import') && !line.includes('export') && !line.includes('const') && !line.includes('return')).join('\n\n');
     text = noTags;
  }

  const outputName = file.replace('.jsx', '.md');
  const markdownContent = `# ${file.replace('.jsx', '')}\n\n${text}`;
  
  fs.writeFileSync(path.join(outputDir, outputName), markdownContent);
  console.log(`Extracted ${file} -> ${outputName}`);
}

// Special case for HomePage which is composed of components
const componentsDir = path.join(__dirname, 'src', 'components');
const homeComponents = ['Hero.jsx', 'Services.jsx', 'About.jsx', 'Process.jsx', 'OurWork.jsx', 'Clients.jsx', 'FAQ.jsx', 'CTA.jsx'];

let homeText = '# Home Page Content\n\n';
for (const comp of homeComponents) {
  try {
    const content = fs.readFileSync(path.join(componentsDir, comp), 'utf8');
    let text = '';
    const regex = />([^<]+)</g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const extracted = match[1].trim();
      if (extracted && extracted.length > 2 && !extracted.includes('{') && !extracted.includes('}') && !extracted.includes('import ') && !extracted.includes('const ') && !extracted.includes('=>') && !extracted.includes(';')) {
        text += extracted + '\n\n';
      }
    }
    homeText += `## ${comp.replace('.jsx', '')}\n\n${text}\n\n`;
  } catch(e) {
    console.log(`Could not read ${comp}`);
  }
}

fs.writeFileSync(path.join(outputDir, 'HomePage.md'), homeText);
console.log('Extracted HomePage components -> HomePage.md');
