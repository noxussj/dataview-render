<template>
    <!-- 作业任务统计 -->
    <div class="farm-task__job-tasks"></div>
</template>

<script lang="ts" setup>
import { IJobTasks } from '@/api/farm-task/index';

const data = await IJobTasks()
</script>

<style lang="scss" scoped>
.farm-task__job-tasks {
    height: 100%
}
</style>
