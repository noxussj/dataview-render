<template>
    <!-- 申报统计-目的地 -->
    <app-card title="申报统计-目的地">
        <div class="risk__model-declare-dest">
            <line-simple area-gradient :color="color" :data="data" :opt="opt" smooth />
        </div>
    </app-card>
</template>

<script lang="ts" setup>
import { IModelDeclareDest } from '@/api/risk/index';

const data = await IModelDeclareDest()

/**
 * 图表配置
 */
const color = []
const opt = {
    legend: {
        left: 'center'
    },
    yAxis: [{ name: '单位：人次' }]
}
</script>

<style lang="scss" scoped>
.risk__model-declare-dest {
    height: 100%
}
</style>
