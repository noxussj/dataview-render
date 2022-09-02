<template>
    <!-- 设备统计 -->
    <div class="resources__base-devices">
        base-devices
    </div>
</template>

<script lang="ts" setup>
import { IBaseDevices } from '@/api/resources/index';

const data = await IBaseDevices()
</script>

<style lang="scss" scoped>
.resources__base-devices {
    height: 100%
}
</style>
