import request from '@/plugins/axios'

/**
 * 
 */
export const ICount: any = (param: object) => {
    return request({ url: '', param: param }, async (res: any) => {
        const dist: any = [{"name":"实际耕地面积","value":1.06,"unit":"亿亩"},{"name":"实际耕地面积","value":1.06,"unit":"亿亩"}]

        return dist
    })
}

/**
 * 当前使用状态统计
 */
export const IVehicleStatus: any = (param: object) => {
    return request({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"种植面积","data":[3752.85,1576.58,1603.52,620.2425,102.9645,184.452]}],"axis":["棉花","玉米","小麦","红枣","苹果","葡萄"]}

        return dist
    })
}

/**
 * 农机类型统计
 */
export const IMachineType: any = (param: object) => {
    return request({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"种植面积","data":[3752.85,1576.58,1603.52,620.2425,102.9645,184.452]}],"axis":["棉花","玉米","小麦","红枣","苹果","葡萄"]}

        return dist
    })
}

/**
 * 年作业量农机统计
 */
export const IMachineUse: any = (param: object) => {
    return request({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"种植面积","data":[3752.85,1576.58,1603.52,620.2425,102.9645,184.452]}],"axis":["棉花","玉米","小麦","红枣","苹果","葡萄"]}

        return dist
    })
}

/**
 * 
 */
export const ICount2: any = (param: object) => {
    return request({ url: '', param: param }, async (res: any) => {
        const dist: any = [{"name":"实际耕地面积","value":1.06,"unit":"亿亩"},{"name":"实际耕地面积","value":1.06,"unit":"亿亩"}]

        return dist
    })
}

/**
 * 新疆农机数量分布统计
 */
export const IMachineDist: any = (param: object) => {
    return request({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"计划用水量","data":[17.08,2.07,6.41,1.13,3.98,2.61]},{"name":"实际用水量","data":[14.86,2.21,5.77,1.03,3.7,2.49]}],"axis":["棉花","玉米","小麦","红枣","苹果","葡萄"]}

        return dist
    })
}

/**
 * 农机厂家占比分析
 */
export const IFactoryDist: any = (param: object) => {
    return request({ url: '', param: param }, async (res: any) => {
        const dist: any = [{"name":"雷沃","value":10},{"name":"东方红","value":10},{"name":"久保田","value":10}]

        return dist
    })
}

/**
 * 总动力/配套总动力统计
 */
export const ITotalPower: any = (param: object) => {
    return request({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"计划用水量","data":[17.08,2.07,6.41,1.13,3.98,2.61]}],"axis":["棉花","玉米","小麦","红枣","苹果","葡萄"]}

        return dist
    })
}
