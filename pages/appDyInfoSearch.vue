<template>
  <div class="my-app-dy-info">
    <my-header-search />
    <my-body-app-dy-info-search />
  </div>
</template>

<script>
import MyHeaderSearch from "@/components/header/app/appDyInfoSearch"
import MyBodyAppDyInfoSearch from '@/components/body/app/myBodyAppDyInfoSearch'
export default {
  layout: 'appBlank',
  components: {
    MyHeaderSearch,
    MyBodyAppDyInfoSearch
  }
}
</script>

<style  lang="scss" scoped>
.my-app-dy-info {
  div {
  }
}
</style>
