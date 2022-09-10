<template>
    <!-- 桑蚕产业管理一张图 -->
    <div class='manage'>
        <to-layout height='100%' :orient="'horizontal'">
            <model :height="'19.35%'" :orient="'vertical'" :width="'26.08%'">
                <sub-model :height="''" title='单位' :width="'100%'">
                    <base-company></base-company>
                </sub-model>
                <sub-model :height="''" title='蚕房环境监测' :width="'100%'">
                    <base-count></base-count>
                </sub-model>
                <sub-model :height="''" title='设备监测' :width="'100%'">
                    <base-devices></base-devices>
                </sub-model>
                <sub-model :height="''" title='预警记录' :width="'100%'">
                    <base-warning></base-warning>
                </sub-model>
                <sub-model :height="''" title='小蚕房监控建议' :width="'100%'">
                    <base-house-small></base-house-small>
                </sub-model>
                <sub-model :height="''" title='大蚕房监控建议' :width="'100%'">
                    <base-house-big></base-house-big>
                </sub-model>
            </model>
        </to-layout>
    </div>
</template>

<script lang="ts" setup>
import BaseCompany from './base-company/index.vue' // 单位
import BaseCount from './base-count/index.vue' // 蚕房环境监测
import BaseDevices from './base-devices/index.vue' // 设备监测
import BaseWarning from './base-warning/index.vue' // 预警记录
import BaseHouseSmall from './base-house-small/index.vue' // 小蚕房监控建议
import BaseHouseBig from './base-house-big/index.vue' // 大蚕房监控建议
</script>

<style lang="scss">
.manage {
    height: 100%;

    .block__layout {
        align-items: flex-end;
    }
}
</style>
