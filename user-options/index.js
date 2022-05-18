const { data1, data2, data3, data5, data6 } = require('../user-data/index.js')

module.exports = {
    name: '农机作业',
    key: 'task',
    layout: [
        {
            width: '27.5%',
            children: [
                {
                    name: '',
                    key: 'count',
                    height: '25%',
                    copy: 'card-count2',
                    copyData: data1
                },
                {
                    name: '历年作业面积统计',
                    key: 'historical-area',
                    height: '35%',
                    copy: 'barx-gradual',
                    copyData: data2
                },
                {
                    name: '各作业类型数据对比',
                    key: 'type-comparison',
                    height: '40%',
                    copy: 'barx-gradual',
                    copyData: data3
                }
            ]
        },
        {
            width: '45%',
            children: [
                {
                    name: '',
                    height: '70%'
                },
                {
                    name: '作业面积统计',
                    key: 'working-area',
                    height: '30%',
                    copy: 'base-table',
                    copyData: data5
                }
            ]
        },
        {
            width: '27.5%',
            children: [
                {
                    name: '作业任务统计',
                    key: 'job-tasks',
                    height: '64%',
                    copy: 'base-table',
                    copyData: data5
                },
                {
                    name: '跨区作业类型占比',
                    key: 'cross-zone',
                    height: '36%',
                    copy: 'pie-rose3',
                    copyData: data6
                }
            ]
        }
    ]
}
