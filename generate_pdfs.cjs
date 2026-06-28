const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const generatePdfs = async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const assetsDir = path.join(__dirname, 'public', 'assets');
    
    const renderPdf = async (htmlFile, queryParams, outputPdf) => {
        let fileUrl = `file://${path.join(assetsDir, htmlFile)}`;
        if (queryParams) {
            fileUrl += `?${queryParams}`;
        }
        await page.goto(fileUrl, { waitUntil: 'networkidle0' });
        await page.pdf({
            path: path.join(assetsDir, outputPdf),
            format: 'A4',
            printBackground: true,
            margin: { top: '0', bottom: '0', left: '0', right: '0' }
        });
        console.log(`Generated ${outputPdf}`);
    };

    try {
        await renderPdf('playbook.html', null, 'GCC_Digital_Transformation_Playbook.pdf');
        
        await renderPdf('action_plan.html', 'phase=foundation', 'Readiness_Action_Plan_Foundation.pdf');
        await renderPdf('action_plan.html', 'phase=growth', 'Readiness_Action_Plan_Growth.pdf');
        await renderPdf('action_plan.html', 'phase=acceleration', 'Readiness_Action_Plan_Acceleration.pdf');
        await renderPdf('action_plan.html', 'phase=innovation', 'Readiness_Action_Plan_Innovation.pdf');

        // For generic ROI and Omanization, we'll pass standard enterprise numbers
        await renderPdf('roi_report.html', 'loss=45,000&savings=38,250&hours=520&workforce=50&sector=Enterprise', 'ROI_Financial_Friction_Analysis.pdf');
        
        await renderPdf('omanization_roadmap.html', 'percentage=20&status=yellow&sector=Enterprise', 'Omanization_Compliance_Roadmap.pdf');

    } catch (err) {
        console.error(err);
    } finally {
        await browser.close();
    }
};

generatePdfs();
