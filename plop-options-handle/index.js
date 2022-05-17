module.exports = () => {
    const options = require('../user-config/index.js')
    const addComponentname = require('./utils/add-component-name.js')

    addComponentname(options)

    return options
}
