<script setup>

import Container from "@/components/Container.vue";
</script>

<template>

  <div id="app">
    <Container></Container>
  </div>


</template>

<style >
html,
body {
  margin: 0;
  height: 100vh;
  width: 100vw;
  font-family: "思源黑体", serif;
}

#app {
  background:  url('@/assets/background/bg1.jpg');
  /* 背景图片覆盖整个容器 */
  background-size: cover;
  /* 保持背景图片固定，不随页面滚动 */
  background-attachment: fixed;
  /* 设置背景图片居中 */
  background-position: center;
  /* 确保背景图片不重复 */
  background-repeat: no-repeat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  font-family: "思源黑体", serif;
  height: 100%;
  width: 100%;
  margin: 0;
}
header {
  line-height: 1.5;
}


.main-page {
  height: 100%;
  width: 100vw;
}

.e-main {
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 0;
}

.e-foot {
  height: 3%;
  color: #fff;
}
</style>
