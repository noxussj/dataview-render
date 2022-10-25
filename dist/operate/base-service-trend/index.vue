<template>
    <!-- 资询趋势分析 -->
    <div class="operate__base-service-trend">
        base-service-trend
    </div>
</template>

<script lang="ts" setup>
import { IBaseServiceTrend } from '@/api/operate';

const data = await IBaseServiceTrend()
</script>

<style lang="scss" scoped>
.operate__base-service-trend {
    height: 100%
}
</style>
