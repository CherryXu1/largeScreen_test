// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import axios from 'axios'

import store from './store/index'
import echarts from 'echarts'
import Vresource from 'vue-resource' //AJAX
import Rotate from './config/rotate'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.prototype.$rotate = Rotate;
Vue.use(Vuex);
Vue.use(Vresource);
Vue.prototype.$echarts = echarts;
// 将axios挂载到原型上
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})