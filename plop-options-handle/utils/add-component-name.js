module.exports = (options) => {
    const plopCopyComponent = require('../../plop-copy-component/index.js')
    const { toUpperCaseHump, toLowerCaseHump } = require('../../plop-utils/name-format.js')

    options.componentNameUpper = toUpperCaseHump(options.key)
    options.componentNameLower = toLowerCaseHump(options.key)

    options.layout.forEach((item) => {
        item.children.forEach((x) => {
            x.componentNameUpper = toUpperCaseHump(x.key)
            x.componentNameLower = toLowerCaseHump(x.key)
            x.copyData = JSON.stringify(x.copyData)
            x.copyComponent = plopCopyComponent(x.copy)
        })
    })
}
