module.exports = (userConfig) => {
    const { toUpperCaseHump } = require('../../plop-utils/name-format.js')

    userConfig.layout.forEach((item) => {
        item.children.forEach((x) => {
            x.componentName = toUpperCaseHump(x.key)
        })
    })
}
