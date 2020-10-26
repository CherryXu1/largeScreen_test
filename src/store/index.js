import Vue from 'vue'
import Vuex from 'vuex'
import userData from '@/store/largeScreenData/userSingle/userData'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    userData
  }
})
