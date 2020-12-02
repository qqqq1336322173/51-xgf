<template>
  <div class="my-app-dy-info-index">
    <mt-header title="关于我们">
      <router-link to="/"
                   slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!-- <div class="user" slot="right">
        <mt-button @click.native="handleClick">
          <img src="~assets/img/app/index/hanbaolan.png" alt="汉堡栏" />
        </mt-button>
        <mt-popup v-model.trim="$store.state.nav.flag" popup-transition="popup-fade">
          <child></child>
        </mt-popup>
      </div> -->
      <!-- <mt-button slot="right" @click.native="handleClick">
        <img
          class="right-img"
          src="~assets/img/app/index/hanbaolan.png"
          alt=""
        />
        <mt-popup v-model.trim="$store.state.nav.flag" popup-transition="popup-fade">
          <child></child>
        </mt-popup>
      </mt-button> -->
    </mt-header>
  </div>

  <!-- <mt-header>
      <div class="index-header" slot="left">
        <div class="logo" @touchstart="goBack">
          <img src="~assets/img/app/dyInfo/turn_left.png" alt="logo" />
        </div>
        <div class="content">
          <span>关于我们</span>
        </div>
      </div>
      <div class="user" slot="right">
        <mt-button @click.native="handleClick">
          <img class="right-img" src="~assets/img/app/index/hanbaolan.png" alt="汉堡栏" />
        </mt-button>
        <mt-popup v-model.trim="popupVisible" popup-transition="popup-fade">
          <child :popupVisible="popupVisible"></child>
        </mt-popup>
      </div>
    </mt-header> -->
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
      popupVisible: false //默认关闭
    };
  },
  mounted () {
    // import('@/assets/js/iconAppIndexfont.js').then(icon => { })
  },
  methods: {
    handleClick: function () {
      // this.popupVisible = true;
      this.$store.state.nav.flag = true;
    },
    //返回上一级
    goBack (s, e) {
      console.log(1);
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
.my-app-dy-info-index {
  .mint-header-title {
    color: #fff;
  }
  .mint-header {
    background-color: #f00;
    height: 1.333333rem;
    font-size: 0.514286rem;
  }
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
    top: 29%;
    left: 73%;
    transform: translate3d(-50%, -50%, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: 0;
    width: 3.2rem;
    font-size: 14px;
    .toggle {
      width: 100%;
      li {
        text-align: center;
      }
    }
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
  .mint-header-button.is-right {
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
<style lang="scss" scoped>
.my-app-dy-info-index {
  .right-img {
    width: 0.8rem;
    height: 1.066667rem;
  }
}
</style>
