<template>
    <!-- 单位 -->
    <div class="manage__base-company">
        base-company
    </div>
</template>

<script lang="ts" setup>
import { IBaseCompany } from '@/api/manage/index';

const data = await IBaseCompany()
</script>

<style lang="scss" scoped>
.manage__base-company {
    height: 100%
}
</style>
