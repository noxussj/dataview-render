<template>
    <!-- 历年作业面积统计 -->
    <div class="farm-task__historical-area"></div>
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
