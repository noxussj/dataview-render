<template>
    <!-- 设备监测 -->
    <div class="manage__base-devices">
        base-devices
    </div>
</template>

<script lang="ts" setup>
import { IBaseDevices } from '@/api/manage/index';

const data = await IBaseDevices()
</script>

<style lang="scss" scoped>
.manage__base-devices {
    height: 100%
}
</style>
