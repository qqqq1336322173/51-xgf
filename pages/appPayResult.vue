<template>
  <div class="app-pay-result">
    <div class="navigation-bar">
      <span class="back mintui mintui-back"
            style="padding:12px;"
            @click="handleBack"></span>
      <p class="title">订单信息</p>
    </div>
    <div class="body">
      <section class="content">
        <img v-if="isSuccess"
             class="result-image"
             src="~assets/img/app/order/app-pay-success@2x.png"
             alt="支付结果">
        <img v-else
             class="result-image"
             src="~assets/img/app/order/app-pay-fail@2x.png"
             alt="支付结果">
        <br>
        <img v-if="isSuccess"
             src="~assets/img/app/order/pay-success-btn@2x.png"
             class="main-btn"
             alt="">
        <img v-else
             src="~assets/img/app/order/pay-fail-btn@2x.png"
             class="main-btn"
             alt="">
      </section>
      <div class="footer"
           v-if="isSuccess">
        <div class="left">
          支付成功点击返回主页 >
        </div>
        <a class="confirm-btn"
           @click="goHome">完成</a>
      </div>
      <div class="footer"
           v-else>
        <div class="left">
          商品支付失败，请重新返回支付 >
        </div>
        <a class="confirm-btn fail"
           @click="handleBack">返回</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'appBlank',
  data () {
    return {};
  },
  asyncData ({ query }) {
    const isSuccess = query && query.isSuccess
    return {
      isSuccess: isSuccess === 'true' // 判断是否支付成功
    }
  },
  methods: {
    goHome () {
      this.$router.replace('/appIndex')
    },
    handleBack () {
      this.$router.back(-1)
    }
  }
};
</script>

<style scoped>
.app-pay-result {
  width: 100vw;
  height: 100vh;
  background: rgb(244, 245, 247);
  font-family: "MicrosoftYaHei";
}
.navigation-bar {
  height: 1.6rem /* 60/37.5 */;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  align-items: center;
}
.back {
  position: absolute;
  left: 0.266667rem /* 10/37.5 */;
  font-size: 0.426667rem /* 16/37.5 */;
  padding-top: 0.533333rem /* 20/37.5 */;
}
.navigation-bar .title {
  width: 100%;
  font-size: 0.426667rem /* 16/37.5 */;
  text-align: center;
  padding-top: 0.533333rem /* 20/37.5 */;
}
.body {
  padding-top: 1.6rem /* 60/37.5 */;
}
.content {
  background: #fff;
  margin-top: 0.266667rem /* 10/37.5 */;
  padding-top: 2.133333rem /* 80/37.5 */;
  padding-bottom: 2.666667rem /* 100/37.5 */;
  text-align: center;
}
.content .result-image {
  width: 4.373333rem /* 164/37.5 */;
  height: 4.373333rem /* 164/37.5 */;
  border-radius: 50%;
}
.content .main-btn {
  width: 4.933333rem /* 185/37.5 */;
  height: 1.28rem /* 48/37.5 */;
  margin-top: 0.666667rem /* 25/37.5 */;
}
.footer {
  height: 1.333333rem /* 50/37.5 */;
  background: #fff;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.footer .left {
  flex: 1;
  text-align: center;
}
.footer .confirm-btn {
  color: #fff;
  width: 3.093333rem /* 116/37.5 */;
  text-align: center;
  background: rgb(233, 0, 18);
  height: 100%;
  line-height: 1.333333rem /* 50/37.5 */;
  font-size: 0.426667rem /* 16/37.5 */;
}
.footer .confirm-btn.fail {
  background: rgb(153 153 153);
}
</style>