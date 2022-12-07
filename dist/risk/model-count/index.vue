<template>
    <!-- 统计模块 -->
    <div class="risk__model-count">
        model-count
    </div>
</template>

<script lang="ts" setup>
import { IModelCount } from '@/api/risk';

const data = await IModelCount()
</script>

<style lang="scss" scoped>
.risk__model-count {
    height: 100%
}
</style>
