/**
 * Plop 入口文件，需要导出一个函数
 * 此函数接收一个plop对象，用于创建生成器任务
 */
module.exports = (plop) => {
    const del = require('./plop-utils/del.js')
    const { options } = require('./plop-config/index.js')

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

                actions.push({
                    type: 'add',
                    path: 'dist/{{pageName}}/index.vue', // 输出目录
                    templateFile: 'plop-templates/component.hbs', // 模板目录
                    data: options // 配置项
                })
            }

            return actions
        }
    })
}
