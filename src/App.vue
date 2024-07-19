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
  min-width: inherit;
  font-family: "思源黑体", serif;
}

#app {
  background:  url('@/assets/background/bg1.jpg');
  /* 背景图片覆盖整个容器 */
  background-size: cover;
  /* 保持背景图片固定，不随页面滚动 */
  background-attachment: fixed;
  /* 设置背景图片居中 */
  /* 确保背景图片不重复 */
  background-repeat: no-repeat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  font-family: "思源黑体", serif;
  height: 100vh;
  width: 100;
  margin: 0;
}
header {
  line-height: 1.5vh;
}


.main-page {
  height: 100vh;
  width: 100vw;
}

.e-main {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0vh;
}

.e-foot {
  height: 30vh;
}
</style>
