<template>
    <!-- 今年计划与进展 -->
    <div class="resources__base-plan">
        base-plan
    </div>
</template>

<script lang="ts" setup>
import { IBasePlan } from '@/api/resources/index';

const data = await IBasePlan()
</script>

<style lang="scss" scoped>
.resources__base-plan {
    height: 100%
}
</style>
