const userConfig = require('../user-config/index.js')

const addComponentName = require('../plop-utils/add-component-name.js')

addComponentName(userConfig)

module.exports = { options: userConfig }
