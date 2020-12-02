<template>
  <div class="m-geo">
    <span class="telephone-info">电话: 18805000100</span>
    <span class="qq-info">QQ:3397293402</span>
    <nuxt-link class="back-index"
               to="/"
               style="color: #fff;">返回首页</nuxt-link>
  </div>
</template>

<script>
export default {
  // mounted () {
  //   import("@/assets/js/iconfont.js").then(icon => { })
  // }
};
</script>

<style>
.m-geo {
  color: #fff;
  text-align: center;
  line-height: 60px;
  height: 60px;
}
.back-index {
  color: #fff;
  margin-left: 1rem;
}
</style>
