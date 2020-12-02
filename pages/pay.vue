<template>
  <div class="page-pay">
    <div class="page-pay-header">
      <img :src="currentPayType.logo"
           alt="logo加载中..."
           class="pay-logo">
      <span class="line"></span>
      <span class="page-pay-title">我的收银台</span>
    </div>
    <div class="page-pay-body">
      <p class="tip">
        <span>正在使用到账交易</span>
        <a class="link">[?]</a>
        <span>{{expireTimeText}}</span>
      </p>
      <p class="order-info">
        <span>51学工坊订单-{{order.orderno}}</span>
        <span class="space-left">收款方：福建省福州市安博榕...</span>
      </p>
      <div class="pay-content">
        <div class="content-main">
          <p class="scan-tip">扫一扫付款（元）</p>
          <p class="price">{{order.orderprice | price}}元</p>
          <div class="qr-code-wrapper">
            <img src="~assets/img/order/qr-code@2x.png"
                 alt="支付二维码"
                 class="qr-code-image">
            <div class="row">
              <img src="~assets/img/order/scan-icon@2x.png"
                   alt=""
                   class="scan-icon">
              <div class="tip">
                <p>打开手机{{currentPayType.name}}</p>
                <p>扫一扫继续付款</p>
              </div>
            </div>
            <img src="~assets/img/order/scan@2x.png"
                 alt=""
                 class="scan-tip-image">
          </div>
          <p class="scan-tip-bottom">首次使用请下载手机{{currentPayType.name}}</p>
        </div>
        <div class="content-left">
          <img :src="currentPayType.designImg"
               alt=""
               class="design-image">
          <img :src="currentPayType.guide"
               alt=""
               class="button-guide">
        </div>
      </div>
    </div>
    <div class="page-pay-footer">
      <p class="icp">ICP证：闽XX-XXXXXXXXX</p>
      <img src="~assets/img/order/other-pay-type@2x.png"
           alt="其他支付方式"
           class="other-pay-type-image">
    </div>
  </div>
</template>

<script>

// 所有支持的支付类型
const PayType = {
  ALiPay: {
    name: '支付宝',
    value: 1, // 和后端约定的支付方式常量，未来可能会用到
    guide: require('assets/img/order/alipay-guide@2x.png'), // 登录支付宝付款提示
    logo: require('assets/img/order/alipay-logo@2x.png'),
    designImg: require('assets/img/order/alipay-design@2x.png'), // 带电脑边框的那张图片，实在不知道取什么名字了，如果有更好的命名的话，自行修改
  },
  WXPay: {
    name: '微信',
    value: 2, // 和后端约定的支付方式常量，未来可能会用到
    guide: null, //暂无
    logo: null, //暂无
    designImg: null // 暂无
  }
}
export default {
  data () {
    return {
      currentPayType: PayType.ALiPay, // 目前选中的支付方式，暂且为支付宝，未来动态修改
      order: null
    }
  },
  computed: {
    // 订单过期时间
    expireTimeText () {
      const { expiretime } = this.order;
      if (!expiretime) return null
      const now = new Date()
      const expireDate = new Date(expiretime.replace(/-/g, "/"))
      if (now > expireDate) return '订单已过期'
      const dateDiff = expireDate.getTime() - now.getTime();
      const day = Math.floor(dateDiff / (24 * 3600 * 1000));
      const leave1 = dateDiff % (24 * 3600 * 1000);
      const hours = Math.floor(leave1 / (3600 * 1000))
      const leave2 = leave1 % (3600 * 1000);
      const minutes = Math.floor(leave2 / (60 * 1000));
      const dayText = day ? `${day}天` : ''
      const hoursText = hours ? `${hours}小时` : ''
      const minutesText = minutes ? `${minutes}分钟` : ''
      return `交易将在${dayText}${hoursText}${minutesText}后关闭，请及时付款`
    }
  },
  filters: {
    price (value) { // 价格保留两位小数
      return (value && value.toFixed(2)) || 0.00
    }
  },
  asyncData ({ query }) {
    // 这里使用localStorage是防止刷新页面的时候参数丢失
    const order = query && query.order

    if (!order || (typeof order !== 'object')) {
      console.log('order', typeof order)
      return {
        order: JSON.parse(localStorage.order)
      }
    }
    localStorage.order = JSON.stringify(order)
    console.log(order, typeof order, localStorage.order)
    return {
      order
    }
  }
}
</script>

<style scoped>
.page-pay {
  font-family: "MicrosoftYaHei";
  /* 为保证页面是根据浏览器窗口自行调整的，这里使用百分比 */
  background: #eff0f1;
  height: 100%;
  font-size: 18px;
  color: #222;
}
.page-pay-header,
.page-pay-body {
  padding: 0 24%;
}
@media all and (max-width: 1398px) {
  .page-pay-header,
  .page-pay-body {
    padding: 0 18%;
  }
}
@media all and (max-width: 1000px) {
  .page-pay-header,
  .page-pay-body {
    padding: 0 17%;
  }
}
.page-pay-header {
  width: 100%;
  background: #fff;
  padding-top: 30px;
  padding-bottom: 40px;
  position: absolute;
  top: 60px;
  left: 0;
}
.page-pay-header .pay-logo {
  vertical-align: bottom;
  width: 145px;
  height: 52px;
}
.page-pay-header .line {
  height: 40px;
  width: 1px;
  background: #999999;
  display: inline-block;
  position: relative;
  top: 5px;
  margin-left: 8px;
}
.page-pay-title {
  font-size: 22px;
  vertical-align: bottom;
  color: #666;
}
.page-pay-body {
  padding-top: 80px;
}
.page-pay-body .tip {
  font-size: 16px;
  color: #666;
}
.page-pay-body .tip .link {
  color: #0084ff;
}
.page-pay-body .order-info {
  color: #222;
  font-size: 18px;
}
.space-left {
  margin-left: 10px;
}
.pay-content {
  margin: 20px 0;
  border-top: 4px solid #666;
  border-bottom: 4px solid #666;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  height: 667px;
}
.pay-content .content-main {
  flex: 1;
  text-align: center;
  padding-top: 80px;
  background: #fff;
}
.scan-tip {
  font-size: 16px;
  color: #666;
}
.content-main .price {
  color: #ff6600;
  font-size: 32px;
}
.pay-content .content-left {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e6e6e6;
  width: 198px;
  border-left: 1px solid #666;
  border-right: 1px solid #666;
}
.qr-code-wrapper {
  border: 1px solid #ccc;
  width: 213px;
  margin: 0 auto;
  position: relative;
  padding: 5px;
}
.qr-code-wrapper .qr-code-image {
  width: 100%;
  height: 100%;
}
.scan-tip-image {
  position: absolute;
  top: -100px;
  right: calc(-1 * (100% + 70px));
}
.qr-code-wrapper .row {
  padding: 10px 10px 5px 15px;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
}
.row .scan-icon {
  width: 46px;
  height: 46px;
}
.row .tip {
  margin-left: 10px;
}
.row .tip p {
  line-height: 23px;
  color: #222;
}
.scan-tip-bottom {
  margin-top: 10px;
  font-size: 16px;
  color: #999;
}
.content-left .button-guide {
  margin-top: 20px;
  width: 139px;
  height: 52px;
  cursor: pointer;
}
.content-left .design-image {
  width: 99px;
  height: 95px;
}
.page-pay-footer {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 40px;
}
.page-pay-footer .icp {
  color: #666;
  font-size: 16px;
}
.page-pay-footer .other-pay-type-image {
  margin-top: 20px;
}
</style>
