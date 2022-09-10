<template>
    <!-- 蚕房环境监测 -->
    <div class="manage__base-count">
        base-count
    </div>
</template>

<script lang="ts" setup>
import { IBaseCount } from '@/api/manage/index';

const data = await IBaseCount()
</script>

<style lang="scss" scoped>
.manage__base-count {
    height: 100%
}
</style>
