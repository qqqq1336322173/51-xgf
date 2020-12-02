import Vue from 'vue'
import Vuex from 'vuex'
import serverUrl from './modules/serverUrl'
import userInfo from './modules/userInfo'
import tabbar from './modules/tabbar'
import nav from './modules/nav'
import indexChild from './modules/child'
import search from './modules/search'
// import user from './modules/user'
import storage from '@/assets/js/storage'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    serverUrl,
    userInfo,
    tabbar,
    nav,
    indexChild,
    search
    // user,
  },
  actions: {

  },
  getters: {

    // 方法名随意
    // _this.$store.getters.getUser
    getUser (state) {
      state.user = storage.get('user');
      return state.user;
    },
    getKeyword (state) {
      state.keyword = storage.get('keyword');
      return state.keyword;
    }
    // getDemoList(state) {
    //   state.demoList = storage.get("demoList");
    //   return state.demoList;
    // }

  },
})

export default store
