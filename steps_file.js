'use strict';
// in this file you can append custom step methods to 'I' object
const allure = codeceptjs.container.plugins('allure');
module.exports = function () {
    return actor({
        testNewStep: function (title) {
            this.say('Enter');
        },
        async visualVerify(screenShotName, toleranceVal) {
            let baseImage = false
            if (process.env.BASE_IMAGE === true) {
                baseImage = true
            }
            await this.saveScreenshot(screenShotName)
            await this.seeVisualDiff(screenShotName, { tolerance: toleranceVal, prepareBaseImage: baseImage })
        },
    });
}