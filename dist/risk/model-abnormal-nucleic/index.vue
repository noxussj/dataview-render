<template>
    <!-- 核酸异常统计 -->
    <app-card title="核酸异常统计">
        <div class="risk__model-abnormal-nucleic">
            <line-simple area-gradient :color="color" :data="data" :opt="opt" smooth />
        </div>
    </app-card>
</template>

<script lang="ts" setup>
import { IModelAbnormalNucleic } from '@/api/risk/index';

const data = await IModelAbnormalNucleic()

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
.risk__model-abnormal-nucleic {
    height: 100%
}
</style>
