<template>
  <div class="page-order-wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
      <!-- FIXME 这里需要根据实际业务进行调整 -->
      <el-breadcrumb-item>Oracle</el-breadcrumb-item>
    </el-breadcrumb>
    <nuxt-child />
  </div>
</template>

<script>

export default {
  // asyncData({ redirect }) {
  //   // 重定向到pay页面
  //   redirect('/order/pay')
  // }
};
</script>

<style scoped>
.page-order-wrapper {
  font-family: 'MicrosoftYaHei';
  /* 为保证页面是根据浏览器窗口自行调整的，这里使用百分比 */
  padding: 0 24%;
  background: #eff0f1;
  height: 100%;
  font-size: 18px;
  color: #222;
}
@media all and (max-width: 1398px) {
  .page-order-wrapper {
    padding: 0 18%;
  }
}
@media all and (max-width: 1000px) {
  .page-order-wrapper {
    padding: 0 17%;
  }
}
.breadcrumb {
  padding: 20px 0;
}
/* 根据设计图重载elemetui的默认样式 */
.breadcrumb /deep/ .el-breadcrumb__inner,
.el-breadcrumb__inner a {
  color: #666;
  font-weight: normal;
  font-size: 18px;
}
</style>
