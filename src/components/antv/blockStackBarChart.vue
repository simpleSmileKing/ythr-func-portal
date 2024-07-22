<template>
  <div id="location" class="chart-container"></div>
</template>

<script lang="ts" setup>
import {Chart} from "@antv/g2";
import {onMounted, ref} from 'vue';

const data = ref([
  {"type": "worker", "num": 100, "location": "五华"},
  {"type": "jobs", "num": 30, "location": "五华"},
  {"type": "worker", "num": 99, "location": "西山"},
  {"type": "jobs", "num": 40, "location": "西山"},
  {"type": "worker", "num": 70, "location": "盘龙"},
  {"type": "jobs", "num": 80, "location": "盘龙"},
  {"type": "worker", "num": 120, "location": "官渡"},
  {"type": "jobs", "num": 90, "location": "官渡"},
  {"type": "worker", "num": 60, "location": "呈贡"},
  {"type": "jobs", "num": 50, "location": "呈贡"},
  {"type": "worker", "num": 110, "location": "晋宁"},
  {"type": "jobs", "num": 60, "location": "晋宁"},
  {"type": "worker", "num": 80, "location": "安宁"},
  {"type": "jobs", "num": 70, "location": "安宁"},
  {"type": "worker", "num": 130, "location": "富民"},
  {"type": "jobs", "num": 95, "location": "富民"},
  {"type": "worker", "num": 55, "location": "宜良"},
  {"type": "jobs", "num": 45, "location": "宜良"},
  {"type": "worker", "num": 75, "location": "石林"},
  {"type": "jobs", "num": 85, "location": "石林"},
  {"type": "worker", "num": 90, "location": "嵩明"},
  {"type": "jobs", "num": 110, "location": "嵩明"},
  {"type": "worker", "num": 65, "location": "禄劝"},
  {"type": "jobs", "num": 55, "location": "禄劝"},
  {"type": "worker", "num": 50, "location": "寻甸"},
  {"type": "jobs", "num": 65, "location": "寻甸"}
]);

onMounted(() => {
  const chart = new Chart({
    container: 'location',
    autoFit: true,
  });

  chart
      .interval()
      .style('fillOpacity', 0.7)
      .legend({
        color: {
          itemMarkerSize: 20,
          itemLabelFill: "rgb(255,255,255)",
          itemLabelFontSize: 20,
          // itemLabelText: (_, index) => logo[index][0],
          maxRows: 1,
          labelFormatter: (datum, index, data) => {
            console.log(datum)
            //如果datum 为 worker 返回 就业数 ，否则返回 求职数
            return datum === 'worker' ? '就业数' : '求职数'
            // datum.people.toLocaleString()
          },
        },
      })
      // .title({ title: 'hello', subtitle: 'world',titleFill:'red' })
      .data(data)
      .encode('x', 'location')
      .encode('y', 'num')
      .encode('color', 'type')
      .transform({type: 'dodgeX'})
      .interaction('elementHighlight', {background: true})
      // .scale('color', {palette: 'dark2'})
      .scale('color', {
        range: ['linear-gradient(to top, rgba(82,181,205,90), rgba(0,0,0,0))','linear-gradient(to top, rgba(21,214,229,90), rgba(0,0,0,0))'],
      })
      .axis('y', {
        lineLineWidth: 5,
        // labelFormatter: (d) => d + '°C',
        lineStroke: "rgb(254,255,254)",
        line: {style: {stroke: '#ffffff'}},
        label: {style: {fill: '#ffffff'}},
        tickLine: {style: {stroke: '#ffffff'}},
        grid: {line: {style: {stroke: '#ff0000'}}},
        // 轴标签
        labelFontSize: 20,
        labelFill: "rgb(238,205,168)"
      })
      .axis('x', {
        labelFill: "rgb(255,255,255)",
        // lineLineWidth: 20,
        // lineStroke: "rgb(21,214,229)",
        // line: {style: {stroke: '#ffffff'}},
        // label: {style: {fill: '#ffffff'}},
        // tickLine: {style: {stroke: '#ffffff'}},
        // grid: {line: {style: {stroke: '#f60101'}}},
        // 轴标签
        labelFontSize: 10,
        // labelFill: "rgb(238,205,168)",
        // labelAlign: 'horizontal'
      })
  chart.title({title: '地区数据统计情况', titleFill: 'rgb(255,254,253)', align: 'center', titleFontSize: 28})
  chart.render();
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>
