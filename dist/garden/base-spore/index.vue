<template>
    <!-- 24小时孢子捕捉 -->
    <div class="managegarden__base-spore">
        base-spore
    </div>
</template>

<script lang="ts" setup>
import { IBaseSpore } from '@/api/manage/garden/index';

const data = await IBaseSpore()
</script>

<style lang="scss" scoped>
.managegarden__base-spore {
    height: 100%
}
</style>
