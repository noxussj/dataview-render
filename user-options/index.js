const { data1, data2, data3, data4, data5, data6, data7, data8 } = require('../user-data/index.js')

module.exports = {
    name: '农机普查',
    key: 'survey',
    prefix: 'overview/machine/',
    layout: [
        {
            width: '27.5%',
            height: '100%',
            children: [
                {
                    name: '',
                    key: 'count',
                    height: '0%',
                    copy: 'card-count2',
                    copyData: data1
                },
                {
                    name: '当前使用状态统计',
                    key: 'vehicle-status',
                    height: '30%',
                    copy: '',
                    copyData: data2
                },
                {
                    name: '农机类型统计',
                    key: 'machine-type',
                    height: '34%',
                    copy: 'barx-gradual',
                    copyData: data3
                },
                {
                    name: '年作业量农机统计',
                    key: 'machine-use',
                    height: '36%',
                    copy: 'barx-gradual',
                    copyData: data4
                }
            ]
        },
        {
            width: '45%',
            height: '0%',
            children: []
        },
        {
            width: '27.5%',
            height: '100%',
            children: [
                {
                    name: '',
                    key: 'count2',
                    height: '0%',
                    copy: 'card-count2',
                    copyData: data5
                },
                {
                    name: '新疆农机数量分布统计',
                    key: 'machine-dist',
                    height: '35%',
                    copy: 'barx-gradual',
                    copyData: data6
                },
                {
                    name: '农机厂家占比分析',
                    key: 'factory-dist',
                    height: '30%',
                    copy: 'pie-rose',
                    copyData: data7
                },
                {
                    name: '总动力/配套总动力统计',
                    key: 'total-power',
                    height: '35%',
                    copy: 'line-simple',
                    copyData: data8
                }
            ]
        }
    ]
}
