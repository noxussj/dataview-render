<template>
    <!-- 用户反馈分析 -->
    <div class="operate__base-feedback">
        base-feedback
    </div>
</template>

<script lang="ts" setup>
import { IBaseFeedback } from '@/api/operate';

const data = await IBaseFeedback()
</script>

<style lang="scss" scoped>
.operate__base-feedback {
    height: 100%
}
</style>
