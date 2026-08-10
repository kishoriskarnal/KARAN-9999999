import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({'Accept-Language': 'en-US,en;q=0.9'});
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  await page.goto("https://www.google.com/search?kgmid=/g/11nk00jl1q&hl=en-IN", {waitUntil: 'domcontentloaded'});
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const text = await page.evaluate(() => document.body.innerText);
  console.log(text.substring(0, 3000));
  await browser.close();
})();
