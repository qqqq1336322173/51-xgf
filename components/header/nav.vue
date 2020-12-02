<template>
  <div class="header-nav">
    <el-row>
      <el-col :span="7"
              class="my-header-nav-logo">
        <div class="logo"
             :style="{ backgroundImage: 'url(' + logo + ')' }"></div>
      </el-col>
      <el-col :span="16">
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo nav"
                 mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="1"
                        class="list">
            <nuxt-link to="/">首页</nuxt-link>
          </el-menu-item>
          <el-menu-item index="2"
                        class="list">
            <nuxt-link to="/java">Java</nuxt-link>
          </el-menu-item>
          <el-menu-item index="3"
                        class="list">
            <nuxt-link to="/Oracle">Oracle</nuxt-link>
          </el-menu-item>
          <el-menu-item index="4"
                        class="list">
            <nuxt-link to="/mysql">MySQL</nuxt-link>
          </el-menu-item>
          <!-- <el-menu-item index="5" class="list">
            <nuxt-link to="/course">课程</nuxt-link>
          </el-menu-item> -->
          <el-menu-item index="5"
                        class="list">
            <nuxt-link to="/dyInfo">行业信息</nuxt-link>
          </el-menu-item>
          <el-menu-item index="6"
                        class="list">
            <nuxt-link to="/about">关于我们</nuxt-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      logo: require("@/assets/img/index/logo.png")
    };
  },
  mounted () {
    /*
    分配导航
    */
    // console.log(this.$route.name);
    let name = this.$route.name;
    // console.log(1);
    switch (name) {
      case "index":
        this.activeIndex = "1";
        break;
      case "login":
        this.activeIndex = "0";
        break;
      case "register":
        this.activeIndex = "0";
        break;
      case "java":
        this.activeIndex = "2";
        break;
      case "Oracle":
        this.activeIndex = "3";
        break;
      case "mysql":
        this.activeIndex = "4";
        break;
      case "dyInfo":
        this.activeIndex = "5";
        break;
      case "about":
        this.activeIndex = "6";
        break;
      default:
        this.activeIndex = "0";
        break;
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
/* div.nav */
.nav {
  overflow: hidden;
}
.nav > .list {
  float: left;
  width: 11%;
  font-size: 18px;
  color: #494949;
}
.el-menu--horizontal > .el-menu-item.is-active {
  /* border-bottom: 2px solid #409EFF; */
  border-bottom: 0px;
  color: #ff2929;
}
/* logo样式 */

.my-header-nav-logo {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  padding-right: 40px;
  .logo {
    width: 130px;
    height: 40px;
  }
}
.header-nav {
  border-bottom: 1px solid #eee;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
</style>
