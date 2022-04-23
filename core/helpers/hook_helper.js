const { I } = inject()
const dotenv = require('dotenv')
const read_data = require('../util/read_data')
const constants = require('../util/constants')
const util_data = require('../util/util_data')
const fs = require('fs')
const path = require('path')

class HookHelper extends codecept_helper {

    async _init() {
        let testEnv = this.getTestEnvName()
        if (testEnv !== undefined && testEnv !== null && testEnv !== '') {
            dotenv.config({ path: `./env/${testEnv}.env` })
        }
        dotenv.config({ path: './env/.env' })
    }

    getTestEnvName() {
        if (process.env.TEST_ENV != undefined) {
            return process.env.TEST_ENV.toString().toLowerCase()
        }
        return constants.ENV_TEST
    }
    async _finishTest() {
    }

}

module.exports = HookHelper