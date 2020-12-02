<template>
  <h1>{{msg}}</h1>
</template>


<script>
export default {
  middleware: 'appAuthenticated2',
  layout: 'appBlank',
  data () {
    return {
      msg: "注销成功"
    }
  },

}
</script>


<style>
</style>
