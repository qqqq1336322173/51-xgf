<template>
  <div class="my-app-dy-info">
    <my-header />
    <my-body-app-dy-info />
  </div>
</template>

<script>
import MyHeader from "@/components/header/app/appDyInfo"
import MyBodyAppDyInfo from '@/components/body/app/myBodyAppDyInfo'
export default {
  layout: 'appBlank',
  components: {
    MyHeader,
    MyBodyAppDyInfo
  }
}
</script>

<style  lang="scss" scoped>
.my-app-dy-info {
  div {
  }
}
</style>
