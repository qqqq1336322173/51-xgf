<template>
  <div class="my-header">
    <el-row :gutter="15"
            class="my-header-container">
      <el-col :span="14">
        <div class="geo-user">
          <geo-user />
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <search />
        </div>
      </el-col>
      <el-col :span="4">
        <div>
          <user-exit />
        </div>
      </el-col>
    </el-row>
    <user-header-name />
  </div>
</template>

<script>
import GeoUser from "./geoUser";
import UserExit from "./userExit";
import Search from "./search";
import UserHeaderName from './userHeaderName'
export default {
  components: {
    GeoUser,
    UserExit,
    Search
  }
};
</script>

<style>
.el-header {
  padding: 0;
  height: 143px;
  /* margin-bottom: 20px; */
}
.my-header-container {
  background-color: red;
}
/* .geo-user {
  display: -webkit-flex;
display: flex;
display: -webkit-box;
display: -ms-flexbox;
} */
</style>
