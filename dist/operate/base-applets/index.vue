<template>
    <!-- 小程序实时用户统计 -->
    <div class="operate__base-applets">
        base-applets
    </div>
</template>

<script lang="ts" setup>
import { IBaseApplets } from '@/api/operate';

const data = await IBaseApplets()
</script>

<style lang="scss" scoped>
.operate__base-applets {
    height: 100%
}
</style>
