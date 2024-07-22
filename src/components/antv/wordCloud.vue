<template>
  <div id="wordCloud" style="width: 100%; height: 100%;"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Chart } from '@antv/g2';



onMounted(() => {
  const chart = new Chart({
    container: wordCloud,
    autoFit: true,
    paddingTop: 40,
  });

  chart
      .wordCloud()
      .data({
        type: 'fetch',
        value: 'https://assets.antv.antgroup.com/g2/philosophy-word.json',
      })
      .layout({
        spiral: 'rectangular',
        fontSize: [20, 40],
      })
      .encode('color', 'text').legend(false);;

  chart.render();

});


</script>

<style>
/* Add any necessary styles here */
</style>
