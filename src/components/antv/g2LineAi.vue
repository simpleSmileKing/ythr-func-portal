<template>
  <div ref="chartContainer"></div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {Chart} from '@antv/g2';

// 数据
const data = [
  {month: 'Jan', city: 'Tokyo', temperature: 7},
  {month: 'Jan', city: 'London', temperature: 3.9},
  {month: 'Feb', city: 'Tokyo', temperature: 6.9},
  {month: 'Feb', city: 'London', temperature: 4.2},
  {month: 'Mar', city: 'Tokyo', temperature: 9.5},
  {month: 'Mar', city: 'London', temperature: 5.7},
  {month: 'Apr', city: 'Tokyo', temperature: 14.5},
  {month: 'Apr', city: 'London', temperature: 8.5},
  {month: 'May', city: 'Tokyo', temperature: 18.4},
  {month: 'May', city: 'London', temperature: 11.9},
  {month: 'Jun', city: 'Tokyo', temperature: 21.5},
  {month: 'Jun', city: 'London', temperature: 15.2},
  {month: 'Jul', city: 'Tokyo', temperature: 25.2},
  {month: 'Jul', city: 'London', temperature: 17},
  {month: 'Aug', city: 'Tokyo', temperature: 26.5},
  {month: 'Aug', city: 'London', temperature: 16.6},
  {month: 'Sep', city: 'Tokyo', temperature: 23.3},
  {month: 'Sep', city: 'London', temperature: 14.2},
  {month: 'Oct', city: 'Tokyo', temperature: 18.3},
  {month: 'Oct', city: 'London', temperature: 10.3},
  {month: 'Nov', city: 'Tokyo', temperature: 13.9},
  {month: 'Nov', city: 'London', temperature: 6.6},
  {month: 'Dec', city: 'Tokyo', temperature: 9.6},
  {month: 'Dec', city: 'London', temperature: 4.8},
];

// 创建图表容器的引用
const chartContainer = ref(null);

onMounted(() => {
  const chart = new Chart({
    container: chartContainer.value,
    autoFit: true,
  });

  chart
      .data(data)
      .encode('x', 'month')
      .encode('y', 'temperature')
      .encode('color', 'city')
      .scale('x', {
        range: [0, 1],
      })
      .scale('y', {
        nice: true,
      })

      .axis('y', {
        lineLineWidth: 5,
        // labelFormatter: (d) => d + '°C',
        lineStroke: "rgb(246,1,1)",
        line: {style: {stroke: '#ffffff'}}, // Change y-axis line color
        label: {style: {fill: '#ffffff'}}, // Change y-axis label color
        tickLine: {style: {stroke: '#ffffff'}}, // Change y-axis tick color
        grid: {line: {style: {stroke: '#2a2a2a'}}}, // Change y-axis grid line color
        // 轴标签
        labelFontSize:20,
        // tickStroke: "rgb(246,1,1)", // Change y-axis tick color
      })
      .axis('x', {
        lineLineWidth: 5,
        // labelFormatter: (d) => d + '°C',
        lineStroke: "rgb(246,1,1)",
        line: {style: {stroke: '#ffffff'}},
        label: {style: {fill: '#ffffff'}},
        tickLine: {style: {stroke: '#ffffff'}},
        grid: {line: {style: {stroke: '#2a2a2a'}}},
        // 轴标签
        labelFontSize:20,
        labelFill:"rgb(246,1,1)"
      })


  chart.line().encode('shape', 'smooth');

  chart.point().encode('shape', 'point').tooltip(false);

  chart.render();
});
</script>

<style scoped>
/* 样式可以根据需要调整 */
</style>
