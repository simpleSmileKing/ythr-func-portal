<template>
  <div id="g2line" class="chart-container"></div>
</template>

<script lang="ts" setup>
import {Chart} from "@antv/g2";
import {onMounted, ref} from 'vue';

const data = ref([
  {date: '01', price: 10, symbol: "A"},
  {date: '02', price: 15, symbol: "A"},
  {date: '03', price: 20, symbol: "A"},
  {date: '04', price: 10, symbol: "A"},
  {date: '05', price: 10, symbol: "A"},
  {date: '06', price: 20, symbol: "A"},
  {date: '07', price: 33, symbol: "A"},
  {date: '08', price: 140, symbol: "A"},
  {date: '09', price: 100, symbol: "A"},
  {date: '10', price: 61, symbol: "A"},
]);

onMounted(() => {
  const chart = new Chart({
    container: 'g2line',
    autoFit: true,
  });

  chart
      .line()

      .data(data.value)
      .encode('x', 'date')
      .encode('y', 'price')
      .encode('series', 'symbol')
      .encode('color', 'symbol')
      .style('gradient', 'y')
      .style('shape', 'smooth')
      .style('lineWidth', 5)
      .scale('color', {palette: 'dark2'})
      .axis('y', {
        lineLineWidth: 5,
        // labelFormatter: (d) => d + '°C',
        lineStroke: "rgb(246,1,1)",
        line: {style: {stroke: '#ffffff'}}, // Change y-axis line color
        label: {style: {fill: '#ffffff'}}, // Change y-axis label color
        tickLine: {style: {stroke: '#ffffff'}}, // Change y-axis tick color
        grid: {line: {style: {stroke: '#2a2a2a'}}}, // Change y-axis grid line color
        // 轴标签
        labelFontSize: 20,
        // tickStroke: "rgb(246,1,1)", // Change y-axis tick color
      })
      .axis('y', {
        lineLineWidth: 5,
        // labelFormatter: (d) => d + '°C',
        lineStroke: "rgb(213,248,216)",
        line: {style: {stroke: '#ffffff'}},
        label: {style: {fill: '#ffffff'}},
        tickLine: {style: {stroke: '#ffffff'}},
        grid: {line: {style: {stroke: '#ff0000'}}},
        // 轴标签
        labelFontSize: 20,
        labelFill: "rgb(238,205,168)"
      })
      .axis('x', {
        lineLineWidth: 5,
        lineStroke: "rgb(213,248,216)",
        line: {style: {stroke: '#ffffff'}},
        label: {style: {fill: '#ffffff'}},
        tickLine: {style: {stroke: '#ffffff'}},
        grid: {line: {style: {stroke: '#f60101'}}},
        // 轴标签
        labelFontSize: 20,
        labelFill: "rgb(238,205,168)"
      });
  chart.title({title: '走访用工人数主体趋势', titleFill: 'rgb(255,254,253)',align:'center',titleFontSize:28})
  chart.render();
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>
