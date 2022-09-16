import request from '@/plugins/axios'

/**
 * 小程序实时用户统计
 */
export const IBaseApplets: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"updateDateTime":"2022-08-12 14:27:23","count":[{"name":"访问人数","value":321,"unit":"人","lastDay":233,"lastWeek":-1.1,"key":"visit"},{"name":"新用户数","value":3456,"unit":"人","lastDay":233,"lastWeek":-1.1,"key":"new"},{"name":"累积用户","value":3456,"unit":"万人","lastDay":233,"lastWeek":-1.1,"key":"accumulation"}]}

        return dist
    })
}

/**
 * 趋势分析
 */
export const IBaseTrend: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"访问次数（次）","data":[100,200,300,400,500,600,700]},{"name":"访问人数（人）","data":[100,400,500,600,200,300,700]},{"name":"新增用户（个）","data":[100,400,500,600,200,300,700]}],"axis":["08-01","08-02","08-03","08-04","08-05","08-06","08-07"]}

        return dist
    })
}

/**
 * 专家咨询服务统计
 */
export const IBaseServiceCount: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = [{"name":"服务用户","value":3452,"unit":"个"},{"name":"覆盖率","value":92,"unit":"%"}]

        return dist
    })
}

/**
 * 咨询关键词统计TOP5
 */
export const IBaseKeyword: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[18,17,15,13,2],"axis":["环境监测","饲育技术","消毒","预防化肥","施肥"]}

        return dist
    })
}

/**
 * 资询趋势分析
 */
export const IBaseServiceTrend: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[{"name":"咨询量（次）","data":[100,200,300,400,500,600,700]},{"name":"回复量（次）","data":[100,400,500,600,200,300,700]}],"axis":["08-01","08-02","08-03","08-04","08-05","08-06","08-07"]}

        return dist
    })
}

/**
 * 用户反馈分析
 */
export const IBaseFeedback: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = [{"name":"觉得有用","value":46},{"name":"觉得没用","value":132}]

        return dist
    })
}

/**
 * 政策资讯统计
 */
export const IBasePolicy: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"count":123,"echarts":[{"name":"省级政策","value":15,"unit":"篇"},{"name":"市级政策","value":46,"unit":"篇"},{"name":"县级政策","value":132,"unit":"篇"}]}

        return dist
    })
}

/**
 * 技术教程统计
 */
export const IBaseSkill: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = [{"name":"技术教程共计","value":353,"unit":"篇"}]

        return dist
    })
}

/**
 * 主题统计TOP5
 */
export const IBaseTheme: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[18,17,15,13,2],"axis":["环境监测","饲育技术","消毒","预防化肥","施肥"]}

        return dist
    })
}

/**
 * 收藏、点赞、分享统计
 */
export const IBaseShare: any = (param: object) => {
    return request.post({ url: '', param: param }, async (res: any) => {
        const dist: any = {"series":[59,39,2],"axis":["分享用户占比","点赞用户占比","收藏用户占比"]}

        return dist
    })
}
