const { I, register, api, gmail } = inject()
const constants = require('../core/util/constants')
const apiPage = require('../pages/api/api.page')

Given('I send request verify to email {string}', async (email) => {
    global.res = await register.requestVerifyEmail(email)
})

Given('I see status code {int}', async (code) => {
    await I.assertEqual(code, global.res.status,)
})

Given('I see response body has', async (table) => {
    const tableByHeader = table.parse().hashes();
    for (const row of tableByHeader) {
        let value = row.value
        switch (row.type) {
            case 'int':
                value = parseInt(row.value)
                break;
            case 'float':
                value = parseFloat(row.value)
                break;
            default:
                break;
        }
        let data = JSON.parse(JSON.stringify(global.res.data))
        await I.assertEqual(data[row.field], value, row.field)
    }
})

Given('I send request verify to suffix email', async () => {
    let email = api.getSuffixEmail(process.env.EMAIL)
    await register.requestVerifyEmail(email)
    global.requestEmail = email
})

// The better approach for get verify code:
// 1: Expose an internal api to get code
// 2: Connect to db to get code
Given('I get verify code', async () => {
    let verifyCode = await gmail.getVerifyCode()
    console.log("Verify code: " + verifyCode)
    global.verifyCode = verifyCode
})

Given('I send verify suffix email', async () => {
    global.res = await register.verifyEmail(global.requestEmail, global.verifyCode)
})

Given('I verify email {string} and code {string}', async (email, code) => {
    global.res = await register.verifyEmail(email, code)
})

Given('I register suffix email', async () => {
    global.res = await register.registerEmail(global.requestEmail, "a1234567")
})

Given('I register fof email {string} and password {string}', async (email, password) => {
    global.res = await register.registerEmail(email, password)
})

Given('I see response contains jsons', async (table) => {
    const tableByHeader = table.parse().hashes();
    for (const row of tableByHeader) {
        let objVerify = JSON.parse(row.json)
        await I.seeResponseContainsJson(objVerify)
    }
})