module.exports = (plop) => {
    const { toUpperCaseHump, toLowerCaseHump } = require('../utils/name-format.js')
    const { mapComponents } = require('../utils/map-components.js')

    plop.setHelper('toUpperCaseHump', function (str) {
        return toUpperCaseHump(str)
    })

    plop.setHelper('toLowerCaseHump', function (str) {
        return toLowerCaseHump(str)
    })

    plop.setHelper('copyComponent', function (copy) {
        return mapComponents(copy)
    })

    plop.setHelper('stringify', function (str) {
        return JSON.stringify(str)
    })
}
