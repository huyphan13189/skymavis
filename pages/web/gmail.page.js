const { I } = inject();
module.exports = {

    async getVerifyCode() {
        await I.amOnPage("https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin")
        let userName_el = "//input[@autocomplete='username']"
        await I.waitForElement(userName_el, 30)
        await I.fillField(userName_el, process.env.EMAIL)
        await I.click("//button[@jsname='LgbsSe']")
        await I.wait(1)
        let password_el = "//input[@autocomplete='current-password']"
        await I.waitForElement(password_el, 30)
        await I.fillField(password_el, process.env.EMAIL_PASS)
        await I.click("(//button[@jsname='LgbsSe'])[1]")
        await I.waitForText("Inbox", 60)
        await I.wait(10)
        await I.click("(//span[contains(text(),'VERIFICATION CODE')])[1]")
        let lastVerifyCode_el = "(//div[text()='VERIFICATION CODE']/following-sibling::div)[last()]"
        await I.waitForElement(lastVerifyCode_el,5)
        let verifyMes = await I.grabTextFrom(lastVerifyCode_el)
        let codeList = verifyMes.match(/[0-9]+/g)
        return codeList[0]
    }


}