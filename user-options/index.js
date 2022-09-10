const { data1, data2, data3, data4, data5, data6, data7 } = require('../user-data/index.js')

module.exports = {
    name: '桑蚕产业管理一张图',
    key: 'manage',
    prefix: '',
    layout: [
        {
            width: '26.08%',
            height: '19.35%',
            children: [
                {
                    name: '单位',
                    key: 'base-company',
                    copyData: data1
                },
                {
                    name: '蚕房环境监测',
                    key: 'base-count',
                    copyData: data2
                },
                {
                    name: '设备监测',
                    key: 'base-devices',
                    copyData: data3
                },
                {
                    name: '预警记录',
                    key: 'base-warning',
                    copyData: data4
                },
                {
                    name: '小蚕房监控建议',
                    key: 'base-house-small',
                    copyData: data5
                },
                {
                    name: '大蚕房监控建议',
                    key: 'base-house-big',
                    copyData: data6
                }
            ]
        }
    ]
}
