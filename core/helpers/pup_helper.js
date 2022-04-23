
const Helper = codecept_helper;
const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone X'];

class PupHelper extends Helper {
  async emulateIPhoneX() {
    const { page } = this.helpers.Puppeteer;
    await page.emulate(iPhone);
  }

  async pupScreenShot() {
    const { page } = this.helpers.Puppeteer;
    let screenshotBuffer = await page.screenshot()
    return screenshotBuffer
  }
}

module.exports = PupHelper;
