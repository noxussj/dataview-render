module.exports = (actions, options) => {
    options.layout.forEach((item) => {
        item.children.forEach((x) => {
            if (x.key) {
                actions.push({
                    type: 'add',
                    path: `dist/${options.key}/${x.key}/index.vue`,
                    templateFile: x.copy ? `plop-templates/components/${x.copy}.hbs` : `plop-templates/component.hbs`,
                    data: {
                        ...x,
                        parent: options
                    }
                })
            }
        })
    })
}
