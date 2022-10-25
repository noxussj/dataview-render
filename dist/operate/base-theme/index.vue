<template>
    <!-- 主题统计TOP5 -->
    <div class="operate__base-theme">
        base-theme
    </div>
</template>

<script lang="ts" setup>
import { IBaseTheme } from '@/api/operate';

const data = await IBaseTheme()
</script>

<style lang="scss" scoped>
.operate__base-theme {
    height: 100%
}
</style>
