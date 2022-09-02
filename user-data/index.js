// 资源状况
const data1 = [
    {
        name: '农户数量',
        value: 23,
        unit: '户'
    },
    {
        name: '大蚕房数',
        value: 34,
        unit: '个'
    },
    {
        name: '桑园数量',
        value: 34,
        unit: '个'
    },
    {
        name: '小蚕共育房',
        value: 34,
        unit: '个'
    },
    {
        name: '蚕房总面积',
        value: 232,
        unit: '亩'
    },
    {
        name: '桑园占地总面积',
        value: 132,
        unit: '亩'
    }
]

// 今年计划与进展
const data2 = {
    count: [
        {
            name: '计划总批次',
            value: 5,
            unit: '次'
        },
        {
            name: '预计产量',
            value: 392830,
            unit: 'kg'
        },
        {
            name: '已完成产量',
            value: 392830,
            unit: 'kg'
        }
    ],
    echarts: {
        series: [
            {
                name: '计划',
                data: [3752.85, 1576.58, 1603.52, 620.2425]
            },
            {
                name: '实际',
                data: [3752.85, 1603.52, 1576.58, 620.2425]
            }
        ],
        axis: ['第一批', '第二批', '第三批', '第四批']
    }
}

// 设备统计
const data3 = {
    count: [
        {
            name: '全部',
            value: 324
        },
        {
            name: '虫情灯',
            value: 123
        },
        {
            name: '气象站',
            value: 23
        },
        {
            name: '孢子捕捉',
            value: 42
        },
        {
            name: '监控',
            value: 52
        },
        {
            name: '蚕房检测',
            value: 213
        }
    ],
    table: [
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '正常',
            status: 1
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '离线',
            status: 2
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '未连接',
            status: 3
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '正常',
            status: 1
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '离线',
            status: 2
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '未连接',
            status: 3
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '正常',
            status: 1
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '离线',
            status: 2
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '未连接',
            status: 3
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '正常',
            status: 1
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '离线',
            status: 2
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '未连接',
            status: 3
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '正常',
            status: 1
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '离线',
            status: 2
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '未连接',
            status: 3
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '正常',
            status: 1
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '离线',
            status: 2
        },
        {
            deviceName: 'XXXX设备',
            company: 'XXXX单位',
            statusLabel: '未连接',
            status: 3
        }
    ]
}

module.exports = { data1, data2, data3 }
