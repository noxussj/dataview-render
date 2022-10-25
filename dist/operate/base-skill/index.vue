<template>
    <!-- 技术教程统计 -->
    <div class="operate__base-skill">
        base-skill
    </div>
</template>

<script lang="ts" setup>
import { IBaseSkill } from '@/api/operate';

const data = await IBaseSkill()
</script>

<style lang="scss" scoped>
.operate__base-skill {
    height: 100%
}
</style>
