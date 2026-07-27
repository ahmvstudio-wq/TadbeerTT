const puppeteer = require('puppeteer');
const path = require('path');

const generateStoryPdf = async () => {
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        
        await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 2 });
        
        const assetsDir = path.join(__dirname, 'public', 'assets');
        const htmlPath = `file://${path.join(assetsDir, 'instagram_story_invitation.html')}`;
        
        await page.goto(htmlPath, { waitUntil: 'networkidle0' });
        
        await page.pdf({
            path: path.join(assetsDir, 'Tadbeer_Instagram_Story_Invitation.pdf'),
            width: '1080px',
            height: '1920px',
            printBackground: true,
            margin: { top: '0', bottom: '0', left: '0', right: '0' }
        });
        
        console.log('✅ Generated public/assets/Tadbeer_Instagram_Story_Invitation.pdf');
        await browser.close();
    } catch (err) {
        console.error('Error generating PDF:', err);
    }
};

generateStoryPdf();
