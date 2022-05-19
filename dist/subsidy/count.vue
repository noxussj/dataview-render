<template>
    <!--  -->
    <div class="overview__machine__subsidy__count">
        <card-count2 v-for="(item, index) in data" :key="index" amount-format :data="[item]"></card-count2>
    </div>
</template>

<script lang="ts" setup>
import { ICount } from '@/api/overview/machine/subsidy/index';

const data = await ICount()
</script>

<style lang="scss" scoped>
.overview__machine__subsidy__count {
    margin-bottom: 20px;

    .components__card-count2 {
        height: 94px;
    }

    .components__card-count2 + .components__card-count2 {
        margin-top: 20px;
    }
}
</style>