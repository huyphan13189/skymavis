const read_data = require('./read_data');
const constants = require('./constants')
const moment = require('moment');

module.exports = {
    randIntRange(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
    },

    randInt(length) {
        return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
    },

    randText(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },

    randTextNote(length, prefix, suffix) {
        return (prefix == undefined ? "" : prefix) + txtRandom(length) + (suffix == undefined ? "" : suffix);
    },


    getPreviousMonth(previous) {
        let d = new Date()
        return (d.getMonth() + 1 - previous)
    },

    getCurrentMonthMM() {
        let d = new Date()
        return ("0" + (d.getMonth() + 1)).slice(-2)
    },

    // getBirthDayByAge(22, 'DD/MM/YYYY')
    getBirthDayByAge(age, format) {
        let d = new Date();
        d.setFullYear(d.getFullYear() - age)
        return moment(d).format(format);
    },
}