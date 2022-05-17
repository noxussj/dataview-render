module.exports = (actions, options) => {
    actions.push({
        type: 'add',
        path: `dist/api/${options.key}/index.ts`,
        templateFile: 'plop-templates/api.hbs',
        data: options
    })
}
