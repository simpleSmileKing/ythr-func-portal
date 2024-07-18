<script setup lang="ts">


import ButtonList from "@/components/buttonList.vue";
import UnderMap from "@/components/underMap.vue";
import {ref} from "vue";
import rcpq from "@/assets/btn/rcpq.svg";
import rsdl from "@/assets/btn/rsdl.svg";
import zpfw from "@/assets/btn/zpfw.svg";
import ksfw from "@/assets/btn/ksfw.svg";
import ktps from "@/assets/btn/ktps.svg";

// 云才出山
const yccsBtns = ref([
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

]);


// 人力资源产业园
const rlzyBtns = ref([
  {
    imageSrc: rcpq,
    desc: '园区概况',
  },
  {
    imageSrc: rcpq,
    desc: '招商',
  },
  {
    imageSrc: rcpq,
    desc: '生态伙伴',
  },
  {
    imageSrc: rsdl,
    desc: '园区动态',
  },
  {
    imageSrc: zpfw,
    desc: '建言献策',
  },
])


</script>

<template>


  <el-container class="out_container">
    <el-header height="15vh" style="background-color: rgba(0,0,0,0)">
<!--                  <el-image :src="require('@/assets/logo.png')" style="width: 200px"></el-image>-->
                  <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="300" height="125"/>
      <h1 style="flex: 12; text-align: center;">Welcome to woodStars</h1>
      <div class="placeholder" style="flex: 1;"></div>
    </el-header>
    <el-main height="80vh">
      <el-row style="height: 100%">
        <el-col :span="8"
                style="display: flex;flex-direction: column ;justify-items: center;align-items: center;justify-content: space-around">
          <div class='template' style="height: 50%;width: 90%">
            <el-text type="primary" tag="p" class="tem-title">业务数字大屏</el-text>
            <!--            <button-list :title="'业务数字大屏'" :btns="yccsBtns"></button-list>-->
          </div>
          <div class='template' style="height: 40%;width: 90%;display: flex;flex-direction: column ;justify-items: center;align-items: center;justify-content: space-around">
            <div
                style="display: flex;flex-direction: row ;justify-items: center;align-items: center;justify-content: space-around;height: 30%">
              <el-button type="primary" style="width: 40%;height: 60px">企业登录/注册</el-button>
              <el-button type="primary" style="width: 40%;height: 60px">个人登录/注册</el-button>
            </div>

            <el-text type="primary" tag="p" class="tem-title" style="height: 10%">公告</el-text>
            <div class="news-info" style="height: 60%">
              <p style="width: 60%">一则新闻</p>
              <p style="width: 30%">2024-01-01</p>
            </div>
          </div>

        </el-col>
        <el-col :span="8"
                style="display: flex;flex-direction: column ;justify-items: center;align-items: center;justify-content: space-around">
          <!--          云才出山-->
          <div class='template' style="height: 50%;width: 90%">
            <button-list :title="'云才出山'" :btns="yccsBtns"></button-list>
          </div>
          <div class='template' style="height: 40%;width: 90%">
            <button-list :title="'人力资源产业园服务'" :btns="rlzyBtns"></button-list>
          </div>
        </el-col>
        <el-col :span="8"
                style="display: flex;flex-direction: column ;justify-items: center;align-items: center;justify-content: space-around">
          <div class='template' style="height: 45%;width: 90%">
            <button-list :title="'云品出滇'" :btns="yccsBtns"></button-list>
          </div>
          <div class='template' style="height: 45%;width: 90%">
            <button-list :title="'关于云投人力'" :btns="rlzyBtns"></button-list>
          </div>

        </el-col>
      </el-row>
      <!--      &lt;!&ndash; 其他内容 &ndash;&gt;-->
      <!--      <div style="background-color: rgba(0, 0, 0, 0); height: 100%; z-index: 99; width: 65vw">-->
      <!--        <button-list></button-list>-->
      <!--      </div>-->


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
  background-color: rgba(0, 0, 0, 0);
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


.template {
  border-radius: 15px;
  border: #2c3e50 solid 1px;
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
}

.tem-title {
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  width: 100%;
  padding-left: 40px;
}
.news-info{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
</style>