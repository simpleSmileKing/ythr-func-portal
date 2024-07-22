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
    <div class="ico" v-for="item in props.btns" :key="item.imageSrc">
      <img :src="item.imageSrc" alt="Logo" style="height:4vh;width:4vw;padding:2vh 2.5vh;">
      <p style="margin: 0vh 1vw;">{{ item.desc }}</p>
    </div>
  </div>

</template>

<style scoped>
.btns {
  display: flex;
  justify-content: left;
  align-items: center;
  justify-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  color: #426169d2;
  font-weight: bold;
  font-size: 1.6vh;
  padding: 2vh 5vh;
 }


.ico:hover{
  background-color: rgba(255, 255, 255, 0.255);

}
.tem-title {
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  font-size: 3vh;
  font-weight: bold;
  padding:1vh 4vh;
  color: #283a3fd2;
  width: 88%;
  background:linear-gradient(to right,#ffffffc0,#d7e8df00) ;
  border-top-left-radius:5vh ;
}
</style>