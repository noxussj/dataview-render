<template>
    <!-- 总动力/配套总动力统计 -->
    <div class="overview__machine__survey__total-power">
        <line-simple :data="data"></line-simple>
    </div>
</template>

<script lang="ts" setup>
import { ITotalPower } from '@/api/overview/machine/survey/index';

const data = await ITotalPower()
</script>

<style lang="scss" scoped>
.overview__machine__survey__total-power {
    height: 100%
}
</style>
