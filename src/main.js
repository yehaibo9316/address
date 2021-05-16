/*
 * @Author: your name
 * @Date: 2021-05-15 16:04:48
 * @LastEditTime: 2021-05-15 22:32:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
ElementUI.Tooltip.props.effect.default = "light";
Vue.use(ElementUI,{ size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
