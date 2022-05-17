<template>
    <!-- 各作业类型数据对比 -->
    <div class="farm-task__type-comparison">
        <barx-gradual :bar-color="[['rgba(32, 93, 219, 1)', 'rgba(27, 223, 252, 1)']]" :data="data" :line-color="['rgba(255, 138, 0, 1)']" :option="{ yAxisTop: 40, yAxisName: '数量（万亩）', yAxisName2: '同比增长率（%）' }" show-background @handleClick="redirect"></barx-gradual>
    </div>
</template>

<script lang="ts" setup>
import { ITypeComparison } from '@/api/farm-task/index';

const data = await ITypeComparison()
</script>

<style lang="scss" scoped>
.farm-task__type-comparison {
    height: 100%
}
</style>
