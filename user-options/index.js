const { data1, data2, data3, data4, data5, data6, data7, data8 } = require('../user-data/index.js')

module.exports = {
    name: '桑蚕产业资源一张图',
    key: 'resources',
    prefix: '',
    layout: [
        {
            width: '26.08%',
            height: '19.35%',
            children: [
                {
                    name: '资源状况',
                    key: 'base-status',
                    height: '100%',
                    copy: '',
                    copyData: data1
                }
            ]
        },
        {
            width: '43.47%',
            height: '19.35%',
            children: [
                {
                    name: '今年计划与进展',
                    key: 'base-plan',
                    height: '100%',
                    copy: '',
                    copyData: data2
                }
            ]
        },
        {
            width: '30.43%',
            height: '100%',
            children: [
                {
                    name: '设备统计',
                    key: 'base-devices',
                    height: '100%',
                    copy: '',
                    copyData: data3
                }
            ]
        }
    ]
}
