const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const generateEveryDayDeck = async () => {
    console.log('Launching Puppeteer browser for Every Day Shopping Center Proposal (A4 Landscape)...');
    
    const findBrowserPath = () => {
        const paths = [
            'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
            'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
            'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
        ];
        for (const p of paths) {
            if (fs.existsSync(p)) return p;
        }
        return null;
    };

    const execPath = findBrowserPath();
    console.log('Using browser executable:', execPath);
    
    const launchOptions = { headless: 'new' };
    if (execPath) launchOptions.executablePath = execPath;

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();
    const assetsDir = path.join(__dirname, 'public', 'assets');
    
    const htmlPath = path.join(assetsDir, 'everyday_shopping_proposal_deck.html');
    const pdfOutput = path.join(assetsDir, 'Tadbeer_EveryDayShopping_Transformation_Proposal_Deck.pdf');
    const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;

    console.log(`Navigating to ${fileUrl}...`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    console.log('Generating A4 Landscape Every Day Shopping Center Proposal PDF...');
    await page.pdf({
        path: pdfOutput,
        format: 'A4',
        landscape: true, // Landscape Orientation
        printBackground: true,
        margin: { top: '0', bottom: '0', left: '0', right: '0' }
    });

    console.log(`Successfully generated PDF: ${pdfOutput}`);
    await browser.close();
};

generateEveryDayDeck().catch(err => {
    console.error('Error generating PDF:', err);
    process.exit(1);
});
