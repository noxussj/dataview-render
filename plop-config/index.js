const userConfig = require('../user-config/index.js')

const addComponentName = require('./utils/add-component-name.js')

const path = require('path')

const fullPath = process.cwd()

const rootPath = path.join(__dirname, '../')

const cmdPath = fullPath.replace(rootPath, '')

const options = {
    cmdPath: cmdPath,
    rootStylePath: cmdPath.split('\\').join('__').replace('src__vews__', '')
}

addComponentName(userConfig)

module.exports = { options: Object.assign(options, userConfig) }
