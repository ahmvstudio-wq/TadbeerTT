const puppeteer = require('puppeteer');
const path = require('path');

const generateB2bDeck = async () => {
    console.log('Launching Puppeteer browser for B2B Deck...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const assetsDir = path.join(__dirname, 'public', 'assets');
    
    const htmlPath = path.join(assetsDir, 'b2b_proposal_deck.html');
    const pdfOutput = path.join(assetsDir, 'Tadbeer_B2B_Transformation_Proposal_Deck.pdf');
    const fileUrl = `file://${htmlPath}`;

    console.log(`Navigating to ${fileUrl}...`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    console.log('Generating A4 Landscape B2B Proposal Deck PDF...');
    await page.pdf({
        path: pdfOutput,
        format: 'A4',
        landscape: true,
        printBackground: true,
        margin: { top: '0', bottom: '0', left: '0', right: '0' }
    });

    console.log(`Successfully generated B2B Proposal Deck PDF: ${pdfOutput}`);
    await browser.close();
};

generateB2bDeck().catch(err => {
    console.error('Error generating B2B proposal deck PDF:', err);
    process.exit(1);
});
