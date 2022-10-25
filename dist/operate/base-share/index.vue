<template>
    <!-- 收藏、点赞、分享统计 -->
    <div class="operate__base-share">
        base-share
    </div>
</template>

<script lang="ts" setup>
import { IBaseShare } from '@/api/operate';

const data = await IBaseShare()
</script>

<style lang="scss" scoped>
.operate__base-share {
    height: 100%
}
</style>
