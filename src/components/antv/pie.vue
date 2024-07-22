<template>
  <div :id="containerId" class="chart-container"></div>
</template>

<script lang="ts" setup>
import {Chart} from '@antv/g2';
import {onMounted, onBeforeUnmount, defineProps} from 'vue';

const props = defineProps<{
  data: Array<{ id: string, value: number }>,
  containerId: string,
  title:string,
}>();

let chart: Chart;

onMounted(() => {
  chart = new Chart({
    container: props.containerId,
    autoFit: true,
  });

  chart.coordinate({type: 'theta', innerRadius: 0.25, outerRadius: 0.8});

  chart
      .interval()
      .data(props.data)
      .transform({type: 'stackY'})
      .encode('y', 'value')
      .encode('color', 'id')
      .scale('color', {
        range: ['rgb(86,214,251)', 'rgb(69, 147, 254)', 'rgb(134, 254, 193)', 'rgb(246, 216, 96)', 'rgb(248 , 115, 120)'],
      })
      .label({
        text: 'value',
        fontWeight: 'bold',
        offset: 40,
        fontSize: 16, // 调整字体大小
      })
      .style('radius', 4)
      .style('stroke', '#fff')
      .style('lineWidth', 2)
      .animate('enter', {type: 'waveIn'})
      .legend(false);
  chart.title({title: props.title, titleFill: 'rgb(255,254,253)', align: 'center', titleFontSize: 22})
  chart.render();
});

onBeforeUnmount(() => {
  if (chart) {
    chart.destroy();
  }
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>
