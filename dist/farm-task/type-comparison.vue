<template>
    <!-- 各作业类型数据对比 -->
    <div class="farm-task__type-comparison"></div>
</template>

<script lang="ts" setup>
import { ITypeComparison } from '@/api/farm-task/index';

const data = await ITypeComparison()
</script>

<style lang="scss" scoped>
.farm-task__type-comparison {
    height: 100%
}
</style>
