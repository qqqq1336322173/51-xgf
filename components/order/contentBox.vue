<template>
  <div class="content">
    <div class="content-header">
      <h3 class="content-title">{{title}}</h3>
      <span class="tip">{{tip}}</span>
    </div>
    <div class="content-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'tip']
}
</script>

<style scoped>
.content {
  background: #fff;
  padding: 15px;
}
.content-header {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  padding: 10px 0;
  border-bottom: 1px solid #ebeef5;
  align-items: center;
}
.content-title {
  font-size: 22px;
  color: #222;
}
.content-header .tip {
  margin-left: 40px;
}
.tip {
  font-size: 18px;
  color: #999;
}
</style>
