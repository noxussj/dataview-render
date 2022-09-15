<template>
    <!-- 设备监测 -->
    <div class="managegarden__base-devices">
        base-devices
    </div>
</template>

<script lang="ts" setup>
import { IBaseDevices } from '@/api/manage/garden/index';

const data = await IBaseDevices()
</script>

<style lang="scss" scoped>
.managegarden__base-devices {
    height: 100%
}
</style>
