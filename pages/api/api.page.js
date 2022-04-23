const { I } = inject()
const { v4: uuidv4 } = require('uuid')

const FormData = require('form-data')
const fs = require('fs')
const constants = require('../../core/util/constants')
const utilData = require("../../core/util/util_data")

module.exports = {
  logRes(log, res) {
    console.log(`${log} (${res.status}): ` + JSON.stringify(res.data))
  },

  getSuffixEmail(email, suffix) {
    let mailParts = email.split("@")
    if (suffix === undefined) {
      suffix = Date.now()
    }
    return mailParts[0] + "+" + suffix + "@" + mailParts[1]
  },
}
