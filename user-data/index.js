// 小程序实时用户统计
export const data1 = {
    updateDateTime: '2022-08-12 14:27:23',
    count: [
        {
            name: '访问人数',
            value: 321,
            unit: '人',
            lastDay: 233,
            lastWeek: -1.1,
            key: 'visit'
        },
        {
            name: '新用户数',
            value: 3456,
            unit: '人',
            lastDay: 233,
            lastWeek: -1.1,
            key: 'new'
        },
        {
            name: '累积用户',
            value: 3456,
            unit: '万人',
            lastDay: 233,
            lastWeek: -1.1,
            key: 'accumulation'
        }
    ]
}

// 趋势分析
export const data2 = {
    series: [
        {
            name: '访问次数（次）',
            data: [100, 200, 300, 400, 500, 600, 700]
        },
        {
            name: '访问人数（人）',
            data: [100, 400, 500, 600, 200, 300, 700]
        },
        {
            name: '新增用户（个）',
            data: [100, 400, 500, 600, 200, 300, 700]
        }
    ],
    axis: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07']
}

// 专家咨询服务统计
export const data3 = [
    {
        name: '服务用户',
        value: 3452,
        unit: '个'
    },
    {
        name: '覆盖率',
        value: 92,
        unit: '%'
    }
]

// 咨询关键词统计TOP5
export const data4 = {
    series: [18, 17, 15, 13, 2],
    axis: ['环境监测', '饲育技术', '消毒', '预防化肥', '施肥']
}

// 资询趋势分析
export const data5 = {
    series: [
        {
            name: '咨询量（次）',
            data: [100, 200, 300, 400, 500, 600, 700]
        },
        {
            name: '回复量（次）',
            data: [100, 400, 500, 600, 200, 300, 700]
        }
    ],
    axis: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07']
}

// 用户反馈分析
export const data6 = [
    {
        name: '觉得有用',
        value: 46
    },
    {
        name: '觉得没用',
        value: 132
    }
]

// 政策资讯统计
export const data7 = {
    count: 123,
    echarts: [
        {
            name: '省级政策',
            value: 15,
            unit: '篇'
        },
        {
            name: '市级政策',
            value: 46,
            unit: '篇'
        },
        {
            name: '县级政策',
            value: 132,
            unit: '篇'
        }
    ]
}

// 技术教程统计
export const data8 = [
    {
        name: '技术教程共计',
        value: 353,
        unit: '篇'
    }
]

// 主题统计TOP5
export const data9 = {
    series: [18, 17, 15, 13, 2],
    axis: ['环境监测', '饲育技术', '消毒', '预防化肥', '施肥']
}

// 收藏、点赞、分享统计
export const data10 = {
    series: [59, 39, 2],
    axis: ['分享用户占比', '点赞用户占比', '收藏用户占比']
}
