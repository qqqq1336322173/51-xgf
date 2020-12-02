<template>
  <div class="app-order">
    <div class="navigation-bar">
      <span class="back mintui mintui-back"
            style="padding:12px;"
            @click="handleBack"></span>
      <p class="title">确定购买</p>
    </div>
    <div class="body">
      <!-- 购买信息 -->
      <section class="buy-info __order-box"
               v-if="productInfo">
        <p class="title">商品信息</p>
        <div class="info-box">
          <img src="~assets/img/app/order/product@2x.png"
               alt=""
               class="product-image">
          <div class="info-content">
            <p class="name">课程名称：{{productInfo.productname}}</p>
            <span class="price">
              ￥<span class="ft-price">{{productInfo.price | price}}</span>
            </span>
          </div>
        </div>
      </section>
      <section class="pay-type __order-box">
        <p class="title">支付方式</p>
        <div class="pay-type-item"
             v-for="(item, index) in payTypes"
             :key="index"
             @click="currentPayType = item.value">
          <!--选择支付方式的点击-->
          <!-- 选中状态的radio -->
          <img v-if="currentPayType === item.value"
               src="~assets/img/app/order/radio-active@2x.png"
               class="radio-icon">
          <!-- 未选中 -->
          <img v-else
               src="~assets/img/app/order/radio-normal@2x.png"
               class="radio-icon">
          <img :src="item.icon"
               class="pay-icon-image">
          <span class="name">{{item.name}}</span>
        </div>
      </section>
      <section class="agreement __order-box">
        <p class="title">用户协议</p>
        <div class="agreement-text-row">
          <!-- 选中状态的radio -->
          <img v-if="isAgree"
               src="~assets/img/app/order/radio-active@2x.png"
               class="radio-icon">
          <!-- 未选中 -->
          <img v-else
               @click="isAgree = true"
               src="~assets/img/app/order/radio-normal@2x.png"
               class="radio-icon">
          <p class="agreement-text"
             @click="showAgreement = true"
             :class="{'agree': isAgree}">
            《51学工坊用户付费协议》
          </p>
        </div>
      </section>
      <div class="footer">
        <div class="left">
          <span>实付</span>
          <span class="ft-price">{{productInfo.price | price}}</span>
        </div>
        <a class="confirm-btn"
           @click="handleConfirmPay">确认支付</a>
      </div>
      <div class="dialog"
           v-if="showAgreement"
           @click.stop="showAgreement = false">
        <div class="content">
          <img src="~assets/img/order/close@2x.png"
               alt="关闭"
               class="btn-close"
               @click="showAgreement = false">
          <h4 class="agreement-title">51学工坊服务（培训）协议</h4>
          <div class="agreement-content">
            <p>甲方：学员</p>
            <p>乙方：51学工坊</p>
            <p>甲乙双方经友好协商，就乙方向甲方提供课程培训及相关服务，达成以下协议：</p>
            <p>
              1.甲方在签订本协议时，同乙方约定课程服务时间并申明特别服务要求。如遇不可预计因素影响，
              乙方教学安排有所调整，甲方应根据乙方调整后安排就读。甲方应据约定参加乙方提供的服务，未获乙方书面同意而缺课的，
              视为甲方已享有此服务，乙方不再单独为其安排此服务，且甲方不可据此要求退费。
            </p>
            <p>2.乙方教学计划主要通过官方网站、腾讯课堂发布，甲方应经常留意相关通告并按
              要求参加学习。如教学计划临时有所变动，乙方将配用短信、邮件、QQ或电话等方式
              通知甲方，以便甲方知情并做出相应安排。为配合乙方保障服务质量，甲方需确保其向
              乙方提供的背景信息、课程要求、相关证明等的严肃性、真实性和准确性；如因甲方提
              供信息不真实导致其未能按时学习，甲方不能据此要求退费。
            </p>
            <p>3.如甲方不满意乙方的服务，可于首次缴款后3日内提出书面申请并可获已缴款项的全
              额退款；如享有其他任何特价培训将不予退费，如赠送课程；如非乙方的原因不能继续完
              成所有课程的，甲方不得单方面解除协议和要求退款。
            </p>
            <p>4.本课程服务有限期为三个月（预计），即甲方需在三个月内参加完所有课程学习。特
              殊情况需延长的，需取得乙方书面同意。
            </p>
            <p>5.协议期间，甲方不得将乙方提供课程服务以录播翻拍的形式在网上传播，甲方不遵守
              相关纪律和要求的，乙方有权提出警告。累计警告三次以上，取消重听资格；情节特别严重者
              ，取消学籍，所有学费不予退还。
            </p>
            <p>
              6.乙方在不同的时间阶段会根据运营需求推出相应的服务费用优惠活动，甲方已缴交或需缴交
              的服务费用可能与此优惠价格存在一些差异，甲方不得以此为理由与乙方产生争议。
            </p>
            <p>7.本协议从学员签订之日起生效，到服务有效期满为止。</p>
          </div>
          <div class="agreement-footer">
            <a class="agreement-btn"
               @click.stop="showAgreement = false">
              知道了</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import httpServer from '@/assets/js/httpServer';

const payTypes = [
  {
    name: '支付宝',
    value: 1, // 实际的常量需要和后端约定
    icon: require('assets/img/app/order/alipay@2x.png'),
  },
  {
    name: '微信支付',
    value: 2, // 实际的常量需要和后端约定
    icon: require('assets/img/app/order/wxpay@2x.png'),
  },
];
export default {
  layout: 'appBlank',
  data () {
    return {
      payTypes,
      currentPayType: payTypes[0].value, // 当前选择的支付方式
      isAgree: false, // 是否同意付费协议
      showAgreement: false, // 显示付费协议的模态框，
      productInfo: null,
      orderInfo: null
    };
  },
  filters: {
    price (value) {
      // 价格保留两位小数
      return (value && value.toFixed(2)) || 0.0;
    },
  },
  async asyncData (ctx) {
    // 通过路由参数获取 productid
    const { productid } = ctx.query;
    // 获取购买商品信息
    const productInfo = await httpServer(
      {
        url: 'http://120.78.61.58:81/eduonline/user/findProduct.action',
        method: 'post',
      },
      {
        productid,
      }
    );

    // https://zh.nuxtjs.org/api/ asyncData 方法
    return {
      productInfo: productInfo.data,
    };
  },
  methods: {
    handleConfirmPay () {
      if (!this.isAgree) {
        // 如果没有同意协议
        Toast('请阅读并同意用户协议');
      } else {
        // 正常支付逻辑
        //1. 获取订单号等信息
        this.getOrderInfo()
      }
    },
    getOrderInfo () {
      // 2-1 获取localstorage中的userid
      // **FIXME 5 为测试的用户id，正式发布的时候需要修复这里**
      const userid = localStorage.userid || 5;
      // 调用接口
      httpServer({
        url: 'http://120.78.61.58:81/eduonline/user/order.action',
        methods: 'post'
      }, {
        userid,
        productid: this.productInfo.id
      }).then(r => {
        if (r.status === 200) {
          this.orderInfo = r.data.order
          // 2-3 获取订单信息成功，
          // 3.支付， 暂无接口...
        } else {
          this.handlePayFail(r)
        }
      }).catch(err => {
        this.handlePayFail(err)
      })
    },
    handlePayFail () {
      // 支付失败相关的逻辑
      // 跳转支付失败页面
      this.$router.push('/appPayResult?isSuccess=false')
    },
    handleBack () {
      this.$router.back(-1)
    }
  },
};
</script>

<style scoped>
.app-order {
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
.body {
  padding-top: 1.6rem /* 60/37.5 */;
}
.navigation-bar .title {
  width: 100%;
  font-size: 0.426667rem /* 16/37.5 */;
  text-align: center;
  padding-top: 0.533333rem /* 20/37.5 */;
}
.__order-box {
  margin-top: 0.266667rem /* 10/37.5 */;
  background: #fff;
  padding: 0.266667rem /* 10/37.5 */;
  box-sizing: border-box;
}
.buy-info .info-box {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  padding: 0.266667rem /* 10/37.5 */ 0;
  position: relative;
}
.buy-info .product-image {
  width: 2.133333rem /* 80/37.5 */;
  height: 2.133333rem /* 80/37.5 */;
  border-radius: 50%;
}
.buy-info .name {
  font-family: "PingFang-SC-Medium";
  color: rgb(34, 34, 34);
  font-size: 0.426667rem /* 16/37.5 */;
  margin-left: 0.266667rem /* 10/37.5 */;
  margin-top: 0.266667rem /* 10/37.5 */;
}
.buy-info .price {
  color: rgb(233, 0, 18);
  position: absolute;
  bottom: 0.4rem /* 15/37.5 */;
  right: 0.266667rem /* 10/37.5 */;
}
.ft-price {
  color: rgb(233, 0, 18);
  font-size: 0.373333rem; /* 14/37.5 */
}
.radio-icon {
  width: 0.48rem /* 18/37.5 */;
  height: 0.48rem /* 18/37.5 */;
}
.pay-type-item {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f2f2f2;
}
.pay-type-item:last-of-type {
  border-bottom: none;
}
.pay-type-item .pay-icon-image {
  width: 0.64rem /* 24/37.5 */;
  height: 0.64rem /* 24/37.5 */;
  margin-left: 0.266667rem /* 10/37.5 */;
}
.pay-type-item .name {
  margin-left: 0.266667rem /* 10/37.5 */;
  font-size: 0.426667rem /* 16/37.5 */;
}
.agreement-text-row {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  align-items: center;
  font-size: 0.426667rem /* 16/37.5 */;
  padding: 0.266667rem /* 10/37.5 */ 0;
}
.agreement-text {
  margin-left: 0.133333rem; /* 5/37.5 */
}
.agreement-text.agree {
  color: rgb(91, 166, 65);
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
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 999;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  align-items: center;
  justify-content: center;
}
.dialog .content {
  padding: 0.266667rem /* 10/37.5 */;
  background: #fff;
  width: 9.066667rem /* 340/37.5 */;
  height: 14.933333rem /* 560/37.5 */;
  overflow: auto;
  position: relative;
  animation: moveIn 0.3s ease-in-out;
}
.dialog .content .agreement-title {
  font-size: 0.453333rem /* 17/37.5 */;
  font-family: "AdobeHeitStd-Regular";
  color: rgb(34, 34, 34);
  text-align: center;
  padding-top: 0.533333rem /* 20/37.5 */;
  padding-bottom: 0.266667rem /* 10/37.5 */;
  font-weight: 400;
}
.dialog .content .btn-close {
  width: 0.373333rem /* 14/37.5 */;
  height: 0.373333rem /* 14/37.5 */;
  position: absolute;
  top: 0.4rem /* 15/37.5 */;
  right: 0.4rem /* 15/37.5 */;
}
.dialog .content .agreement-content {
  font-size: 0.32rem /* 12/37.5 */;
  color: rgb(102, 102, 102);
  font-family: "AdobeHeitStd-Regular";
}
.dialog .content .agreement-footer {
  text-align: right;
  padding-top: 0.266667rem /* 10/37.5 */;
}
.agreement-footer .agreement-btn {
  display: inline-block;
  background: rgb(233, 0, 18);
  color: #ffffff;
  width: 1.733333rem /* 65/37.5 */;
  height: 0.666667rem /* 25/37.5 */;
  border-radius: 0.213333rem /* 8/37.5 */;
  text-align: center;
  line-height: 0.666667rem /* 25/37.5 */;
}
@keyframes moveIn {
  from {
    transform: translateY(150%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
