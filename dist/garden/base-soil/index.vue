<template>
    <!-- 土壤监测 -->
    <div class="managegarden__base-soil">
        base-soil
    </div>
</template>

<script lang="ts" setup>
import { IBaseSoil } from '@/api/manage/garden/index';

const data = await IBaseSoil()
</script>

<style lang="scss" scoped>
.managegarden__base-soil {
    height: 100%
}
</style>
