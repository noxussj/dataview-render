module.exports = (plop) => {
    const del = require('./plugins/del.js')
    const registerAction = require('./actions/index.js')
    const registerEvent = require('./event/index.js')

    plop.setGenerator('noxussj new page', {
        description: 'new page',
        prompts: [
            {
                type: 'input',
                name: '_isRender',
                message: 'is confirm render page',
                default: true
            }
        ],
        actions: (data) => {
            const actions = []

            if (data._isRender) {
                del('dist')

                registerAction(actions)
            }

            return actions
        }
    })

    registerEvent(plop)
}
