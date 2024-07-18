<script setup>
import {ref} from "vue";

const props = defineProps({
  title: {
    type: [String]
  }, btns: {
    type: [Array]
  }
});

</script>

<template>
  <el-text type="primary" tag="p" class="tem-title">{{ props.title }}</el-text>
  <div class='btns'>
    <div v-for="item in props.btns" :key="item.imageSrc" style="padding: 20px 25px">
      <img :src="item.imageSrc" alt="Logo" style="height:50px;width:50px;">
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.btns {
  display: flex;
  justify-content: left;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  color: #2c3e50;
}

.tem-title {
  display: inline-block;

  vertical-align: middle;

  text-align: left;

  width: 100%;

  padding-left: 40px;
}
</style>