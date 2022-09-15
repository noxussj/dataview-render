<template>
    <!-- 气象站 -->
    <div class="managegarden__base-weather">
        base-weather
    </div>
</template>

<script lang="ts" setup>
import { IBaseWeather } from '@/api/manage/garden/index';

const data = await IBaseWeather()
</script>

<style lang="scss" scoped>
.managegarden__base-weather {
    height: 100%
}
</style>
