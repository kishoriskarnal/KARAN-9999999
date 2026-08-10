import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({'Accept-Language': 'en-US,en;q=0.9'});
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  await page.goto('https://www.google.com/maps/place//@29.7080276,77.0059303,17z/data=!3m1!4b1!4m3!3m2!1s0x390e6f0033de3359:0x7c92ce6aa88e459b!12e1', {waitUntil: 'domcontentloaded'});
  
  await new Promise(resolve => setTimeout(resolve, 5000));
  const text = await page.evaluate(() => document.body.innerText);
  console.log(text.substring(0, 4000));
  await browser.close();
})();
