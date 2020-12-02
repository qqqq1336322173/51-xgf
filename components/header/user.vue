<template>
  <div class="m-user">
    <template v-if="username">
      <!-- 欢迎，{{ user }} -->
      <el-dropdown class="m-user-head" @command="handleCommand">
        <div class="el-dropdown-link">
          <svg class="icon icon-header" aria-hidden="true">
            <use xlink:href="#icon-yonghu" />
          </svg>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">{{ username }}</el-dropdown-item>
          <el-dropdown-item command="b" divided>
            <svg class="icon icon-touxiang" aria-hidden="true">
              <use xlink:href="#icon-touxiang" />
            </svg>
            <nuxt-link class="user-info" to="/userInfo">个人中心</nuxt-link>
          </el-dropdown-item>
          <el-dropdown-item command="c" divided>
            <svg class="icon icon-tuichu" aria-hidden="true">
              <use xlink:href="#icon-tuichu" />
            </svg>
            <nuxt-link class="user-exit" to="/exit">退出</nuxt-link>
          </el-dropdown-item>
          <!-- <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>-->
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <nuxt-link class="exit" to="/exit">注销</nuxt-link> -->
    </template>
    <template v-else>
      <nuxt-link class="login" to="/pcLogin">登录</nuxt-link>
      <span class="row-line">|</span>
      <nuxt-link class="register" to="/pcRegister">注册</nuxt-link>
    </template>
  </div>
</template>

<script>
import storage from "@/assets/js/storage"; //引入本地
// import "@/assets/js/iconUserfont";
export default {
  data() {
    return {
      username: "",
    };
  },
  created() {},
  mounted() {
    import("@/assets/js/iconfont.js").then((icon) => {});
    //用户信息都存在的情况才渲染
    let userInfo = storage.get("user");
    let username;
    if (userInfo) {
      console.log(userInfo);
      username = sessionStorage.username;
      this.username = username;
    }
    //用户名不存在要跳转到登录
    if (!username && this.$router.currentRoute.name == "order") {
      let productid = this.$route.query.productid;
      sessionStorage.productid = this.$route.query.productid;
      // location.href = "/pcLogin&productid=" + productid;
      this.$router.push({
        path: "/loginAndRegister",
        query: { login: "", productid: productid },
      });
    }
    console.log(username);
  },
  methods: {
    handleCommand(command) {
      // this.$message("click on item " + command);
    },
  },
};
</script>

<style>
.m-user {
  position: relative;
}
.m-user-head {
  width: 48px;
  height: 48px;
  background: #ccc;
  position: absolute;
  top: 6px;
  border-radius: 48px;
  /* left: 3px; */
  text-align: center;
}
.icon-header {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  width: 36px;
  height: 36px;
  margin-top: 5px;
  color: #4f4d4d;
}
.icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.icon-touxiang,
.icon-tuichu {
  width: 1em;
  height: 1em;
}
.m-user {
  line-height: 60px;
}
.m-user > a {
  color: #fff;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.login,.register {
  font-size: 16px;
}
.row-line{
  font-size: 16px;
  color: #fff;
}
</style>
