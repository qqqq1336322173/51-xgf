<template>
  <div class="my-app-header-index">
    <mt-header>
      <div class="index-header"
           slot="left">
        <div class="logo">
          <img src="~assets/img/app/login/img02.png"
               alt="logo" />
        </div>
        <div class="search"
             @click="goSearch">
          <mt-search v-model.trim="value"
                     cancel-text="取消"
                     placeholder="搜索"></mt-search>
        </div>
      </div>
      <div class="user"
           slot="right">
        <mt-button @click.native="handleClick">
          <img src="~assets/img/app/index/hanbaolan.png"
               alt="汉堡栏" />
        </mt-button>
        <mt-popup v-model.trim="$store.state.nav.flag"
                  popup-transition="popup-fade">
          <child></child>
        </mt-popup>
      </div>

      <!-- <router-link to="/"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </router-link>
      <mt-button icon="more"
      slot="right"></mt-button>-->
    </mt-header>
    <!-- <mt-button icon="more"
               slot="right"></mt-button>
    <mt-header fixed
               title="固定在顶部">
      111
      <div class="logo">
        <img src="~assets/img/app/index/logo.png"
             alt="logo" />
      </div>
      <div class="search">
        <mt-search v-model.trim="value"></mt-search>
      </div>
      <div class="user">
        <svg class="icon-tabbar"
             aria-hidden="true">
          <use xlink:href="#icon-hanbaolan"></use>
        </svg>
      </div>
    </mt-header>-->
  </div>
</template>

<script>
import Vue from "vue";
import { Header, Search, Popup } from "mint-ui";
// import { Search } from 'mint-ui';
// import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);
Vue.component(Search.name, Search);
Vue.component(Header.name, Header);
// import Child from '@/components/header/app/child'
export default {
  components: {
    // Child
  },
  data () {
    return {
      value: "",
      popupVisible: false, //默认关闭
      flag: false
    };
  },
  created () {
    //把弹的东西关闭
    // this.$store.state.nav.flag = false;
  },
  mounted () {
    // import('@/assets/js/iconAppIndexfont.js').then(icon => { })
  },
  methods: {
    handleClick: function () {
      console.log(this.flag);
      if (!this.flag) {
        this.$store.state.nav.flag = true;
      } else {
        this.$store.state.nav.flag = false;
      }
      this.flag = !this.flag;
      // this.popupVisible = true;
    },
    // 路由跳转
    goSearch () {
      console.log('dsfds')
      this.$router.push('/appSearchPage')
    }
  }
};
</script>

<style lang="scss">
// @import url("https://unpkg.com/mint-ui@2.2.13/lib/style.css");
.my-app-header-index {
  .mint-popup {
    position: fixed;
    background: #fff;
    top: 29%;
    left: 81%;
    transform: translate3d(-50%, -50%, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: 0.2s ease-out;
    width: 2.8rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .mint-header {
    background-color: #ff2a29;
    height: 1.333333rem;
    width: 100vw;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: space-between;
    align-items: center;
  }
  .index-header {
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    // height: 100%;
    justify-content: center;
    align-items: center;
  }
  .logo {
    // width: 4.16rem;
    height: 0.933333rem;
    margin-left: 0.2rem;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 2.293333rem;
      height: 0.573333rem;
      // height: 0.9328rem;
    }
  }
  .search {
    margin-left: 0.333333rem;
    background-color: #fff;
    width: 5.6rem;
    height: 0.826667rem;
    box-sizing: border-box;
    border-radius: 0.4rem;
    overflow: hidden;
    .mint-search {
      /* height: 100%; */
      height: 100%;
      padding: 0;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      align-items: center;
      .mint-searchbar {
        background-color: #fff;
        box-sizing: border-box;
        padding: 0;
      }
      .mint-searchbar-cancel {
        margin-left: 2px !important;
        margin-right: 0.266667rem !important;
      }
    }

    .mint-searchbar-inner {
      padding-left: 0.266667rem;
      padding-right: 0.266667rem;

      .mintui-search {
        font-size: 20px;
        color: #a79d9d;
      }
    }
  }

  .mint-header-button.is-right {
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .user {
    width: 0.8rem;
    height: 0.8rem;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mint-popup {
    top: 29%;
    left: 73%;
    transform: translate3d(-50%, -50%, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: 0;
    width: 3.2rem;
    .toggle {
      width: 100%;
      li {
        text-align: center;
      }
    }
  }

  // WEBPACK FOOTER //
  // webpack:///example/pages/popup.vue
}
</style>
