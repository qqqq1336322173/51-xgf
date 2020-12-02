<template>
  <mt-tabbar v-model.trim="selected"
             class="my-app-tabbar"
             @click.native="doSomething">
    <mt-tab-item id="index">
      <div class="mint-tab-item-icon">
        <svg class="icon-tabbar"
             aria-hidden="true">
          <use xlink:href="#icon-jiazhuyewode-1"></use>
        </svg>
      </div>
      <div class="mint-tab-item-label">
        首页
      </div>
      <!-- <img slot="icon"
           src="~assets/img/index/51xgf.png" />
      首页 -->
    </mt-tab-item>
    <mt-tab-item id="java">
      <div class="mint-tab-item-icon">
        <svg class="icon-tabbar"
             aria-hidden="true">
          <use xlink:href="#icon-java"></use>
        </svg>
      </div>
      <div class="mint-tab-item-label">
        Java
      </div>
    </mt-tab-item>
    <mt-tab-item id="oracle">
      <div class="mint-tab-item-icon">
        <svg class="icon-tabbar"
             aria-hidden="true">
          <use xlink:href="#icon-xingzhuang"></use>
        </svg>
      </div>
      <div class="mint-tab-item-label">
        Oracle
      </div>
    </mt-tab-item>
    <mt-tab-item id="mysql">
      <div class="mint-tab-item-icon">
        <svg class="icon-tabbar"
             aria-hidden="true">
          <use xlink:href="#icon-mySql"></use>
        </svg>
      </div>
      <div class="mint-tab-item-label">
        MySql
      </div>
    </mt-tab-item>
    <mt-tab-item id="myHome">
      <!-- #icon-yonghu -->
      <div class="mint-tab-item-icon">
        <svg class="icon-tabbar"
             aria-hidden="true">
          <use xlink:href="#icon-yonghu"></use>
        </svg>
      </div>
      <div class="mint-tab-item-label">
        我的
      </div>
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabItem } from "mint-ui";
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
  data () {
    return {
      selected: "index"
    };
  },
  created () {
    // Toast({
    //   message: "提示",
    //   position: "bottom",
    //   duration: 5000
    // });
  },
  methods: {
    handleChange (index) {
      // ...
    },
    doSomething () {
      // console.log(1);
      //把弹的东西关闭
      this.$store.state.nav.flag = false;
      let footer = document.querySelectorAll("footer .mint-tab-item");
      let lastIndex = this.$store.state.indexChild.lastIndex;
      if (this.selected == "myHome") {
        //有登陆就
        let userInfo = JSON.parse(this.$store.getters.getUser);
        if (!userInfo) {
          this.$router.push("/appLogin");
          return false;
        }
        this.$store.state.indexChild.lastIndex = 4;
      }
      this.$store.state.tabbar.active_id = this.selected;
      // if (this.selected == 'index') {
      //   location.reload();
      // }
      switch (this.selected) {
        case "index":
          footer[lastIndex].classList.remove("is-selected");
          footer[0].classList.add("is-selected");
          this.$store.state.indexChild.lastIndex = 0;
          break;
        case "java":
          footer[lastIndex].classList.remove("is-selected");
          footer[1].classList.add("is-selected");
          this.$store.state.indexChild.lastIndex = 1;
          break;
        case "oracle":
          footer[lastIndex].classList.remove("is-selected");
          footer[2].classList.add("is-selected");
          this.$store.state.indexChild.lastIndex = 2;
          break;
        case "mysql":
          footer[lastIndex].classList.remove("is-selected");
          footer[3].classList.add("is-selected");
          this.$store.state.indexChild.lastIndex = 3;
          break;
        default:
          // this.$store.state.indexChild.lastIndex = 3;
          break;
      }
      console.log(this.$store.state.indexChild.lastIndex)
      console.log(this.selected);
      // this.$store.dispatch('EDIT_TAB_BAR', "oracle")
      // this.$store.commit("tabbarEDIT_TAB_BAR", "oracle")
    }
  }
};
</script>
<style lang="scss" scoped>
.my-app-tabbar {
  .icon-tabbar {
    /* width: 0.64rem;
  height: 0.64rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden; */
  }
  .mint-tab-item {
    color: #a1a1a1;
  }
  .mint-tab-item.is-selected {
    // background-color: #eaeaea;
    color: #f00;
  }
}
.mint-tabbar {
  position: fixed;
  z-index: 9999;
}
</style>
