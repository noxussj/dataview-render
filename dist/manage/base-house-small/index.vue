<template>
    <!-- 小蚕房监控建议 -->
    <div class="manage__base-house-small">
        base-house-small
    </div>
</template>

<script lang="ts" setup>
import { IBaseHouseSmall } from '@/api/manage/index';

const data = await IBaseHouseSmall()
</script>

<style lang="scss" scoped>
.manage__base-house-small {
    height: 100%
}
</style>
