<template>
    <!-- 年作业量农机统计 -->
    <div class="overview__machine__survey__machine-use">
        <barx-gradual
            :bar-color="[
                ['rgba(0, 132, 254, 1)', 'rgba(0, 247, 255, 1)'],
                ['rgba(255, 93, 21, 1)', 'rgba(255, 193, 63, 1)']
            ]"
            :data="data"
            layout-legend="bottom"
            :line-color="['rgba(183, 81, 255, 1)']"
            :option="{ yAxisName: '金额（万元）', yAxisName2: '同比增长率（%）' }"
        ></barx-gradual>
    </div>
</template>

<script lang="ts" setup>
import { IMachineUse } from '@/api/overview/machine/survey/index';

const data = await IMachineUse()
</script>

<style lang="scss" scoped>
.overview__machine__survey__machine-use {
    height: 100%
}
</style>
