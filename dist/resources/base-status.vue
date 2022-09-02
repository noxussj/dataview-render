<template>
    <!-- 资源状况 -->
    <div class="resources__base-status">
        base-status
    </div>
</template>

<script lang="ts" setup>
import { IBaseStatus } from '@/api/resources/index';

const data = await IBaseStatus()
</script>

<style lang="scss" scoped>
.resources__base-status {
    height: 100%
}
</style>
