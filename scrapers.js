const puppeteer = require('puppeteer')

async function scrapeProduct (url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);  
    
    const [el] = await page.$x("//*[@id='stats-react-container']/div/div[2]/div[1]/div[1]/div[2]");
    const src = await el.getProperty('src');
    const srcTxt = src.jsonValue();

    console.log({srcTxt});
    browser.close();
}

