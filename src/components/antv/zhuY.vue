<template>
  <div>


    <div class="title-zhu">
      <el-icon color="#aabbcc" style="width:10%">
        <Coordinate/>
      </el-icon>
      <el-text class="mx-1" type="primary">市县</el-text>
    </div>
    <div id="zhuY"></div>
  </div>

</template>

<script lang="ts" setup>
import {Chart} from "@antv/g2";
import {onMounted, ref} from 'vue';

const data = ref([
  {location: '昆明', sales: 38},
  {location: '玉溪', sales: 52},
  {location: '丽江', sales: 61},
  {location: '大理', sales: 145},
  {location: '楚雄', sales: 48},
  {location: '红河', sales: 45},
  {location: '临沧', sales: 1},
  {location: '文山', sales: 77},
]);


onMounted(() => {
  const chart = new Chart({
    container: 'zhuY',
    autoFit: true,
    axis: {
      x: false,
    },
  });

  chart
      .interval()
      .coordinate({transform: [{type: 'transpose'}]})
      .data(data.value)
      .encode('x', 'location')
      .encode('y', 'sales').style({
    // 定义渐变色
    fill: (val) => {
      return 'l(0) 0:#bae7ff 1:#1890ff';
    }
  })
      .label({
        text: (d) => d.location,
        position: 'left', style: {
          dy: 0, // 指定样式
          dx: 20
        },
      })
  ;

  chart.render();
});
</script>

<style scoped>
#pie {
  height: 100%;
  width: 100%;
}

.title-zhu {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: left;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;


  border-left: 6px solid #1890ff; /* 左侧边框加粗 */
  background: linear-gradient(to right, #e0f7fa, rgba(255,255,255,0)); /* 从左到右的渐变背景色 */
  padding: 20px; /* 内容的内边距 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影 */

}
</style>
