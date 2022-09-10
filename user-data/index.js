// 单位
const data1 = [
    {
        name: '石坝村（小蚕房）',
        value: '1'
    },
    {
        name: '鱼塘（小蚕房）',
        value: '2'
    },
    {
        name: '大连村（小蚕房）',
        value: '3'
    },
    {
        name: '朱场（大蚕房）',
        value: '4'
    },
    {
        name: '永华（大蚕房）',
        value: '5'
    },
    {
        name: '桃坪（大蚕房）',
        value: '6'
    },
    {
        name: '石坝村（桑园）',
        value: '7'
    },
    {
        name: '永华（桑园）',
        value: '8'
    },
    {
        name: '桃坪（桑园）',
        value: '9'
    }
]

// 蚕房环境监测
const data2 = [
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
        name: '一氧化碳',
        value: '0',
        unit: 'ppm',
        reference: '0-20ppm',
        key: 'monoxide'
    },
    {
        name: '二氧化碳',
        value: '32',
        unit: 'ppm',
        reference: '0-20ppm',
        key: 'dioxide'
    },
    {
        name: '二氧化硫',
        value: '2000',
        unit: 'ppm',
        reference: '0-20ppm',
        key: 'sulfur'
    },
    {
        name: '氨气',
        value: '12',
        unit: 'ppm',
        reference: '0-20ppm',
        key: 'ammonia'
    }
]

// 设备监测（统计）
const data3 = {
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

// 预警记录
const data4 = [
    {
        name: '温度过高',
        dateTime: '2022-08-19  12:09:12'
    },
    {
        name: '二氧化流超标',
        dateTime: '2022-08-19  12:09:12'
    },
    {
        name: '温度超标预警',
        dateTime: '2022-08-19  12:09:12'
    },
    {
        name: '二氧化碳过高',
        dateTime: '2022-08-19  12:09:12'
    },
    {
        name: '温度过高',
        dateTime: '2022-08-19  12:09:12'
    },
    {
        name: '二氧化流超标',
        dateTime: '2022-08-19  12:09:12'
    },
    {
        name: '温度超标预警',
        dateTime: '2022-08-19  12:09:12'
    },
    {
        name: '二氧化碳过高',
        dateTime: '2022-08-19  12:09:12'
    },
    {
        name: '二氧化流超标',
        dateTime: '2022-08-19  12:09:12'
    },
    {
        name: '温度超标预警',
        dateTime: '2022-08-19  12:09:12'
    },
    {
        name: '二氧化碳过高',
        dateTime: '2022-08-19  12:09:12'
    }
]

// 小蚕房监控建议
const data5 = {
    status: '每天2-3次，每次10分钟以上，给桑前进行。',
    table: [
        {
            age: '1',
            temperature: '27-28',
            difference: '0.5-1'
        },
        {
            age: '2',
            temperature: '27-28',
            difference: '1-1.5'
        },
        {
            age: '3',
            temperature: '27-28',
            difference: '1.5-2'
        }
    ]
}

// 大蚕房监控建议
const data6 = [
    {
        age: '4',
        temperature: '27-28',
        difference: '0.5-1',
        status: '每天3-4次'
    },
    {
        age: '5',
        temperature: '27-28',
        difference: '1-1.5',
        status: '每天3-4次'
    }
]

module.exports = { data1, data2, data3, data4, data5, data6 }
