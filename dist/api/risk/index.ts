import request from '@/plugins/axios'

/**
 * 申报统计-来源地
 */
export const IModelDeclareSource: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"申报数","data":[100,200,300,400,500,600,700],"unit":"人"},{"name":"核查数","data":[100,400,500,600,200,300,700],"type":"line","unit":"人"},{"name":"核查率","data":[10,40,50,60,20,30,70],"type":"line","unit":"%"}],"axis":["中山","广州","深圳","惠州","广西","潮汕","云浮"]}

        return dist
    })
}

/**
 * 申报统计-目的地
 */
export const IModelDeclareDest: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"申报数","data":[100,200,300,400,500],"unit":"人"},{"name":"核查数","data":[100,400,500,600,200],"unit":"人"},{"name":"核查率","data":[10,40,50,60,20],"type":"line","unit":"%"}],"axis":["后环社区","前环社区","唐家社区","唐中社区","唐乐社区"]}

        return dist
    })
}

/**
 * 行程卡打卡统计
 */
export const IModelSignTravel: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"人数","data":[100,200,300,400,500,600,700],"unit":"人"}],"axis":["中山","广州","深圳","惠州","广西","潮汕","云浮"]}

        return dist
    })
}

/**
 * 异常打卡统计
 */
export const IModelSignAbnormal: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"红码","data":[100,200,300,400,500,600,700],"unit":"人"},{"name":"黄码","data":[100,200,500,600,700,300,400],"unit":"人"}],"axis":["00:30","01:00","01:30","02:00","02:30","03:00","03:30"]}

        return dist
    })
}

/**
 * 场所异常打卡统计
 */
export const IModelAbnormalPlace: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"黄码","data":[100,200,300,400,500,600,700],"unit":"人"},{"name":"红码","data":[100,400,500,600,200,300,700],"unit":"人"}],"axis":["场所A","场所B","场所C","场所D","场所E","场所F","场所G"]}

        return dist
    })
}

/**
 * 核酸异常统计
 */
export const IModelAbnormalNucleic: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"红码","data":[100,200,300,400,500,600,700],"unit":"人"}],"axis":["00:30","01:00","01:30","02:00","02:30","03:00","03:30"]}

        return dist
    })
}

/**
 * 统计模块
 */
export const IModelCount: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = [{"name":"风险区域申报总数","value":256,"unit":"人数"},{"name":"风险场所","value":4,"unit":"个"},{"name":"红码","value":4,"unit":"个"},{"name":"黄码","value":4,"unit":"个"},{"name":"异常核酸监测","value":256,"unit":"人数"}]

        return dist
    })
}
