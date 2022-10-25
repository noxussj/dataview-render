<template>
    <!-- 趋势分析 -->
    <div class="operate__base-trend">
        base-trend
    </div>
</template>

<script lang="ts" setup>
import { IBaseTrend } from '@/api/operate';

const data = await IBaseTrend()
</script>

<style lang="scss" scoped>
.operate__base-trend {
    height: 100%
}
</style>
