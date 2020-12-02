<template>
  <div>
    <h2 v-if="error.statusCode == 404">404 - 页面不存在</h2>
    <h2 v-else>500 - 服务器错误</h2>
    <ul>
      <li>
        <nuxt-link to="/"
                   style="color:green">HOME</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: "empty",
  props: ['error'],
  data () {
    return {
      crEventSceneNew: {}
    }
  },
  watch: {
    //拿不到错误页面的值
    error: {
      handler (newValue, oldValue) {
        if (newValue.length > 0) {
          this.crEventSceneNew = newValue
          console.log(this.crEventSceneNew)
        }
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>

