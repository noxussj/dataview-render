<template>
    <!-- 当前使用状态统计 -->
    <div class="overview__machine__survey__vehicle-status">
        empty
    </div>
</template>

<script lang="ts" setup>
import { IVehicleStatus } from '@/api/overview/machine/survey/index';

const data = await IVehicleStatus()
</script>

<style lang="scss" scoped>
.overview__machine__survey__vehicle-status {
    height: 100%
}
</style>
