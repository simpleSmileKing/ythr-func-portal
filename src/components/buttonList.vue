<script setup>
import {ref} from "vue";
import rcpq from "@/assets/btn/rcpq.svg";
import rsdl from "@/assets/btn/rsdl.svg";
import zpfw from "@/assets/btn/zpfw.svg";
import ksfw from "@/assets/btn/ksfw.svg";
import ktps from "@/assets/btn/ktps.svg";

const form_data = ref([
  {
    imageSrc: rcpq,
    desc: '人才派遣',
  },
  {
    imageSrc: rcpq,
    desc: '外包服务',
  },
  {
    imageSrc: rcpq,
    desc: '国际人才服务',
  },
  {
    imageSrc: rsdl,
    desc: '人事代理',
  },
  {
    imageSrc: zpfw,
    desc: '招聘服务',
  },
  {
    imageSrc: '@/assets/logo.svg',
    desc: '灵活用工',
  },
  {
    imageSrc: ksfw,
    desc: '考试服务',
  },
  {
    imageSrc: ktps,
    desc: '培训服务',
  },
  {
    imageSrc: '@/assets/logo.svg',
    desc: '劳动力转移就业',
  },
  {
    imageSrc: '@/assets/logo.svg',
    desc: '延伸业务',
  },

])


</script>

<template>
  <div class = 'btns' style="background-color: #f2f2f2;">
    <div v-for="item in form_data" :key="item.imageSrc" style="padding: 50px 50px;z-index: 999999999">
      <img :src="item.imageSrc" alt="Logo" style="height: 3%;width:10vw;">
      <p>{{ item.desc }}</p>
    </div>

  </div>
</template>

<style scoped>
.btns{
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;

  background-color: #f2f2f2;
  color: #2c3e50;
}
</style>