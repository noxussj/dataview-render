<template>
    <!-- 跨区作业类型占比 -->
    <div class="farm-task__cross-zone"></div>
</template>

<script lang="ts" setup>
import { ICrossZone } from '@/api/farm-task/index';

const data = await ICrossZone()
</script>

<style lang="scss" scoped>
.farm-task__cross-zone {
    height: 100%
}
</style>
