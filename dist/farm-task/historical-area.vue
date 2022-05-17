<template>
    <!-- 历年作业面积统计 -->
    <div class="farm-task__historical-area">
        <barx-gradual :bar-color="[['rgba(32, 93, 219, 1)', 'rgba(27, 223, 252, 1)']]" :data="data" :line-color="['rgba(255, 138, 0, 1)']" :option="{ yAxisTop: 40, yAxisName: '数量（万亩）', yAxisName2: '同比增长率（%）' }" show-background @handleClick="redirect"></barx-gradual>
    </div>
</template>

<script lang="ts" setup>
import { IHistoricalArea } from '@/api/farm-task/index';

const data = await IHistoricalArea()
</script>

<style lang="scss" scoped>
.farm-task__historical-area {
    height: 100%
}
</style>
