<template>
  <div class="appLoginAndRegister">
    <!-- 头部 -->
    <mt-header :title="title"
               class="header">
      <router-link to="/"
                   slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="appLoginAndRegister-content">
      <img class="img51"
           src="~assets/img/app/login/img01.png"
           alt />
      <div v-show="flag"
           class="login-form">
        <input class="input-1 m-top-70"
               type="text"
               placeholder="请输入登入邮箱、手机号" />
        <input class="input-1 m-top-60"
               type="text"
               placeholder="6-16位密码，区分大小写，不能用空格" />
        <div class="input-box">
          <input class="input-2"
                 type="number"
                 placeholder="手机验证码获" />
          <mt-button class="btn"
                     type="default">取短信验证码</mt-button>
        </div>
        <div class="login">
          <mt-button type="danger"
                     size="large">登录</mt-button>
        </div>
        <div class="app-login-tabs">
          <span @click="toggle()">注册账号</span>
          <span class="y-line">|</span>
          <span>忘记密码?</span>
        </div>
      </div>
      <div v-show="!flag"
           class="register-form">
        <input class="input-1 m-top-70"
               type="text"
               placeholder="请输入登入邮箱、手机号" />
        <input class="input-1 m-top-60"
               type="text"
               placeholder="6-16位密码，区分大小写，不能用空格" />
        <div class="input-box">
          <input class="input-2"
                 type="number"
                 placeholder="手机验证码获" />
          <mt-button class="btn"
                     type="default">取短信验证码</mt-button>
        </div>
        <div class="login">
          <mt-button type="danger"
                     size="large">注册</mt-button>
        </div>
        <div class="app-login-tabs">
          <span @click="toggle()">登录账号</span>
          <span class="y-line">|</span>
          <span>忘记密码?</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import storage from '@/assets/js/storage'//引入本地
export default {
  name: "appLoginAndRegister",
  layout: 'appBlank',
  data: function () {
    return {
      flag: true,
      title: "登 录",
    };
  },
  methods: {
    // 切换
    toggle () {
      this.title = this.flag ? '注 册' : '登 录';
      this.flag = !this.flag;
    },
  },
};
</script>
<style lang="scss">
body {
  background-color: #fff;
}
.appLoginAndRegister {
  * {
    margin: 0;
    padding: 0;
  }

  .mint-header {
    background-color: #fff;
    color: #333;
    font-size: 0.514286rem;
  }
  .mintui {
    font-family: "mintui" !important;
    font-size: 0.5rem;
    padding: 12px;
  }
  .appLoginAndRegister-content {
    padding-top: 1.428571rem;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    .img51 {
      width: 5.428571rem;
    }
    input::-webkit-input-placeholder {
      color: #bebebe;
    }
    .register-form,
    .login-form {
      width: 8.228571rem;
      .m-top-70 {
        margin-top: 1rem;
      }
      .m-top-60 {
        margin-top: 0.857143rem;
      }
      .input-1 {
        width: 100%;
        border: none;
        line-height: 2;
        font-size: 0.4rem;
        border-bottom: 1px solid #e3e3e3;
        outline: medium;
      }
      .input-box {
        border-bottom: 1px solid #e3e3e3;
        padding-top: 0.857143rem;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        .input-2 {
          border: none;
          flex: 1;
          line-height: 2;
          font-size: 0.4rem;
          outline: medium;
        }

        .mint-button--default {
          color: #5397e4;
          font-size: 0.342857rem;
          background-color: #fff;
          box-shadow: none;
        }
      }
      .login {
        margin-top: 0.857143rem;
        .mint-button--danger {
          color: #fff;
          background-color: #ff2929;
        }
        .mint-button {
          border-radius: 0.214286rem;
        }
      }
      .app-login-tabs {
        font-size: 0.371429rem;
        color: #666666;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        justify-content: center;
        align-items: center;
        line-height: 3;
        .y-line {
          margin-left: 0.071429rem;
          margin-right: 0.071429rem;
        }
      }
    }
  }
}
</style>