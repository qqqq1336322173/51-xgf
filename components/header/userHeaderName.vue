<template>
  <div
    class="my-user-header-name"
    :style="{ backgroundImage: 'url(' + bg + ')' }"
  >
    <div class="user-info-name">
      <el-row :gutter="10">
        <el-col :span="12">
          <div class="user-info-header">
            <img :src="user_head" alt="头像" />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="user-info-name-icon">
            <p>{{ username }}</p>
            <p>男 | 更多信息</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import storage from "@/assets/js/storage"; //引入本地
export default {
  data() {
    return {
      bg: require("@/assets/img/userInfo/user_name_bg.png"),
      username: "",
      user_head: require("@/assets/img/userInfo/user_head.png")
    };
  },
  mounted() {
    //如果直接访问个人中心页面，如果没登录就回到首页
    let userInfo = storage.get("user"),
      username;
    if (userInfo) {
      console.log(this);
      username = sessionStorage.username;
      this.username = username;
    } else {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.my-user-header-name {
  height: 77px;
  margin-left: -7.5px;
  margin-right: -7.5px;
  margin-top: -1.2px;
  color: #fff;
  position: relative;
}
.user-info-header > img {
  width: 78.5px;
}
.user-info-name {
  position: absolute;
  left: 17.5%;
  top: 30%;
}
.user-info-name-icon > p {
  white-space: nowrap;
}
</style>
