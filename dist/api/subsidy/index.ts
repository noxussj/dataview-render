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
 * 地区补贴金额统计
 */
export const IRegionAmount: any = (param: object) => {
    return request({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"种植面积","data":[3752.85,1576.58,1603.52,620.2425,102.9645,184.452]},{"type":"line","name":"同比增长率","data":[-1.52,5.4,0.7,1.52,-18.09,-12.54]}],"axis":["棉花","玉米","小麦","红枣","苹果","葡萄"]}

        return dist
    })
}

/**
 * 农机类型补贴统计
 */
export const IMachineType: any = (param: object) => {
    return request({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"计划用水量","data":[17.08,2.07,6.41,1.13,3.98,2.61]},{"name":"实际用水量","data":[14.86,2.21,5.77,1.03,3.7,2.49]}],"axis":["棉花","玉米","小麦","红枣","苹果","葡萄"]}

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
 * 作业任务统计
 */
export const IJobTask: any = (param: object) => {
    return request({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"计划用水量","data":[17.08,2.07,6.41,1.13,3.98,2.61]},{"name":"实际用水量","data":[14.86,2.21,5.77,1.03,3.7,2.49]}],"axis":["棉花","玉米","小麦","红枣","苹果","葡萄"]}

        return dist
    })
}

/**
 * 补贴进度统计
 */
export const IProgressCount: any = (param: object) => {
    return request({ url: '', param: param }, async (res: any) => {
        const dist: any = [{"name":"除草剂","value":29954000,"unit":"元"},{"name":"杀虫剂","value":33872000,"unit":"元"},{"name":"杀菌剂","value":48978150,"unit":"元"},{"name":"杀线虫剂","value":22321800,"unit":"元"}]

        return dist
    })
}
