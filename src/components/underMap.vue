<script setup>
import { ref, onMounted } from 'vue'; // 引入 Vue Composition API 的相关方法
import { Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';

// const mapContainer = ref(null);

onMounted(() => {
  new Scene({
    id: 'map',
    map: new GaodeMap({
      style: 'light',
      center: [107.054293, 35.246265],
      zoom: 3,
      token:'76e4923c1c4d6357f609b956a417d542'
    }),
  });

  // 可以在这里做一些地图的初始化设置
});
</script>


<template>
<div id="map" ></div>
</template>

<style scoped>

</style>