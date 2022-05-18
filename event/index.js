module.exports = (plop) => {
    const { toUpperCaseHump, toLowerCaseHump } = require('../utils/name-format.js')

    plop.setHelper('toUpperCaseHump', function (str) {
        return toUpperCaseHump(str)
    })

    plop.setHelper('toLowerCaseHump', function (str) {
        return toLowerCaseHump(str)
    })

    plop.setHelper('stringify', function (str) {
        return JSON.stringify(str)
    })

    plop.setHelper('modelClassName', function (str) {
        return str.split('/').join('__')
    })
}
