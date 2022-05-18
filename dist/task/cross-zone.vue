<template>
    <!-- 跨区作业类型占比 -->
    <div class="task__cross-zone">
        <pie-simple :data="data" :show-label-line="false" :show-legend="true"></pie-simple>
    </div>
</template>

<script lang="ts" setup>
import { ICrossZone } from '@/api/task/index';

const data = await ICrossZone()
</script>

<style lang="scss" scoped>
.task__cross-zone {
    height: 100%
}
</style>
