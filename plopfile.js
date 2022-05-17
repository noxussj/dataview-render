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

                // 获取 options
                // const options = getOptions()

                // 添加组件
                // actions.push({
                //     type: 'add',
                //     path: `dist/${options.key}/index.vue`, // 输出目录
                //     templateFile: 'plop-templates/index.hbs', // 模板目录
                //     data: options // 配置项
                // })

                // 添加子组件
                // actions.push(...getActions(options))

                // 添加api
                // actions.push({
                //     type: 'add',
                //     path: `dist/api/${options.key}/index.ts`, // 输出目录
                //     templateFile: 'plop-templates/api.hbs', // 模板目录
                //     data: options // 配置项
                // })
            }

            return actions
        }
    })

    registerEvent(plop)
}
