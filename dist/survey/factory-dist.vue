<template>
    <!-- 农机厂家占比分析 -->
    <div class="overview__machine__survey__factory-dist">
        <pie-rose :data="data"></pie-rose>
    </div>
</template>

<script lang="ts" setup>
import { IFactoryDist } from '@/api/overview/machine/survey/index';

const data = await IFactoryDist()
</script>

<style lang="scss" scoped>
.overview__machine__survey__factory-dist {
    height: 100%
}
</style>
