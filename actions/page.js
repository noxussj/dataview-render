module.exports = (actions, options) => {
    actions.push({
        type: 'add',
        path: `dist/${options.key}/index.vue`,
        templateFile: 'plop-templates/index.hbs',
        data: options
    })
}
