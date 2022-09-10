// 气象站
const data1 = [
    {
        name: '温度',
        value: '30.5',
        unit: '­°C',
        reference: '25.5-28.5­°C',
        key: 'temperature'
    },
    {
        name: '湿度',
        value: '70.8',
        unit: '%',
        reference: '60.5-80.5%',
        key: 'humidity'
    },
    {
        name: '光照强度',
        value: '15.0',
        unit: 'WLux',
        reference: '10.0-20.0WLux',
        key: 'beam'
    },
    {
        name: '风速',
        value: '2',
        unit: 'm/s',
        reference: '0-8m/s',
        key: 'windSpeed'
    },
    {
        name: '大气压',
        value: '1210',
        unit: 'hPa',
        reference: '300-1250hPa',
        key: 'pressure'
    },
    {
        name: '降雨量',
        value: '22',
        unit: 'mm/h',
        reference: '0-22mm/s',
        key: 'rainfall'
    }
]

// 土壤监测
const data2 = [
    {
        name: '土壤温度',
        value: '27.1',
        unit: '­°C',
        reference: '25.5-28.5­°C',
        key: 'humidity'
    },
    {
        name: '土壤湿度',
        value: '20',
        unit: '­%',
        reference: '60.5-80.5%',
        key: 'humidity'
    },
    {
        name: '土壤EC值',
        value: '1.889',
        unit: 'ds/m',
        reference: '0-1.999ds/m',
        key: 'ec'
    }
]

// 本月桑园虫情预警
const data3 = {
    count: {
        count: '123', // 预警总数
        catch: '2134', // 捕捉量
        warningtype: '桑瘿蚊、桑螟、桑粉虱', // 预警总数
        warningCount: '5' // 预警类型统计
    },
    echarts: [
        {
            name: '桑粉虱',
            value: '15'
        },
        {
            name: '桑螟',
            value: '132'
        },
        {
            name: '桑瘿蚊',
            value: '46'
        },
        {
            name: '其他',
            value: '12'
        }
    ]
}

// 24小时孢子捕捉
const data4 = {
    content: [
        {
            name: '采集流量',
            value: '0.5',
            unit: 'm/s'
        },
        {
            name: '采集时间',
            value: '1-24',
            unit: '小时'
        },
        {
            name: '抽气时间',
            value: '1-24',
            unit: '小时'
        },
        {
            name: '培养仓温设定',
            value: '25 ',
            unit: '°C'
        }
    ],
    images: [
        {
            name: '桑园捕捉记录1',
            url: ''
        },
        {
            name: '桑园捕捉记录2',
            url: ''
        },
        {
            name: '桑园捕捉记录3',
            url: ''
        }
    ]
}

// 设备监测
const data5 = {
    count: [
        {
            name: '全部',
            value: '324'
        },
        {
            name: '蚕房监测设备',
            value: '123'
        },
        {
            name: '监控摄像',
            value: '123'
        }
    ],
    table: [
        {
            name: 'XXX设备',
            value: '1',
            label: '正常'
        },
        {
            name: 'XXX设备',
            value: '2',
            label: '离线'
        },
        {
            name: 'XXX设备',
            value: '3',
            label: '未连接'
        },
        {
            name: 'XXX设备',
            value: '1',
            label: '正常'
        },
        {
            name: 'XXX设备',
            value: '2',
            label: '离线'
        },
        {
            name: 'XXX设备',
            value: '3',
            label: '未连接'
        },
        {
            name: 'XXX设备',
            value: '1',
            label: '正常'
        },
        {
            name: 'XXX设备',
            value: '2',
            label: '离线'
        },
        {
            name: 'XXX设备',
            value: '3',
            label: '未连接'
        },
        {
            name: 'XXX设备',
            value: '3',
            label: '未连接'
        }
    ]
}

module.exports = { data1, data2, data3, data4, data5 }
