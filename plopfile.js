module.exports = (plop) => {
    const getOptions = require('./plop-options-handle/index.js')
    const getActions = require('./plop-options-handle/utils/add-component-files.js')
    const del = require('./plop-utils/del.js')

    plop.setGenerator('noxussj new page', {
        description: 'new page',
        prompts: [
            {
                type: 'input', // 用户输入类型
                name: '_isRender', // 提示字段名称
                message: 'is confirm render page', // 提示内容
                default: true // 默认
            }
        ],
        actions: (data) => {
            const actions = []

            if (data._isRender) {
                // 清空目录
                del('dist')

                // 获取 options
                const options = getOptions()

                // 添加组件
                actions.push({
                    type: 'add',
                    path: `dist/${options.key}/index.vue`, // 输出目录
                    templateFile: 'plop-templates/index.hbs', // 模板目录
                    data: options // 配置项
                })

                // 添加子组件
                actions.push(...getActions(options))

                // 添加api
                actions.push({
                    type: 'add',
                    path: `dist/api/${options.key}/index.ts`, // 输出目录
                    templateFile: 'plop-templates/api.hbs', // 模板目录
                    data: options // 配置项
                })
            }

            return actions
        }
    })
}
