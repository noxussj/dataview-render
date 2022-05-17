<template>
    <!-- 作业面积统计 -->
    <div class="farm-task__working-area"></div>
</template>

<script lang="ts" setup>
import { IWorkingArea } from '@/api/farm-task/index';

const data = await IWorkingArea()
</script>

<style lang="scss" scoped>
.farm-task__working-area {
    height: 100%
}
</style>
