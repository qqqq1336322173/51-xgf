<template>
  <div class="m-user">
    <template v-if="username">
      <!-- 欢迎，{{ user }} -->
      <el-dropdown class="m-user-head"
                   @command="handleCommand">
        <div class="el-dropdown-link">
          <svg class="icon icon-header"
               aria-hidden="true">
            <use xlink:href="#icon-yonghu"></use>
          </svg>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">{{ username }}</el-dropdown-item>
          <el-dropdown-item command="b">
            <nuxt-link class="user-exit"
                       to="/exit">
              <svg class="icon icon-tuichu"
                   aria-hidden="true">
                <use xlink:href="#icon-tuichu"></use>
              </svg>退出
            </nuxt-link>
          </el-dropdown-item>
          <!-- <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <nuxt-link class="exit" to="/exit">注销</nuxt-link> -->
    </template>
    <template v-else>
      <nuxt-link class="login"
                 to="/pcLogin">登录</nuxt-link>
      <nuxt-link class="register"
                 to="/pcRegister">注册</nuxt-link>
    </template>
  </div>
</template>

<script>
// import "@/assets/js/iconUserfont";
export default {
  data () {
    return {
      username: "liusunyin"
    };
  },
  created () { },
  mounted () {
    import("@/assets/js/iconfont.js").then(icon => { });
    let username = sessionStorage.username;
    this.username = username;
    //如果未登录直接到首页
    if (!username) {
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    handleCommand (command) {
      // this.$message("click on item " + command);
    }
  }
};
</script>

<style scoped>
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
  color: #f00;
}
.el-dropdown-menu__item:hover {
  color: #f00;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
