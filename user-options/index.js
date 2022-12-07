const { data1, data2, data3, data4, data5, data6, data7 } = require('../user-data/index.js')

module.exports = {
    name: '风险分析',
    key: 'risk',
    prefix: '',
    layout: [
        {
            width: '26.08%',
            height: '19.35%',
            children: [
                {
                    name: '申报统计-来源地',
                    key: 'model-declare-source',
                    copy: 'barx-multiple-line',
                    copyData: data1
                },
                {
                    name: '申报统计-目的地',
                    key: 'model-declare-dest',
                    copy: 'line-simple',
                    copyData: data2
                },
                {
                    name: '行程卡打卡统计',
                    key: 'model-sign-travel',
                    copy: 'barx-multiple-line',
                    copyData: data3
                },
                {
                    name: '异常打卡统计',
                    key: 'model-sign-abnormal',
                    copy: 'line-simple',
                    copyData: data4
                },
                {
                    name: '场所异常打卡统计',
                    key: 'model-abnormal-place',
                    copy: 'barx-multiple-line',
                    copyData: data5
                },
                {
                    name: '核酸异常统计',
                    key: 'model-abnormal-nucleic',
                    copy: 'line-simple',
                    copyData: data6
                },
                {
                    name: '统计模块',
                    key: 'model-count',
                    copyData: data7
                }
            ]
        }
    ]
}
