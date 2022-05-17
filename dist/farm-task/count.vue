<template>
    <!--  -->
    <div class="farm-task__count">
        <card-count2 :border="false" :data="data" layout="second"></card-count2>
    </div>
</template>

<script lang="ts" setup>
import { ICount } from '@/api/farm-task/index';

const data = await ICount()
</script>

<style lang="scss" scoped>
.farm-task__count {
    height: 100%
}
</style>
