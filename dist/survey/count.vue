<template>
    <!--  -->
    <div class="overview__machine__survey__count">
        <card-count2 amount-format :data="data"></card-count2>
    </div>
</template>

<script lang="ts" setup>
import { ICount } from '@/api/overview/machine/survey/index';

const data = await ICount()
</script>

<style lang="scss" scoped>
.overview__machine__survey__count {
    margin-bottom: 20px;

    .components__card-count2 {
        height: 94px;
    }

    .components__card-count2 + .components__card-count2 {
        margin-top: 20px;
    }
}
</style>