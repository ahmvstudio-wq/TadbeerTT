const puppeteer = require('puppeteer');
const path = require('path');

const generateRetailHcDeck = async () => {
    console.log('Launching Puppeteer browser for Retail Human Capital Deck (A4 Portrait)...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const assetsDir = path.join(__dirname, 'public', 'assets');
    
    const htmlPath = path.join(assetsDir, 'retail_hc_proposal_deck.html');
    const pdfOutput = path.join(assetsDir, 'Tadbeer_Human_Capital_Transformation_Proposal_Retail.pdf');
    const fileUrl = `file://${htmlPath}`;

    console.log(`Navigating to ${fileUrl}...`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    console.log('Generating A4 Portrait Retail Human Capital Proposal Deck PDF...');
    await page.pdf({
        path: pdfOutput,
        format: 'A4',
        landscape: false, // Strict A4 Portrait Orientation
        printBackground: true,
        margin: { top: '0', bottom: '0', left: '0', right: '0' }
    });

    console.log(`Successfully generated A4 Portrait Retail Human Capital Deck PDF: ${pdfOutput}`);
    await browser.close();
};

generateRetailHcDeck().catch(err => {
    console.error('Error generating Retail Human Capital proposal deck PDF:', err);
    process.exit(1);
});
