<template>
    <!-- 作业任务统计 -->
    <div class="task__job-tasks">
        
        <el-scrollbar height="100%">
            <table class="app-table">
                <thead>
                    <td>编号</td>
                    <td>销售地区</td>
                    <td>产品</td>
                    <td>来源</td>
                    <td>金额（元）</td>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.region }}</td>
                        <td>{{ item.produce }}</td>
                        <td>{{ item.source }}</td>
                        <td>￥{{ thousandFormat(item.price, 2) }}</td>
                    </tr>
                </tbody>
            </table>
        </el-scrollbar>
        
    </div>
</template>

<script lang="ts" setup>
import { IJobTasks } from '@/api/task/index';

const data = await IJobTasks()
</script>

<style lang="scss" scoped>
.task__job-tasks {
    height: 100%
}
</style>
