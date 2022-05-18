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
        `,
        'card-count2': `<card-count2 :border="false" :data="data" layout="second"></card-count2>`,
        'barx-gradual': `<barx-gradual :bar-color="[['rgba(0, 132, 254, 1)', 'rgba(0, 247, 255, 1)'],['rgba(255, 93, 21, 1)', 'rgba(255, 193, 63, 1)']]" :data="data"        layout-legend="bottom" :line-color="['rgba(183, 81, 255, 1)']" :option="{ yAxisName: '金额（万元）', yAxisName2: '同比增长率（%）' }"></barx-gradual>`,
        'pie-simple': `<pie-simple :data="data" :show-label-line="false" :show-legend="true"></pie-simple>`
    }

    return map[copy]
}

module.exports = { mapComponents }
