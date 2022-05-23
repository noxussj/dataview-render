<template>
    <!-- 农机普查 -->
    <div class='overview__machine__survey'>
        <to-layout height='100%' :orient="'horizontal'">
            <model :height="'100%'" :orient="'vertical'" :width="'27.5%'">
                <sub-model :height="'0%'" title='' :width="'100%'">
                    <count></count>
                </sub-model>
                <sub-model :height="'30%'" title='当前使用状态统计' :width="'100%'">
                    <vehicle-status></vehicle-status>
                </sub-model>
                <sub-model :height="'34%'" title='农机类型统计' :width="'100%'">
                    <machine-type></machine-type>
                </sub-model>
                <sub-model :height="'36%'" title='年作业量农机统计' :width="'100%'">
                    <machine-use></machine-use>
                </sub-model>
            </model>
            <model :height="'0%'" :orient="'vertical'" :width="'45%'">
            </model>
            <model :height="'100%'" :orient="'vertical'" :width="'27.5%'">
                <sub-model :height="'0%'" title='' :width="'100%'">
                    <count2></count2>
                </sub-model>
                <sub-model :height="'35%'" title='新疆农机数量分布统计' :width="'100%'">
                    <machine-dist></machine-dist>
                </sub-model>
                <sub-model :height="'30%'" title='农机厂家占比分析' :width="'100%'">
                    <factory-dist></factory-dist>
                </sub-model>
                <sub-model :height="'35%'" title='总动力/配套总动力统计' :width="'100%'">
                    <total-power></total-power>
                </sub-model>
            </model>
        </to-layout>
    </div>
</template>

<script lang="ts" setup>
import Count from './count.vue' // 
import VehicleStatus from './vehicle-status.vue' // 当前使用状态统计
import MachineType from './machine-type.vue' // 农机类型统计
import MachineUse from './machine-use.vue' // 年作业量农机统计
import Count2 from './count2.vue' // 
import MachineDist from './machine-dist.vue' // 新疆农机数量分布统计
import FactoryDist from './factory-dist.vue' // 农机厂家占比分析
import TotalPower from './total-power.vue' // 总动力/配套总动力统计
</script>

<style lang="scss">
.overview__machine__survey {
    height: 100%;

    .block__layout {
        align-items: flex-end;
    }
}
</style>
