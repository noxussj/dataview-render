<template>
    <!-- 大蚕房监控建议 -->
    <div class="manage__base-house-big">
        base-house-big
    </div>
</template>

<script lang="ts" setup>
import { IBaseHouseBig } from '@/api/manage/index';

const data = await IBaseHouseBig()
</script>

<style lang="scss" scoped>
.manage__base-house-big {
    height: 100%
}
</style>
