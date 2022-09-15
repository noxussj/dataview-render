const { data1, data2, data3, data4, data5, data6, data7 } = require('../user-data/index.js')

module.exports = {
    name: '桑蚕产业管理一张图',
    key: 'garden',
    prefix: 'manage',
    layout: [
        {
            width: '26.08%',
            height: '19.35%',
            children: [
                {
                    name: '气象站',
                    key: 'base-weather',
                    copyData: data1
                },
                {
                    name: '土壤监测',
                    key: 'base-soil',
                    copyData: data2
                },
                {
                    name: '本月桑园虫情预警',
                    key: 'base-warning',
                    copyData: data3
                },
                {
                    name: '24小时孢子捕捉',
                    key: 'base-spore',
                    copyData: data4
                },
                {
                    name: '设备监测',
                    key: 'base-devices',
                    copyData: data5
                }
            ]
        }
    ]
}
