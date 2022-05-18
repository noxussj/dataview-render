<template>
    <!-- 各作业类型数据对比 -->
    <div class="task__type-comparison">
        <barx-gradual :bar-color="[['rgba(0, 132, 254, 1)', 'rgba(0, 247, 255, 1)'],['rgba(255, 93, 21, 1)', 'rgba(255, 193, 63, 1)']]" :data="data"        layout-legend="bottom" :line-color="['rgba(183, 81, 255, 1)']" :option="{ yAxisName: '金额（万元）', yAxisName2: '同比增长率（%）' }"></barx-gradual>
    </div>
</template>

<script lang="ts" setup>
import { ITypeComparison } from '@/api/task/index';

const data = await ITypeComparison()
</script>

<style lang="scss" scoped>
.task__type-comparison {
    height: 100%
}
</style>
