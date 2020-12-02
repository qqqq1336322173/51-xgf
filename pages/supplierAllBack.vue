<template>
  <h1>{{msg}}</h1>
</template>


<script>
export default {
  middleware: 'appAuthenticated',
  layout: 'appBlank',
  data () {
    return {
      msg: "登录成功"
    }
  },

}
</script>


<style>
</style>
