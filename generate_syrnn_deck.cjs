const puppeteer = require('puppeteer');
const path = require('path');

const generateSyrnnDeck = async () => {
    console.log('Launching Puppeteer browser for Syrnn-Style Tadbeer Deck...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const assetsDir = path.join(__dirname, 'public', 'assets');
    
    const htmlPath = path.join(assetsDir, 'syrnn_tadbeer_deck.html');
    const pdfOutput = path.join(assetsDir, 'Tadbeer_Syrnn_Style_Proposal_Deck.pdf');
    const fileUrl = `file://${htmlPath}`;

    console.log(`Navigating to ${fileUrl}...`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    console.log('Generating A4 Landscape Syrnn-Style Deck PDF...');
    await page.pdf({
        path: pdfOutput,
        format: 'A4',
        landscape: true,
        printBackground: true,
        margin: { top: '0', bottom: '0', left: '0', right: '0' }
    });

    console.log(`Successfully generated PDF: ${pdfOutput}`);
    await browser.close();
};

generateSyrnnDeck().catch(err => {
    console.error('Error generating PDF:', err);
    process.exit(1);
});
