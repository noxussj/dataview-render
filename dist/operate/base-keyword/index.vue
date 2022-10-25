<template>
    <!-- 咨询关键词统计TOP5 -->
    <div class="operate__base-keyword">
        base-keyword
    </div>
</template>

<script lang="ts" setup>
import { IBaseKeyword } from '@/api/operate';

const data = await IBaseKeyword()
</script>

<style lang="scss" scoped>
.operate__base-keyword {
    height: 100%
}
</style>
