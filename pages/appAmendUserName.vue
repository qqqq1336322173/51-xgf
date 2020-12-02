<template>
  <div class="appAmendUserName">
    <appAmendUserNameHeader :username='username'></appAmendUserNameHeader>
    <div class="container">
      <div class="user-name">
        <input type="text"
               v-model.trim="username"
               placeholder="请输入用户名" />
      </div>
      <div v-show="username">
        <p>说明:</p>
        <p>1.用户每个6个月才能修改一次</p>
      </div>
    </div>
  </div>
</template>
<script>
import appAmendUserNameHeader from "@/components/header/app/appAmendUserNameHeader";
import httpServer from "@/assets/js/httpServer";
// import Vue from 'vue';
// import { Popup, Field } from 'mint-ui';
// Vue.component(Popup.name, Popup);
// Vue.component(Field.name, Field);
export default {
  name: "appAmendUserName",
  layout: "appBlank",
  components: { appAmendUserNameHeader },
  data: function () {
    return {
      username: "",
    };
  },

};
</script>
<style lang="scss">
.appAmendUserName {
  width: 100vw;
  height: 100vh;
  background-color: #f4f5f7;

  * {
    margin: 0;
    padding: 0;
  }
  .container {
    width: 100%;
    .user-name {
      font-size: 0.4rem;
      padding: 0.426667rem 0.453333rem;
      background-color: #fff;
      margin-top: 0.266667rem;
      margin-bottom: 0.266667rem;
      input {
        outline: none;
        border: none;
        width: 100%;
      }
    }
    p {
      font-size: 0.32rem;
      padding-left: 0.453333rem;
      padding-right: 0.453333rem;
      color: #a0a0a0;
      line-height: 1.5;
    }
  }
}
</style>