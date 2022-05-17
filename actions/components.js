module.exports = (actions, options) => {
    options.layout.forEach((item) => {
        item.children.forEach((x) => {
            if (x.key) {
                actions.push({
                    type: 'add',
                    path: `dist/${options.key}/${x.key}.vue`,
                    templateFile: 'plop-templates/component.hbs',
                    data: {
                        ...x,
                        parent: options
                    }
                })
            }
        })
    })
}
