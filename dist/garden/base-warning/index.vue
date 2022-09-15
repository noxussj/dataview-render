<template>
    <!-- 本月桑园虫情预警 -->
    <div class="managegarden__base-warning">
        base-warning
    </div>
</template>

<script lang="ts" setup>
import { IBaseWarning } from '@/api/manage/garden/index';

const data = await IBaseWarning()
</script>

<style lang="scss" scoped>
.managegarden__base-warning {
    height: 100%
}
</style>
