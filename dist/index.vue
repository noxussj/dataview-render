<template>
    <!-- 农机作业 -->
    <div class='src__views__home__model1'>
        <to-layout height='100%' :orient="'horizontal'">
            <model :height="'100%'" :orient="'vertical'" :width="'27.5%'">
                <sub-model :height="'25%'" title='' :width="'100%'">
                    <count />
                </sub-model>
                <sub-model :height="'35%'" title='历年作业面积统计' :width="'100%'">
                    <historical-area />
                </sub-model>
                <sub-model :height="'40%'" title='各作业类型数据对比' :width="'100%'">
                    <type-comparison />
                </sub-model>
            </model>
            <model :height="'100%'" :orient="'vertical'" :width="'45%'">
                <sub-model :height="'70%'" title='' :width="'100%'">
                    < />
                </sub-model>
                <sub-model :height="'30%'" title='作业面积统计' :width="'100%'">
                    <working-area />
                </sub-model>
            </model>
            <model :height="'100%'" :orient="'vertical'" :width="'27.5%'">
                <sub-model :height="'64%'" title='作业任务统计' :width="'100%'">
                    <job-tasks />
                </sub-model>
                <sub-model :height="'36%'" title='跨区作业类型占比' :width="'100%'">
                    <cross-zone />
                </sub-model>
            </model>
        </to-layout>
    </div>
</template>

<script lang="ts" setup>
import Count from './count.vue' // 
import HistoricalArea from './historical-area.vue' // 历年作业面积统计
import TypeComparison from './type-comparison.vue' // 各作业类型数据对比
import WorkingArea from './working-area.vue' // 作业面积统计
import JobTasks from './job-tasks.vue' // 作业任务统计
import CrossZone from './cross-zone.vue' // 跨区作业类型占比
</script>

<style lang="scss">
.src__views__home__model1 {
    height: 100%;
}
</style>
