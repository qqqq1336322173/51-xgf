<template>
  <div class="my-app-about-info">
    <my-header />
    <my-body-app-about />
  </div>
</template>

<script>
import MyHeader from "@/components/header/app/appAboutInfo"
import MyBodyAppAbout from '@/components/body/app/myBodyAppAbout'
export default {
  layout: 'appBlank',
  components: {
    MyHeader,
    MyBodyAppAbout
  }
}
</script>

<style  lang="scss" scoped>
.my-app-about-info {
  margin-bottom: 0.266667rem;
  div {
  }
}
</style>
