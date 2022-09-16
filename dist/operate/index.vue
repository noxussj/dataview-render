<template>
    <!-- 桑蚕产业运营一张图 -->
    <div class='operate'>
        <to-layout height='100%' :orient="'horizontal'">
            <model :height="'19.35%'" :orient="'vertical'" :width="'26.08%'">
                <sub-model :height="''" title='小程序实时用户统计' :width="'100%'">
                    <base-applets></base-applets>
                </sub-model>
                <sub-model :height="''" title='趋势分析' :width="'100%'">
                    <base-trend></base-trend>
                </sub-model>
                <sub-model :height="''" title='专家咨询服务统计' :width="'100%'">
                    <base-service-count></base-service-count>
                </sub-model>
                <sub-model :height="''" title='咨询关键词统计TOP5' :width="'100%'">
                    <base-keyword></base-keyword>
                </sub-model>
                <sub-model :height="''" title='资询趋势分析' :width="'100%'">
                    <base-service-trend></base-service-trend>
                </sub-model>
                <sub-model :height="''" title='用户反馈分析' :width="'100%'">
                    <base-feedback></base-feedback>
                </sub-model>
                <sub-model :height="''" title='政策资讯统计' :width="'100%'">
                    <base-policy></base-policy>
                </sub-model>
                <sub-model :height="''" title='技术教程统计' :width="'100%'">
                    <base-skill></base-skill>
                </sub-model>
                <sub-model :height="''" title='主题统计TOP5' :width="'100%'">
                    <base-theme></base-theme>
                </sub-model>
                <sub-model :height="''" title='收藏、点赞、分享统计' :width="'100%'">
                    <base-share></base-share>
                </sub-model>
            </model>
        </to-layout>
    </div>
</template>

<script lang="ts" setup>
import BaseApplets from './base-applets/index.vue' // 小程序实时用户统计
import BaseTrend from './base-trend/index.vue' // 趋势分析
import BaseServiceCount from './base-service-count/index.vue' // 专家咨询服务统计
import BaseKeyword from './base-keyword/index.vue' // 咨询关键词统计TOP5
import BaseServiceTrend from './base-service-trend/index.vue' // 资询趋势分析
import BaseFeedback from './base-feedback/index.vue' // 用户反馈分析
import BasePolicy from './base-policy/index.vue' // 政策资讯统计
import BaseSkill from './base-skill/index.vue' // 技术教程统计
import BaseTheme from './base-theme/index.vue' // 主题统计TOP5
import BaseShare from './base-share/index.vue' // 收藏、点赞、分享统计
</script>

<style lang="scss">
.operate {
    height: 100%;

    .block__layout {
        align-items: flex-end;
    }
}
</style>
