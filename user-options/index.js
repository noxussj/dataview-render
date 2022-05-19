const { data1, data2, data3, data4, data5, data6 } = require('../user-data/index.js')

module.exports = {
    name: '农机作业',
    key: 'subsidy',
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
                    name: '地区补贴金额统计',
                    key: 'region-amount',
                    height: '48%',
                    copy: 'barx-gradual',
                    copyData: data2
                },
                {
                    name: '农机类型补贴统计',
                    key: 'machine-type',
                    height: '52%',
                    copy: 'barx-gradual',
                    copyData: data3
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
                    copyData: data4
                },
                {
                    name: '作业任务统计',
                    key: 'job-task',
                    height: '48%',
                    copy: 'barx-gradual',
                    copyData: data5
                },
                {
                    name: '补贴进度统计',
                    key: 'progress',
                    height: '52%',
                    copy: 'barx-gradual',
                    copyData: data6
                }
            ]
        }
    ]
}
