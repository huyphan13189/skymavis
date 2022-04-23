const { I, api } = inject();
module.exports = {
    endPoint: process.env.DOMAIN + '/auth',
    async requestVerifyEmail(email) {
        let payload = {
            "email": email
        }
        let res = await I.sendPostRequest(this.endPoint + '/request-verify-email', payload)
        api.logRes("Request verify email", res)
        return res
    },

    async verifyEmail(email, code) {
        let payload = {
            "token": code,
            "email": email
        }
        let res = await I.sendPostRequest(this.endPoint + '/verify-email', payload)
        api.logRes("Verify email", res)
        return res
    },

    async registerEmail(email, pass) {
        let payload = {
            "email": email,
            "password": pass
        }
        let res = await I.sendPostRequest(this.endPoint + '/register', payload)
        api.logRes("Register", res)
        return res
    },
}
