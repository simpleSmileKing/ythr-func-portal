import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// import axios from 'axios'
// import {Chart} from "@antv/g2";
// import VueAxios from 'vue-axios'
// import * as G2 from '@antv/g2'

// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// 基于 promise 的网络请求库
// app.config.globalProperties.$http = axios
// antv可视化组件
// app.config.globalProperties.$G2 = G2
// 轮播图时长全局设定
app.config.globalProperties.BASE_SWITCH_TIME = 120
// 轮播图时长全局设定
app.config.globalProperties.GOODS_SWITCH_TIME = 15
// KG正式环境服务器
// axios.defaults.baseURL = 'http://10.200.6.22:8000'
// 测试使用的环回地址
// axios.defaults.baseURL = 'http://127.0.0.1:8000'



//
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }
app.use(ElementPlus)
app.mount('#app')

