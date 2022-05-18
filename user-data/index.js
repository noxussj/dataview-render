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
        region: '吉林',
        produce: '葡萄',
        source: '自销',
        price: '53154789.00 '
    },
    {
        region: '石家庄',
        produce: '棉花',
        source: '自销',
        price: '1203950.00 '
    },
    {
        region: '沈阳',
        produce: '小麦',
        source: '自销',
        price: '894657.00 '
    },
    {
        region: '东莞',
        produce: '棉花',
        source: '自销',
        price: '352160.00 '
    },
    {
        region: '义乌',
        produce: '棉花',
        source: '自销',
        price: '513710.00 '
    },
    {
        region: '上海',
        produce: '苹果',
        source: '自销',
        price: '75461332.00 '
    }
]

// 作业任务统计
const data5 = [
    {
        region: '吉林',
        produce: '葡萄',
        source: '自销',
        price: '53154789.00 '
    },
    {
        region: '石家庄',
        produce: '棉花',
        source: '自销',
        price: '1203950.00 '
    },
    {
        region: '沈阳',
        produce: '小麦',
        source: '自销',
        price: '894657.00 '
    },
    {
        region: '东莞',
        produce: '棉花',
        source: '自销',
        price: '352160.00 '
    },
    {
        region: '义乌',
        produce: '棉花',
        source: '自销',
        price: '513710.00 '
    },
    {
        region: '上海',
        produce: '苹果',
        source: '自销',
        price: '75461332.00 '
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
