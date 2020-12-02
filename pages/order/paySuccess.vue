<template>
  <div class="pay-success">
    <content-box title="订单信息">
      <div class="success-box">
        <img src="~assets/img/order/pay-success@2x.png" alt="支付成功">
        <!-- 支付成功按钮 -->
        <div
          class="button"
          @click="handlePaySuccess">
          <img src="~assets/img/order/pay-success-button@2x.png" alt="支付成功">
        </div>
      </div>
    </content-box>
  </div>
</template>

<script>
import contentBox from '@/components/order/contentBox.vue';

export default {
  components: {
    contentBox
  },
  methods: {
    handlePaySuccess() {
      // 支付成功 do something
    }
  }
}
</script>

<style scoped>
.pay-success {
  padding-bottom: 50px;
}
.success-box {
  text-align: center;
  padding-top: 60px;
}
.button {
  width: 212px;
  height: 54px;
  margin: 40px auto;
  cursor: pointer;
  -webkit-user-drag: none;
}
.button:active {
  transform: scale(0.95);
}
</style>
