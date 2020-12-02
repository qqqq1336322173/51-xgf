<template>
  <div class="container">
    <mt-tab-container v-model.trim="$store.state.tabbar.active_id">
      <mt-tab-container-item id="index">
        <app-index />
      </mt-tab-container-item>
      <mt-tab-container-item id="java">
        <app-java-detail />
      </mt-tab-container-item>
      <mt-tab-container-item id="oracle">
        <app-oracle-detail />
      </mt-tab-container-item>
      <mt-tab-container-item id="mysql">
        <app-mysql-detail />
      </mt-tab-container-item>
      <mt-tab-container-item id="myHome">
        <my-body-app-mine />
        <!-- <mt-cell title="tab-container 5">5</mt-cell> -->
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- <div class="tab-container 1"
         id="">1</div>
    <div class="tab-container 2">2</div>
    <div class="tab-container 3">3</div> -->
  </div>
</template>

<script>
import Vue from "vue";
import { TabContainer, TabContainerItem } from "mint-ui";
// import MyHeader from "@/components/header/appIndex.vue";
import AppIndex from "@/components/app/appIndex";
import MyBodyAppMine from "@/components/body/app/myBodyAppMine";
import AppJavaDetail from "@/components/body/app/appJavaDetail";
import AppOracleDetail from "@/components/body/app/appOracleDetail";
import AppMysqlDetail from "@/components/body/app/appMysqlDetail";
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

export default {
  layout: "defaultApp",
  components: {
    AppIndex,
    MyBodyAppMine
  },
  data () {
    return {
      // $store.state.tabbar.active_id: "",
      // active: 'index'
      // active: "tab-container1"
    };
  },
  created () {
    //判断是否是手机端
    if (this.isMobile) {
      this.$router.push("/test");
    } else {
      this.$router.push("/");
    }
    console.log(this);
  },
  mounted () {
    let footer = document.querySelectorAll("footer .mint-tab-item");
    let lastIndex = this.$store.state.indexChild.lastIndex;
    footer[0].classList.remove("is-selected");
    footer[lastIndex].classList.add("is-selected");
    console.log(this.$store.state.indexChild.lastIndex)
    let login = this.$router.currentRoute.query.login || "";
    if (!login) {
      return false;
    }
    if (location.href.indexOf("#reloaded") == -1) {
      location.href = location.href + "#reloaded";
      location.reload();
    }
  },
  methods: {
    handleChange (index) {
      // ...
    }
    // listenToMyBoy (something) {
    //   console.log(something);
    //   this.active = something;
    // }
  },
  watch: {
    $route (to, from) {
      //路由之间的跳转
      // this.radio[parseInt(this.$route.params.questionId)] = 'radio' + parseInt(this.$route.params.questionId)
      // console.log(obj.hasOwnProperty('name'))
      if (to.query.hasOwnProperty("index")) {
        console.log(1);
        // console.log(this.$store.state.tabbar)
        this.$store.state.tabbar.active_id = "index";
      } else if (to.query.hasOwnProperty("java")) {
        console.log(2);
        this.$store.state.tabbar.active_id = "java";
      } else if (to.query.hasOwnProperty("oracle")) {
        console.log(3);
        this.$store.state.tabbar.active_id = "oracle";
      } else if (to.query.hasOwnProperty("mysql")) {
        console.log(4);
        this.$store.state.tabbar.active_id = "mysql";
      } else if (to.query.hasOwnProperty("myHome")) {
        // console.log(1);
        //如果有登陆就跳转到
        /*
        1.如何判断没有登录
        */
        // console.log(JSON.parse(this.$store.getters.getUser));
        // return false;
        let userInfo = JSON.parse(this.$store.getters.getUser);
        if (!userInfo) {
          // location.reload();
          this.$router.push("/appLogin");
        } else {
          // location.reload();
          //跳转到登录页面
          this.$store.state.tabbar.active_id = "myHome";
        }
        //
      } else {
        this.$store.state.tabbar.active_id = "index";
      }
      // console.log(to.query.hasOwnProperty('index'));
    }
  }
};
</script>

<style></style>
