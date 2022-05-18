<template>
    <!-- 跨区作业类型占比 -->
    <div class="task__cross-zone">
        <pie-rose3 :data="data"></pie-rose3>
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
