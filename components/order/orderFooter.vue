<template>
  <div class="order-footer">
    <p class="pay-amount">
      <span>实付：</span>
      <span class="price">￥{{productInfo.price | price}}</span>
    </p>
    <div class="row">
      <el-checkbox v-model.trim="agree" />
      <p class="read-agreement">
        <span>提交订单则表示您同意——</span>
        <a class="agreement"
           @click="showAgreement = true">
          《51学工坊服务（培训）协议》
        </a>
      </p>
      <el-popover placement="top"
                  title="提示"
                  width="250"
                  trigger="manual"
                  content="请阅读并同意《51学工坊服务（培训）协议》后支付"
                  v-model.trim="showTip">
        <div class="button"
             slot="reference"
             @click="handlePay">
          <img src="~assets/img/order/pay-button@2x.png"
               alt="立即支付">
        </div>
      </el-popover>
    </div>
    <!-- 协议 -->
    <el-dialog title="提示"
               width="980px"
               :show-close="false"
               :visible.sync="showAgreement"
               @close="showAgreement = false">
      <h3 class="agreement-title"
          slot="title">51学工坊服务（培训）协议
        <img src="~assets/img/order/close@2x.png"
             alt="关闭"
             class="btn-close"
             @click="showAgreement = false">
      </h3>
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
      <div class="agreement-footer"
           slot="footer">
        <div @click="showAgreement = false"
             class="agreement-button">
          <img src="~assets/img/order/agreement-button@2x.png"
               alt="我知道了">
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import httpServer from "@/assets/js/httpServer";

export default {
  props: {
    productInfo: { // 购买的产品信息
      type: Object,
      default: null
    }
  },
  data () {
    return {
      showTip: false, // 未同意协议之前，控制不能支付的提示
      agree: false, // 是否同意协议
      showAgreement: false // 是否显示协议的模态框
    };
  },
  filters: {
    price (value) { // 价格保留两位小数
      return (value && value.toFixed(2)) || 0.00
    }
  },
  methods: {
    // 支付事件
    handlePay () {
      if (!this.agree) {
        // 1.如果没有同意协议
        this.showTip = true;
        setTimeout(() => {
          this.showTip = false;
        }, 2000);
        return false;
      } else {
        // 2.同意协议，支付逻辑 do something
        this.confirmPay()
      }
    },
    // 调用接口，获取订单id等信息
    confirmPay () {
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
          // 3.支付成功跳转成功页面
          this.$router.replace({
            path: '/pay',
            query: {
              order: r.data.order
            }
          })
        } else {
          this.handlePayFail(r)
        }
      }).catch(err => {
        this.handlePayFail(err)
      })
    },
    // 处理支付失败
    handlePayFail (err) {
      this.$message.error('系统错误，发起支付失败')
      console.log(err)
    }
  },
};
</script>

<style scoped>
.order-footer {
  height: 180px;
  background: rgb(254, 252, 234);
  margin-top: 20px;
  text-align: right;
  padding-top: 35px;
  padding-right: 40px;
}
.pay-amount .price {
  color: #f60701;
  font-size: 30px;
  margin-left: -15px;
}
.row {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  align-items: center;
  justify-content: flex-end;
}
.read-agreement {
  color: #8f8f8c;
  padding-left: 10px;
  user-select: none;
}
.agreement {
  color: #a5c399;
  cursor: pointer;
}
.button {
  width: 210px;
  height: 52px;
  margin-left: 20px;
  user-select: none;
  cursor: pointer;
}
.button img {
  user-drag: none;
  -webkit-user-drag: none;
}
.agreement-title,
.agreement-content {
  font-family: "AdobeHeitStd-Regular";
}
.agreement-title {
  text-align: center;
  font-size: 24px;
  color: #222;
  padding-top: 20px;
}
.agreement-content {
  color: #666;
  text-align: left;
  font-size: 18px;
  padding: 0 20px;
}
.agreement-button {
  cursor: pointer;
  margin-top: -25px;
}
.button:active {
  transform: scale(0.95);
}
.btn-close {
  position: absolute;
  right: 30px;
  top: 20px;
  cursor: pointer;
}
/*重载element-ui的CheckBox的样式*/
.order-footer .row /deep/ .el-checkbox__inner {
  width: 18px;
  height: 18px;
  vertical-align: unset;
}
</style>
