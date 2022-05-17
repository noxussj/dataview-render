/**
 * 格式（小写横杠）转 格式（大写驼峰）
 */
const toUpperCaseHump = (data) => {
    let res = ''

    if (data) {
        let nameArr = data.split('-') // 获取名称

        // 转换名称格式(barx-simple -> BarxSimple)
        nameArr.map((item, index) => {
            if (index === 0) {
                res = item[0].toUpperCase() + item.substr(1, item.length - 1)
            } else {
                if (item != '-') {
                    item = item[0].toUpperCase() + item.substr(1, item.length - 1)
                    res += item
                }
            }
        })
    }
    return res
}

/**
 * 格式（小写横杠）转 格式（小写驼峰）
 */
const toLowerCaseHump = (data) => {
    let res = ''

    if (data) {
        let nameArr = data.split('-') // 获取名称

        // 转换名称格式(barx-simple -> barxSimple)
        nameArr.map((item, index) => {
            if (index === 0) {
                res = item[0] + item.substr(1, item.length - 1)
            } else {
                if (item != '-') {
                    item = item[0].toUpperCase() + item.substr(1, item.length - 1)
                    res += item
                }
            }
        })
    }
    return res
}

module.exports = {
    toUpperCaseHump,
    toLowerCaseHump
}
