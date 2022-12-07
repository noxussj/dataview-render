<template>
    <!-- 异常打卡统计 -->
    <app-card title="异常打卡统计">
        <div class="risk__model-sign-abnormal">
            <line-simple area-gradient :color="color" :data="data" :opt="opt" smooth />
        </div>
    </app-card>
</template>

<script lang="ts" setup>
import { IModelSignAbnormal } from '@/api/risk/index';

const data = await IModelSignAbnormal()

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
.risk__model-sign-abnormal {
    height: 100%
}
</style>
