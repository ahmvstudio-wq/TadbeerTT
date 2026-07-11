const sharp = require('sharp');
const path = require('path');

const svgPath = path.join(__dirname, 'public', 'favicon.svg');
const outPath = path.join(__dirname, 'oryx.png');

sharp(svgPath)
  .resize(1000, 1000)
  .png()
  .toFile(outPath)
  .then(() => {
    console.log('Successfully created high-res oryx.png');
  })
  .catch(err => {
    console.error('Error generating image', err);
  });
