<template>
  <div class="pay-choose">
    <el-collapse v-model.trim="currentActivPanel">
      <el-collapse-item name="1">
        <div class="current-pay-type"
             slot="title">
          <img :src="currentPayType.icon"
               alt="支付方式"
               class="pay-icon">
          <span class="label">{{currentPayType.name}}</span>
          <span class="panel-status">{{currentActivPanel.length ? '收起': '展开'}}</span>
        </div>

        <div class="choose-item-wrapper"
             v-for="item in payTypes"
             :key="item.value">
          <el-radio v-model.trim="currentPayTypeValue"
                    :label="item.value"
                    @change="handlePayTypeChange">
            <div class="choose-item">
              <img :src="item.icon"
                   :alt="item.name"
                   class="pay-icon">
              <span class="label">{{item.name}}</span>
            </div>
          </el-radio>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
const payTypes = [
  {
    name: '支付宝',
    value: 1, // 实际的常量需要和后端约定
    icon: require('assets/img/order/alipay@2x.png'),
  },
  {
    name: '微信支付',
    value: 2, // 实际的常量需要和后端约定
    icon: require('assets/img/order/wxpay@2x.png'),
  },
];
export default {
  data () {
    return {
      payTypes,
      currentActivPanel: [], // 用于判断面板是否展开
      currentPayTypeValue: payTypes[0].value,
      currentPayType: payTypes[0], // 当前选择的支付方式
    };
  },
  methods: {
    /**
     * @description 支付方式变化后的回调
     * @param value 选择后的支付方式的值
     */
    handlePayTypeChange (value) {
      console.log('on vaue change', value);
      this.currentPayType = payTypes.find((t) => t.value === value);
      // 处理选择支付方式之后的逻辑
    },
  },
};
</script>

<style scoped>
.current-pay-type {
  padding: 20px 0;
}
.pay-choose {
  background: #f5f6f8;
  margin-top: 72px;
}
.current-pay-type,
.choose-item {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  align-items: center;
}
.current-pay-type .pay-icon {
  width: 40px;
  height: 40px;
}
.current-pay-type .label {
  font-size: 18px;
  color: #222;
  margin-left: 18px;
}
.choose-item-wrapper {
  margin-top: 16px;
}
.choose-item .pay-icon {
  width: 26px;
  height: 26px;
}
.choose-item .label {
  color: #222;
  padding-left: 13px;
}
.panel-status {
  position: absolute;
  right: 25px;
  font-size: 18px;
  color: #222;
}
/* 重载element-ui的组件样式 */
/* 单选 */
.choose-item-wrapper /deep/ .el-radio {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  align-items: center;
}
/* 单选按钮大小 */
.choose-item-wrapper /deep/ .el-radio__inner {
  width: 18px;
  height: 18px;
}
/* 伸缩框 */
.pay-choose /deep/ .el-collapse-item__header {
  font-weight: normal;
  align-items: center;
  height: auto;
  position: relative;
}
.pay-choose /deep/ .el-collapse {
  border-top: none;
  border-bottom: none;
}
.pay-choose /deep/ .el-collapse-item__header {
  border-bottom: none;
  background: #f5f6f8;
  margin: 0 14px;
}
.pay-choose /deep/ .el-collapse-item__wrap {
  border-bottom: none;
  background: #f5f6f8;
  border-top: 1px solid #d0d0d0;
  margin: 0 14px;
}
</style>
