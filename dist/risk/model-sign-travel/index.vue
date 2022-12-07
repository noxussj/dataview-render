<template>
    <!-- 行程卡打卡统计 -->
    <app-card title="行程卡打卡统计">
        <div class="risk__model-sign-travel">
            <barx-multiple-line :bar-width="barWidth" :color="color" :data="data" :opt="opt" show-background />
        </div>
    </app-card>
</template>

<script lang="ts" setup>
import { IModelSignTravel } from '@/api/risk/index';

const data = await IModelSignTravel()

/**
 * 图表配置
 */
const barWidth = 20
const color = []
const opt = {
    legend: {
        left: 'center'
    },
    yAxis: [{ name: '单位：人数' }, { name: '佩戴比例：%' }]
}
</script>

<style lang="scss" scoped>
.risk__model-sign-travel {
    height: 100%
}
</style>