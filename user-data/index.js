// 统计模块
const data1 = {
    count1: [
        {
            name: '实际耕地面积',
            value: 1.06,
            unit: '亿亩'
        },
        {
            name: '实际耕地面积',
            value: 1.06,
            unit: '亿亩'
        }
    ],
    count2: [
        {
            name: '实际耕地面积',
            value: 1.06,
            unit: '亿亩'
        }
    ]
}

// 历年作业面积统计
const data2 = {
    series: [
        {
            name: '种植面积',
            data: [3752.85, 1576.58, 1603.52, 620.2425, 102.9645, 184.452]
        },
        {
            type: 'line',
            name: '同比增长率',
            data: [-1.52, 5.4, 0.7, 1.52, -18.09, -12.54]
        }
    ],
    axis: ['棉花', '玉米', '小麦', '红枣', '苹果', '葡萄']
}

// 各作业类型数据对比
const data3 = {
    series: [
        {
            name: '计划用水量',
            data: [17.08, 2.07, 6.41, 1.13, 3.98, 2.61]
        },
        {
            name: '实际用水量',
            data: [14.86, 2.21, 5.77, 1.03, 3.7, 2.49]
        },
        {
            type: 'line',
            name: '下降率',
            data: [12.97, -6.73, 10.0, 9.09, 7.1, 4.65]
        }
    ],
    axis: ['棉花', '玉米', '小麦', '红枣', '苹果', '葡萄']
}

// 作业面积统计
const data4 = [
    {
        region: '内蒙古',
        produce: '玉米',
        source: '自销',
        price: '8675300'
    },
    {
        region: '苏州',
        produce: '玉米',
        source: '自销',
        price: '6150000'
    },
    {
        region: '重庆',
        produce: '玉米',
        source: '自销',
        price: '5249000'
    },
    {
        region: '开封',
        produce: '玉米',
        source: '自销',
        price: '5239500'
    },
    {
        region: '北京',
        produce: '玉米',
        source: '自销',
        price: '3375000'
    },
    {
        region: '成都',
        produce: '玉米',
        source: '自销',
        price: '2755100'
    },
    {
        region: '孝感',
        produce: '玉米',
        source: '自销',
        price: '1312000'
    }
]

// 作业任务统计
const data5 = [
    {
        region: '内蒙古',
        produce: '玉米',
        source: '自销',
        price: '8675300'
    },
    {
        region: '苏州',
        produce: '玉米',
        source: '自销',
        price: '6150000'
    },
    {
        region: '重庆',
        produce: '玉米',
        source: '自销',
        price: '5249000'
    },
    {
        region: '开封',
        produce: '玉米',
        source: '自销',
        price: '5239500'
    },
    {
        region: '北京',
        produce: '玉米',
        source: '自销',
        price: '3375000'
    },
    {
        region: '成都',
        produce: '玉米',
        source: '自销',
        price: '2755100'
    },
    {
        region: '孝感',
        produce: '玉米',
        source: '自销',
        price: '1312000'
    }
]

// 跨区作业类型占比
const data6 = [
    {
        name: '未种植',
        value: 170800,
        unit: '亩'
    },
    {
        name: '已种植',
        value: 2965000,
        unit: '亩'
    }
]

module.exports = { data1, data2, data3, data4, data5, data6 }
