<template>
  <div class="my-search">
    <el-input v-model.trim="input"></el-input><span>搜索</span>
  </div>
</template>


<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>
<style>
.my-search {
  line-height: 40px;
}
.el-input {
  width: 180px;
}
.el-input > input {
  height: 26px;
}
.my-search > span {
  margin-left: 10px;
  color: #fff;
}
</style>
