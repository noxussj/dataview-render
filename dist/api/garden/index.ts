import request from '@/plugins/axios'

/**
 * 气象站
 */
export const IBaseWeather: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = [{"name":"温度","value":"30.5","unit":"­°C","reference":"25.5-28.5­°C","key":"temperature"},{"name":"湿度","value":"70.8","unit":"%","reference":"60.5-80.5%","key":"humidity"},{"name":"光照强度","value":"15.0","unit":"WLux","reference":"10.0-20.0WLux","key":"beam"},{"name":"风速","value":"2","unit":"m/s","reference":"0-8m/s","key":"windSpeed"},{"name":"大气压","value":"1210","unit":"hPa","reference":"300-1250hPa","key":"pressure"},{"name":"降雨量","value":"22","unit":"mm/h","reference":"0-22mm/s","key":"rainfall"}]

        return dist
    })
}

/**
 * 土壤监测
 */
export const IBaseSoil: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = [{"name":"土壤温度","value":"27.1","unit":"­°C","reference":"25.5-28.5­°C","key":"humidity"},{"name":"土壤湿度","value":"20","unit":"­%","reference":"60.5-80.5%","key":"humidity"},{"name":"土壤EC值","value":"1.889","unit":"ds/m","reference":"0-1.999ds/m","key":"ec"}]

        return dist
    })
}

/**
 * 本月桑园虫情预警
 */
export const IBaseWarning: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"count":{"count":"123","catch":"2134","warningtype":"桑瘿蚊、桑螟、桑粉虱","warningCount":"5"},"echarts":[{"name":"桑粉虱","value":"15"},{"name":"桑螟","value":"132"},{"name":"桑瘿蚊","value":"46"},{"name":"其他","value":"12"}]}

        return dist
    })
}

/**
 * 24小时孢子捕捉
 */
export const IBaseSpore: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"content":[{"name":"采集流量","value":"0.5","unit":"m/s"},{"name":"采集时间","value":"1-24","unit":"小时"},{"name":"抽气时间","value":"1-24","unit":"小时"},{"name":"培养仓温设定","value":"25 ","unit":"°C"}],"images":[{"name":"桑园捕捉记录1","url":""},{"name":"桑园捕捉记录2","url":""},{"name":"桑园捕捉记录3","url":""}]}

        return dist
    })
}

/**
 * 设备监测
 */
export const IBaseDevices: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"count":[{"name":"全部","value":"324"},{"name":"蚕房监测设备","value":"123"},{"name":"监控摄像","value":"123"}],"table":[{"name":"XXX设备","value":"1","label":"正常"},{"name":"XXX设备","value":"2","label":"离线"},{"name":"XXX设备","value":"3","label":"未连接"},{"name":"XXX设备","value":"1","label":"正常"},{"name":"XXX设备","value":"2","label":"离线"},{"name":"XXX设备","value":"3","label":"未连接"},{"name":"XXX设备","value":"1","label":"正常"},{"name":"XXX设备","value":"2","label":"离线"},{"name":"XXX设备","value":"3","label":"未连接"},{"name":"XXX设备","value":"3","label":"未连接"}]}

        return dist
    })
}
