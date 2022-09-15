<template>
    <!-- 桑蚕产业管理一张图 -->
    <div class='managegarden'>
        <to-layout height='100%' :orient="'horizontal'">
            <model :height="'19.35%'" :orient="'vertical'" :width="'26.08%'">
                <sub-model :height="''" title='气象站' :width="'100%'">
                    <base-weather></base-weather>
                </sub-model>
                <sub-model :height="''" title='土壤监测' :width="'100%'">
                    <base-soil></base-soil>
                </sub-model>
                <sub-model :height="''" title='本月桑园虫情预警' :width="'100%'">
                    <base-warning></base-warning>
                </sub-model>
                <sub-model :height="''" title='24小时孢子捕捉' :width="'100%'">
                    <base-spore></base-spore>
                </sub-model>
                <sub-model :height="''" title='设备监测' :width="'100%'">
                    <base-devices></base-devices>
                </sub-model>
            </model>
        </to-layout>
    </div>
</template>

<script lang="ts" setup>
import BaseWeather from './base-weather/index.vue' // 气象站
import BaseSoil from './base-soil/index.vue' // 土壤监测
import BaseWarning from './base-warning/index.vue' // 本月桑园虫情预警
import BaseSpore from './base-spore/index.vue' // 24小时孢子捕捉
import BaseDevices from './base-devices/index.vue' // 设备监测
</script>

<style lang="scss">
.managegarden {
    height: 100%;

    .block__layout {
        align-items: flex-end;
    }
}
</style>
