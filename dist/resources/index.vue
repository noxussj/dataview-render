<template>
    <!-- 桑蚕产业资源一张图 -->
    <div class='resources'>
        <to-layout height='100%' :orient="'horizontal'">
            <model :height="'19.35%'" :orient="'vertical'" :width="'26.08%'">
                <sub-model :height="'100%'" title='资源状况' :width="'100%'">
                    <base-status></base-status>
                </sub-model>
            </model>
            <model :height="'19.35%'" :orient="'vertical'" :width="'43.47%'">
                <sub-model :height="'100%'" title='今年计划与进展' :width="'100%'">
                    <base-plan></base-plan>
                </sub-model>
            </model>
            <model :height="'100%'" :orient="'vertical'" :width="'30.43%'">
                <sub-model :height="'100%'" title='设备统计' :width="'100%'">
                    <base-devices></base-devices>
                </sub-model>
            </model>
        </to-layout>
    </div>
</template>

<script lang="ts" setup>
import BaseStatus from './base-status.vue' // 资源状况
import BasePlan from './base-plan.vue' // 今年计划与进展
import BaseDevices from './base-devices.vue' // 设备统计
</script>

<style lang="scss">
.resources {
    height: 100%;

    .block__layout {
        align-items: flex-end;
    }
}
</style>
