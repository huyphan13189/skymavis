const fs = require('fs')
module.exports = {
    async readDataFromJson(filePath) {
        let data = await fs.readFileSync(filePath, 'utf8')
        return JSON.parse(data)
    },
}