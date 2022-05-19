<template>
    <!-- 农机作业 -->
    <div class='overview__machine__subsidy'>
        <to-layout height='100%' :orient="'horizontal'">
            <model :height="'100%'" :orient="'vertical'" :width="'27.5%'">
                <sub-model :height="'0%'" title='' :width="'100%'">
                    <count></count>
                </sub-model>
                <sub-model :height="'48%'" title='地区补贴金额统计' :width="'100%'">
                    <region-amount></region-amount>
                </sub-model>
                <sub-model :height="'52%'" title='农机类型补贴统计' :width="'100%'">
                    <machine-type></machine-type>
                </sub-model>
            </model>
            <model :height="'0%'" :orient="'vertical'" :width="'45%'">
            </model>
            <model :height="'100%'" :orient="'vertical'" :width="'27.5%'">
                <sub-model :height="'0%'" title='' :width="'100%'">
                    <count2></count2>
                </sub-model>
                <sub-model :height="'48%'" title='作业任务统计' :width="'100%'">
                    <job-task></job-task>
                </sub-model>
                <sub-model :height="'52%'" title='补贴进度统计' :width="'100%'">
                    <progress-count></progress-count>
                </sub-model>
            </model>
        </to-layout>
    </div>
</template>

<script lang="ts" setup>
import Count from './count.vue' // 
import RegionAmount from './region-amount.vue' // 地区补贴金额统计
import MachineType from './machine-type.vue' // 农机类型补贴统计
import Count2 from './count2.vue' // 
import JobTask from './job-task.vue' // 作业任务统计
import ProgressCount from './progress-count.vue' // 补贴进度统计
</script>

<style lang="scss">
.overview__machine__subsidy {
    height: 100%;

    .block__layout {
        align-items: flex-end;
    }
}
</style>
