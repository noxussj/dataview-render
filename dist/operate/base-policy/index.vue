<template>
    <!-- 政策资讯统计 -->
    <div class="operate__base-policy">
        base-policy
    </div>
</template>

<script lang="ts" setup>
import { IBasePolicy } from '@/api/operate';

const data = await IBasePolicy()
</script>

<style lang="scss" scoped>
.operate__base-policy {
    height: 100%
}
</style>
