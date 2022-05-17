module.exports = (options) => {
    const res = []

    options.layout.forEach((item) => {
        item.children.forEach((x) => {
            if (x.key) {
                res.push({
                    type: 'add',
                    path: `dist/${options.key}/${x.key}.vue`, // 输出目录
                    templateFile: 'plop-templates/component.hbs', // 模板目录
                    data: {
                        ...x,
                        parentKey: options.key,
                        parentComponentNameUpper: options.componentNameUpper,
                        parentComponentNameLower: options.componentNameLower
                    }
                })
            }
        })
    })

    return res
}
