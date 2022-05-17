const mapComponents = (copy) => {
    const map = {
        'base-table': `
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
                    <tr v-for="(item, index) in tableList" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.region }}</td>
                        <td>{{ item.produce }}</td>
                        <td>{{ item.source }}</td>
                        <td>￥{{ thousandFormat(item.price, 2) }}</td>
                    </tr>
                </tbody>
            </table>
        </el-scrollbar>
        `,
        'card-count2': `<card-count2 :border="false" :data="data" layout="second"></card-count2>`,
        'barx-gradual': `<barx-gradual :bar-color="[['rgba(32, 93, 219, 1)', 'rgba(27, 223, 252, 1)']]" :data="data" :line-color="['rgba(255, 138, 0, 1)']" :option="{ yAxisTop: 40, yAxisName: '数量（万亩）', yAxisName2: '同比增长率（%）' }" show-background @handleClick="redirect"></barx-gradual>`,
        'pie-simple': `<pie-simple :data="data" :show-label-line="false" :show-legend="true"></pie-simple>`
    }

    return map[copy]
}

module.exports = { mapComponents }
