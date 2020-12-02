<template>
  <div class="my-header">
    <el-row :gutter="15"
            class="my-header-container">
      <el-col :span="13">
        <div class="geo-user">
          <geo />
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <search />
        </div>
      </el-col>
      <el-col :span="4">
        <div>
          <user />
        </div>
      </el-col>
    </el-row>
    <nav-bar />
  </div>
</template>

<script>
import Geo from "./geo";
import User from "./user";
import Search from "./search";
import NavBar from "./nav";
export default {
  components: {
    Geo,
    User,
    Search,
    NavBar,
  },
  mounted () { },
};
</script>

<style>
.el-header {
  padding: 0;
  height: 143px;
  /* margin-bottom: 20px; */
}
.el-menu--horizontal > .el-menu-item a:hover {
  color: #f00;
}
.my-header-container {
  background-color: #ff2929;
}
.my-header {
  font-family: Microsoft Yahei;
}
/* .geo-user {
  display: -webkit-flex;
display: flex;
display: -webkit-box;
display: -ms-flexbox;
} */
</style>
