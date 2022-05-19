<template>
    <!--  -->
    <div class="overview__machine__subsidy__count2">
        <card-count2 v-for="(item, index) in data" :key="index" amount-format :data="[item]"></card-count2>
    </div>
</template>

<script lang="ts" setup>
import { ICount2 } from '@/api/overview/machine/subsidy/index';

const data = await ICount2()
</script>

<style lang="scss" scoped>
.overview__machine__subsidy__count2 {
    margin-bottom: 20px;

    .components__card-count2 {
        height: 94px;
    }

    .components__card-count2 + .components__card-count2 {
        margin-top: 20px;
    }
}
</style>