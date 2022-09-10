<template>
    <!-- 预警记录 -->
    <div class="manage__base-warning">
        base-warning
    </div>
</template>

<script lang="ts" setup>
import { IBaseWarning } from '@/api/manage/index';

const data = await IBaseWarning()
</script>

<style lang="scss" scoped>
.manage__base-warning {
    height: 100%
}
</style>
