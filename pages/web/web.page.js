const { I } = inject();
const allure = codeceptjs.container.plugins('allure');
const fs = require('fs')
const read_data = require('../core/util/read_data');
const constants = require('../core/util/constants')
const util_data = require('../core/util/util_data');
module.exports = {

    async visualVerify(screenShotName, toleranceVal, takeBaseImage) {
        let baseImage = false
        if (takeBaseImage === true) {
            baseImage = true
        } else {
            if (this.isProcessEnv('BASE_IMAGE') && process.env.BASE_IMAGE.toLowerCase() === 'true') {
                baseImage = true
            }
        }
        if (this.isProcessEnv('PERCENT')) {
            toleranceVal = toleranceVal + parseFloat(process.env.PERCENT)
        }
        await I.wait(1)
        await I.saveScreenshot(screenShotName, true)
        await I.seeVisualDiff(screenShotName, { tolerance: toleranceVal, prepareBaseImage: baseImage })
    },

    async visualGetBaseimage(name) {
        await I.wait(1)
        await I.saveScreenshot(name)
        await I.seeVisualDiff(name, { tolerance: 3, prepareBaseImage: true })
    },

    isProcessEnv(name) {
        let sysVar = process.env[name]
        return sysVar !== undefined && sysVar !== null;
    },

    async addScreenShotToReport(name) {
        allure.addAttachment(name, await I.pupScreenShot(), 'image/png');
    },

}