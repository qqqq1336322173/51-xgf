<template>
  <div class="order-pay">
    <content-box title="确认订单信息"
                 tip="请在2小时内完成支付，否则订单会被自动取消">
      <div class="content-body">
        <div class="buy-user-info">
          <!-- please FIXME -->
          <!-- 如果有真实的头像显示真实的头像，如果没有，显示系统默认头像 -->
          <img v-if="false"
               src=""
               alt="用户头像"
               class="user-avatar" />
          <img v-else
               src="~assets/img/order/user-avatar-default@2x.png"
               class="user-avatar"
               alt="用户头像" />
          <div class="info-box">
            <p class="user-account">购买账号：weixinAbc</p>
            <p class="tip">注意：购买后不支持退款、转让，请确认后提交订单</p>
          </div>
        </div>
        <!--支付选择组件-->
        <pay-choose />
        <!--为防止接口错误，导致的bug这里判断一下productInfo的存在-->
        <div class="buy-info-box"
             v-if="productInfo">
          <p class="buy-info-box-title">购买信息</p>
          <div class="buy-info-body">
            <div class="left">
              <!--<div class="goods-image-wrapper">-->
              <!-- 未来购买项目的图片放这儿 -->
              <!-- <img src="" alt=""> -->
              <!-- </div>-->
              <!--购买的内容-->
              <div class="buy-item-content">{{productInfo.productname}}</div>
            </div>
            <div class="right">
              <span class="price">￥{{productInfo.price | price}}</span>
            </div>
          </div>
        </div>
      </div>
    </content-box>
    <!--底部支付模块-->
    <order-footer :productInfo="productInfo" />
  </div>
</template>

<script>
import contentBox from '@/components/order/contentBox.vue';
import payChoose from '@/components/order/payChoose.vue';
import orderFooter from '@/components/order/orderFooter.vue';
import httpServer from "@/assets/js/httpServer";

export default {
  data () {
    return {
      productInfo: null // 购买商品信息
    }
  },
  filters: {
    price (value) { // 价格保留两位小数
      return (value && value.toFixed(2)) || 0.00
    }
  },
  async asyncData (ctx) {
    // 通过路由参数获取 productid
    const { productid } = ctx.query
    // 获取购买商品信息
    const productInfo = await httpServer({
      url: 'http://81.69.237.90:81/eduonline/user/findProduct.action',
      method: 'post'
    }, {
      productid
    })
    // 这里返回的内容是赋给data了，参考nuxt官网
    // https://zh.nuxtjs.org/api/ asyncData 方法
    return {
      productInfo: productInfo.data
    }
  },
  components: {
    payChoose,
    orderFooter,
    contentBox
  }
};
</script>

<style scoped>
.buy-user-info {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  margin-top: 29px;
  align-items: center;
}
.user-avatar {
  width: 84px;
  height: 84px;
  border-radius: 50%;
}
.buy-user-info .info-box {
  margin-left: 20px;
}
.user-account {
  color: #222;
  font-size: 22px;
}
.info-box .tip {
  font-size: 20px;
}
.tip {
  font-size: 18px;
  color: #999;
}
.buy-info-box {
  margin-top: 32px;
}
.buy-user-info .buy-info-box-title {
  font-size: 18px;
  color: #222;
}
.buy-info-body {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  padding-top: 20px;
  justify-content: space-between;
  padding-right: 40px;
}
.buy-info-body .left {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
}
.buy-info-body .goods-image-wrapper {
  width: 153px;
  height: 87px;
  background: #f8f8f8;
}
/*.buy-info-body .buy-item-content {*/
/*  padding-left: 20px;*/
/*}*/
</style>
