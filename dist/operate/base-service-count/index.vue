<template>
    <!-- 专家咨询服务统计 -->
    <div class="operate__base-service-count">
        base-service-count
    </div>
</template>

<script lang="ts" setup>
import { IBaseServiceCount } from '@/api/operate';

const data = await IBaseServiceCount()
</script>

<style lang="scss" scoped>
.operate__base-service-count {
    height: 100%
}
</style>
