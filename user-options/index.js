const { data1, data2, data3, data4, data5, data6, data7, data8, data9, data10 } = require('../user-data/index.js')

module.exports = {
    name: '桑蚕产业运营一张图',
    key: 'operate',
    prefix: '',
    layout: [
        {
            width: '26.08%',
            height: '19.35%',
            children: [
                {
                    name: '小程序实时用户统计',
                    key: 'base-applets',
                    copyData: data1
                },
                {
                    name: '趋势分析',
                    key: 'base-trend',
                    copyData: data2
                },
                {
                    name: '专家咨询服务统计',
                    key: 'base-service-count',
                    copyData: data3
                },
                {
                    name: '咨询关键词统计TOP5',
                    key: 'base-keyword',
                    copyData: data4
                },
                {
                    name: '资询趋势分析',
                    key: 'base-service-trend',
                    copyData: data5
                },
                {
                    name: '用户反馈分析',
                    key: 'base-feedback',
                    copyData: data6
                },
                {
                    name: '政策资讯统计',
                    key: 'base-policy',
                    copyData: data7
                },
                {
                    name: '技术教程统计',
                    key: 'base-skill',
                    copyData: data8
                },
                {
                    name: '主题统计TOP5',
                    key: 'base-theme',
                    copyData: data9
                },
                {
                    name: '收藏、点赞、分享统计',
                    key: 'base-share',
                    copyData: data10
                }
            ]
        }
    ]
}
