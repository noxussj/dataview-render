<template>
    <!-- 申报统计-来源地 -->
    <app-card title="申报统计-来源地">
        <div class="risk__model-declare-source">
            <barx-multiple-line :bar-width="barWidth" :color="color" :data="data" :opt="opt" show-background />
        </div>
    </app-card>
</template>

<script lang="ts" setup>
import { IModelDeclareSource } from '@/api/risk/index';

const data = await IModelDeclareSource()

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
.risk__model-declare-source {
    height: 100%
}
</style>