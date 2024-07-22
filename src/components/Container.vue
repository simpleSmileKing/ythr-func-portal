<script setup lang="ts">

import ButtonList from "@/components/buttonList.vue";
import UnderMap from "@/components/underMap.vue";
import {ref} from "vue";
import rcpq from "@/assets/btn/rcpq01.svg";
import rsdl from "@/assets/btn/rsdl.svg";
import ks from "@/assets/btn/ks.svg";
import lgsc from "@/assets/btn/lgsc.svg";
import zp from "@/assets/btn/zp.svg";
import px from "@/assets/btn/px.svg";
import wbfw from "@/assets/btn/wbfw.svg";
import gjrc from "@/assets/btn/gjrc.svg";
import rsda from "@/assets/btn/rsda.svg";


// 云才出山
const yccsBtns = ref([
  {
    imageSrc: rcpq,
    desc: '人才派遣',
  },
  {
    imageSrc: wbfw,
    desc: '外包服务',
  },
  {
    imageSrc: gjrc,
    desc: '国际人才',
  },
  {
    imageSrc: rsdl,
    desc: '人事代理',
  },
  {
    imageSrc: zp,
    desc: '招聘服务',
  },
  {
    imageSrc: lgsc,
    desc: '零工市场',
  },
  {
    imageSrc: ks,
    desc: '考试服务',
  },
  {
    imageSrc: px,
    desc: '培训服务',
  },
  {
    imageSrc: rsdl,
    desc: '人事代理',
  },

  {
    imageSrc: rsda,
    desc: '人事档案'
  }

]);

import yqgk from "@/assets/btn/yqgk.svg";
import zs from "@/assets/btn/zs.svg";
import sthb from "@/assets/btn/sthb.svg";
import yqdt from "@/assets/btn/yqdt.svg";
import jyxc from "@/assets/btn/jyxc.svg";
// 人力资源产业园
const rlzyBtns = ref([
  {
    imageSrc: yqgk,
    desc: '园区概况',
  },
  {
    imageSrc: zs,
    desc: '招商',
  },
  {
    imageSrc: sthb,
    desc: '生态伙伴',
  },
  {
    imageSrc: yqdt,
    desc: '园区动态',
  },
  {
    imageSrc: jyxc,
    desc: '建言献策',
  },
])

import zbyw from "@/assets/btn/zbyw.svg";
import wljs from "@/assets/btn/wljs.svg";
import fycc from "@/assets/btn/fycc.svg";
import chwl from "@/assets/btn/chwl.svg";
// y云品出滇
const ypcd = ref([
  {
    imageSrc: zbyw,
    desc: '直播业务',
  },
  {
    imageSrc: wljs,
    desc: '文旅介绍',
  },
  {
    imageSrc: fycc,
    desc: '非遗传承',
  },
  {
    imageSrc: chwl,
    desc: '吃喝玩乐',
  },

])
import qyjs from "@/assets/btn/qyjs.svg";
import djyl from "@/assets/btn/djyl.svg";
import zgzj from "@/assets/btn/zgzj.svg";
import BlockStackBarChart from "@/components/antv/blockStackBarChart.vue";

const gyytrl = ref([
  {
    imageSrc: qyjs,
    desc: '企业介绍',
  },
  {
    imageSrc: djyl,
    desc: '党建引领',
  },
  {
    imageSrc: zgzj,
    desc: '职工之家',
  },


])

</script>
<template>

  <!-- top -->
  <el-container class="out_container">
    <el-header height="12vh">
      <!--                  <el-image :src="require('@/assets/logo.png')" style="width: 200px"></el-image>-->

      <img src="/src//assets/logo.png" style="width:18%"/>

      <!-- <h1 style="width: 100vw;font-size: 1.5vh; text-align: center;"></h1> -->
      <div class="placeholder" style="flex: 1;"></div>
    </el-header>
    <el-main style="height: 80vh">
      <!-- body -->
      <el-row style="height:80vh">
        <el-col :span="8"
                style="height: 75vh;display: flex;flex-direction: column ;justify-items: center;align-items: center;justify-content: space-around">
          <div class='template' style="height:35vh;width:30vw">
            <block-stack-bar-chart></block-stack-bar-chart>
            <!--            <el-text type="primary" tag="p" class="tem-title">业务数字大屏</el-text>-->
            <!-- <button-list :title="'业务数字大屏'" :btns="yccsBtns"></button-list> -->
          </div>

          <!-- 登录注册 -->
          <div class='template'
               style="height: 35vh;width: 30vw;;display: flex;flex-direction: column ;justify-items: center;align-items: center;justify-content: space-around">
            <div
                style="display: flex;flex-direction: row ;justify-items: center;align-items: center;justify-content: space-around;height: 30vh">
              <el-button class="bt" type="primary">企业登录/注册</el-button>
              <el-button class="bt" type="primary">个人登录/注册</el-button>
            </div>

            <!-- 新闻公告 -->
            <el-text
                style="width: 30vw;height:3vh;font-size: 1.3vw;text-align: left;padding-left: 2vw;font-weight: bold;color: aliceblue;">
              公告
            </el-text>
            <div class="news-info">
              <p style="width: 75%;font-size: 1.2vw">云投人力成为工业和信息化部人...</p>
              <p style="width: 25%;font-size: 1.2vw">2024-07-07</p>
              <p style="width: 75%;font-size: 1.2vw">云南省2024年度灵活结业人员...</p>
              <p style="width: 25%;font-size: 1.2vw">2024-07-11</p>
              <p style="width: 75%;font-size: 1.2vw">园区经济筑基赋能|云投中心B3...</p>
              <p style="width: 25%;font-size: 1.2vw">2024-07-12</p>
            </div>
          </div>

        </el-col>
        <!-- li2 -->
        <el-col :span="9"
                class="col-flex">
          <!--云才出山-->
          <div class='template'>
            <button-list :title="'云才出山'" :btns="yccsBtns"></button-list>
          </div>
          <div class='template' style="height:30vh">
            <button-list :title="'人力资源产业园服务'" :btns="rlzyBtns"></button-list>
          </div>
        </el-col>

        <!-- li3 -->
        <el-col :span="7"
                style="height: 75vh;display: flex;flex-direction: column ;justify-items: center;align-items: center;justify-content: space-around">
          <div class='template' style="height:35vh;width:20vw">
            <button-list :title="'云品出滇'" :btns="ypcd"></button-list>
          </div>
          <div class='template' style="height:35vh;width:20vw">
            <button-list :title="'关于云投人力'" :btns="gyytrl"></button-list>
          </div>

        </el-col>
      </el-row>
      <!--      &lt;!&ndash; 其他内容 &ndash;&gt;-->
      <!-- <div style="background-color: rgba(0, 0, 0, 0); height: 100%; z-index: 99; width: 65vw">
      <button-list></button-list> -->
      <!-- </div> -->


    </el-main>

    <!-- foot -->
    <el-footer>
      <el-text class="ft">Copyright © 2015-2024 Powered By 云南人力资源开发有限责任公司 版权所有</el-text>
      <img alt="Vue logo" class="QRCode" src="@/assets/QRCode.png"/>
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
  width: 100vw;
}

.main_footer_container {
  width: 100vw;
}

.aside_container {
  width: 18%;
}

/* top */
.el-header {
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;
  width: 100vw;
  box-shadow: 0 1vh 1vw rgba(0, 0, 0, 0.1); /* 轻微的阴影效果提升层次感 */
}

.el-aside {
  background-color: #d7e8df;
  color: #333;

}


.el-main {
  color: #333;
  width: 100vw;
  --el-main-padding: 0.1vh;
}

.el-footer {
  height: 6vh;
  width: 100vw;
  background-color: #46505a;
  text-align: center;
  align-content: center;
  position: relative; /* 确保子元素相对于父元素定位 */

}

.ft {
  color: #d7e8df;
  font-size: 2vh;
}

.QRCode {
  position: absolute; /* 相对于父元素定位 */
  right: 0; /* 定位到父元素的右侧 */
  top: 0;
  width: 3vw; /* 示例宽度 */
  height: 6vh; /* 示例高度 */
  background-color: lightgray; /* 示例背景色 */
}

/* li1 */
.template {
  border-radius: 5vh;
  background-color: #d7e8df1f;
  border: #2c3e5031 solid 0.1vw;
  text-align: center;
  height: 40vh;
  width: 90%;

}

/* 业务数字大屏 */
.tem-title {
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  font-size: 3vh;
  font-weight: bold;
  width: 30vw;
  height: 3vh;
  padding: 1vh 1.5vw;
  background: linear-gradient(to right, #ffffffc0, #d7e8df00);
  border-top-left-radius: 5vh;

  color: #2c3e50;
}

/* 登录注册 */
.bt {
  width: 14vw;
  height: 6vh;
  font-size: 1.2vw;
  border-radius: 2vh;
  background-color: rgba(255, 255, 255, 0.349);
}

/* 公告表单 */
.news-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 95%;
  height: 70vh;
  background-color: #d7e8df85;
  border-radius: 2vh;
}

.col-flex {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: space-around
}
</style>