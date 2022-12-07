<template>
    <!-- 场所异常打卡统计 -->
    <app-card title="场所异常打卡统计">
        <div class="risk__model-abnormal-place">
            <barx-multiple-line :bar-width="barWidth" :color="color" :data="data" :opt="opt" show-background />
        </div>
    </app-card>
</template>

<script lang="ts" setup>
import { IModelAbnormalPlace } from '@/api/risk/index';

const data = await IModelAbnormalPlace()

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
.risk__model-abnormal-place {
    height: 100%
}
</style>