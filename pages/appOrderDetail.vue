<template>
  <div class="appOrderDetail">
    <appOrderDetailHeader></appOrderDetailHeader>
    <div class="container">
      <div class="unify-sty bgc-fff">
        <p>
          订单号:
          <span class="c-666">{{orderInfo.orderno}}</span>
        </p>
        <p class="c-666">已付款</p>
      </div>
      <div class="unify-sty">
        <p>考试订单</p>
      </div>
      <div class="unify-sty bgc-fff">
        <p>
          下单时间:
          <span class="c-666">{{orderInfo.createtime}}</span>
        </p>
      </div>
      <div class="unify-sty bgc-fff">
        <p>
          产品名称:
          <span class="c-666">{{orderInfo.productname}}</span>
        </p>
        <p class="c-666">
          价格:
          <span class="c-666">￥{{orderInfo.orderprice}}</span>
        </p>
      </div>
      <div class="unify-sty bgc-fff">
        <p>
          证书名称:
          <span class="c-666">{{orderInfo.authlevel}}</span>
        </p>
        <!-- <p class="c-666">
          状态:
          <span class="c-666">已支付</span>
        </p> -->
      </div>
      <div class="unify-sty">
        <p>考试订单</p>
      </div>
      <div class="unify-sty bgc-fff">
        <p>支付通道:</p>
        <p class="c-666">支付宝</p>
      </div>
      <div class="unify-sty bgc-fff">
        <p>交易号:</p>
        <p class="c-666">201911117 70909080871</p>
      </div>
      <div class="unify-sty bgc-fff">
        <p>实际支付金额:</p>
        <p class="c-666">￥888.88</p>
      </div>
    </div>
  </div>
</template>
<script>
import appOrderDetailHeader from "@/components/header/app/appOrderDetailHeader";
export default {
  name: "appOrderDetail",
  layout: "appBlank",
  components: { appOrderDetailHeader },
  data () {
    return {
      orderInfo: {}
    }
  },
  created () {
    var list = decodeURIComponent(this.$route.query.orderInfo);
    this.orderInfo = JSON.parse(list)
    // console.log();
    // console.log()
  }
};
</script>
<style lang="scss">
.appOrderDetail {
  width: 100vw;
  height: 100vh;
  background-color: #f4f5f7;
  * {
    margin: 0;
    padding: 0;
  }
  .container {
    font-size: 0.32rem;
    padding-top: 0.266667rem;
    .c-666 {
      color: #666666;
    }
    .bgc-fff {
      background-color: #fff;
    }
    .bgc-f4f5f7 {
      background-color: #f4f5f7;
    }
    .unify-sty {
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: space-between;
      align-items: center;
      padding: 0.44rem;
    }
  }
}
</style>