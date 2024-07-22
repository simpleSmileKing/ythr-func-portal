<template>
  <div id="map" style="width: 100%; height: 100%; position: relative"></div>
</template>


<script lang="ts" setup>
import * as echarts from 'echarts';

import {getYnMap} from '@/api/getYnMap';

import {ref, onMounted, defineProps} from 'vue';
// import {GaodeMap, Scene} from '@antv/l7';
// import {Choropleth} from '@antv/l7plot';

const props = defineProps({
  mapHeight: {
    type: String,
    // default: '600px',
  },
});

onMounted(() => {
  // 初始化统计图对象
  const mapContainer = document.getElementById('map');
  const myChart = echarts.init(mapContainer!);
  // 显示 loading 动画
  myChart.showLoading();
  // 再得到数据的基础上，进行地图绘制

  getYnMap().then(res => {
    // 得到结果后，关闭动画
    myChart.hideLoading();
    // 注册地图(数据放在axios返回对象的data中哦)
    console.log(res)
    echarts.registerMap('YN', res);
    const option = {
      visualMap: {
        min: 1,
        max: 33332,
        realtime: false,
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      // title: {
      //   text: '云南GDP统计图(/万元)'
      // },
      tooltip: {
        trigger: 'item',
        formatter: (params) => {
          // 显示标题和内容
          return `${params.name}: ${params.value} 万元`;
        },
      },


      series: [
        {
          name: '云南地图',
          type: 'map',
          map: 'YN',// 这个是上面注册时的名字哦，registerMap（'这个名字保持一致'）
          zoom: 1.25, // 设置地图缩放级别
          label: {
            show: true,
            formatter: (params) => {
              // 将城市名映射为简称
              const nameMap: { [key: string]: string } = {
                '昆明市': '昆明',
                '曲靖市': '曲靖',
                '玉溪市': '玉溪',
                '保山市': '保山',
                '昭通市': '昭通',
                '楚雄彝族自治州': '楚雄',
                '红河哈尼族彝族自治州': '红河',
                '文山壮族苗族自治州': '文山',
                '普洱市': '普洱',
                '大理白族自治州': '大理',
                '德宏傣族景颇族自治州': '德宏',
                '西双版纳傣族自治州': '版纳',
                '临沧市': '临沧',
                '怒江傈僳族自治州': '怒江',
                '迪庆藏族自治州': '迪庆',
                '丽江市': '丽江',
              };
              return nameMap[params.name] || params.name;
            }
          },
          data: [
            {name: '昆明市', value: 22221},
            {name: '曲靖市', value: 10932},
            {name: '玉溪市', value: 11111},
            {name: '保山市', value: 9438},
            {name: '昭通市', value: 8721},
            {name: '楚雄彝族自治州', value: 10432},
            {name: '红河哈尼族彝族自治州', value: 10612},
            {name: '文山壮族苗族自治州', value: 9923},
            {name: '普洱市', value: 8372},
            {name: '大理白族自治州', value: 8321},
            {name: '德宏傣族景颇族自治州', value: 7459},
            {name: '西双版纳傣族自治州', value: 6512},
            {name: '临沧市', value: 6781},
            {name: '怒江傈僳族自治州', value: 4821},
            {name: '迪庆藏族自治州', value: 3754},
            {name: '丽江市', value: 4100}
          ]
        },
      ]
    };
    myChart.setOption(option);
  })

})
;
</script>

<style scoped>
#map {
  width: 100%;
}
</style>
