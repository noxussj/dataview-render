module.exports = (url = 'dist') => {
    const del = require('del')

    const path = require('path')

    const rootPath = path.join(__dirname, '../')

    const delPath = path.join(rootPath, url)

    del.sync([delPath], { force: true })
}
