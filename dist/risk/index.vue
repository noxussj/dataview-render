<template>
    <!-- 风险分析 -->
    <div class='risk'>
        <to-layout height='100%' :orient="'horizontal'">
            <model :height="'19.35%'" :orient="'vertical'" :width="'26.08%'">
                <sub-model :height="''" title='申报统计-来源地' :width="'100%'">
                    <model-declare-source></model-declare-source>
                </sub-model>
                <sub-model :height="''" title='申报统计-目的地' :width="'100%'">
                    <model-declare-dest></model-declare-dest>
                </sub-model>
                <sub-model :height="''" title='行程卡打卡统计' :width="'100%'">
                    <model-sign-travel></model-sign-travel>
                </sub-model>
                <sub-model :height="''" title='异常打卡统计' :width="'100%'">
                    <model-sign-abnormal></model-sign-abnormal>
                </sub-model>
                <sub-model :height="''" title='场所异常打卡统计' :width="'100%'">
                    <model-abnormal-place></model-abnormal-place>
                </sub-model>
                <sub-model :height="''" title='核酸异常统计' :width="'100%'">
                    <model-abnormal-nucleic></model-abnormal-nucleic>
                </sub-model>
                <sub-model :height="''" title='统计模块' :width="'100%'">
                    <model-count></model-count>
                </sub-model>
            </model>
        </to-layout>
    </div>
</template>

<script lang="ts" setup>
import ModelDeclareSource from './model-declare-source/index.vue' // 申报统计-来源地
import ModelDeclareDest from './model-declare-dest/index.vue' // 申报统计-目的地
import ModelSignTravel from './model-sign-travel/index.vue' // 行程卡打卡统计
import ModelSignAbnormal from './model-sign-abnormal/index.vue' // 异常打卡统计
import ModelAbnormalPlace from './model-abnormal-place/index.vue' // 场所异常打卡统计
import ModelAbnormalNucleic from './model-abnormal-nucleic/index.vue' // 核酸异常统计
import ModelCount from './model-count/index.vue' // 统计模块
</script>

<style lang="scss">
.risk {
    height: 100%;

    .block__layout {
        align-items: flex-end;
    }
}
</style>
