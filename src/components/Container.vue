<script setup>


import ButtonList from "@/components/buttonList.vue";
import UnderMap from "@/components/underMap.vue";
</script>

<template>


  <el-container class="out_container">
    <el-header height="15vh">
      <!--      <el-image :src="require('@/assets/logo.png')" style="width: 200px"></el-image>-->
      <!--      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="300" height="125"/>-->
      <!--      <h1 style="flex: 12; text-align: center;">Welcome to woodStars</h1>-->
      <!--      <div class="placeholder" style="flex: 1;"></div>-->
    </el-header>
    <el-main height="80vh">

      <!-- 其他内容 -->
      <div style="background-color: rgba(0, 0, 0, 0); height: 100%; z-index: 99; width: 65vw">
        <button-list></button-list>
      </div>
      <under-map  style="position: absolute; top: 15vh; left: 65vw; width: 35vw; height: 80vh; z-index: 0;"></under-map>

    </el-main>
    <el-footer height="5vh">
      <el-text tag="p" type="primary">Copyright © 2015-2024 Powered By 云南人力资源开发有限责任公司 版权所有</el-text>
      <img alt="Vue logo" class="QRCode" src="@/assets/QRCode.png" width="40" height="40"/>
    </el-footer>

  </el-container>


</template>


<style scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
}

/*占满全屏*/
.out_container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
}

.aside_main_footer_container {
  width: 100%;
}

.main_footer_container {
  width: 100%;
}

.aside_container {
  width: 18%;
}


.el-header {
  background-color: #f0f4f8;
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;

  //box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 轻微的阴影效果提升层次感 */
}

.el-aside {
  background-color: #d7e8df;
  color: #333;

}

.el-main {
  background-color: rgba(0,0,0,0);
  color: #333;
  width: 100%;
  --el-main-padding: 2px;
}

.el-footer {
  background-color: #46505a;
  color: #ffffff;
  text-align: center;
  align-content: center;
  position: relative; /* 确保子元素相对于父元素定位 */

}

.QRCode {
  position: absolute; /* 相对于父元素定位 */
  top: 50%; /* 垂直居中，可以根据需要调整 */
  right: 0; /* 定位到父元素的右侧 */
  transform: translateY(-50%); /* 确保垂直居中 */
  width: 40px; /* 示例宽度 */
  height: 40px; /* 示例高度 */
  background-color: lightgray; /* 示例背景色 */
}
</style>