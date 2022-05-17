module.exports = (actions) => {
    const options = require('../user-options/index.js')

    const page = require('./page.js')

    const components = require('./components.js')

    const api = require('./api.js')

    page(actions, options)

    components(actions, options)

    api(actions, options)
}
