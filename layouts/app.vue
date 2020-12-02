<template>
  <div class="my-app">
    <header>
      <my-header />
    </header>
    <div class="roll">
      <nuxt />
    </div>
    <footer>
      <my-footer />
    </footer>
  </div>
</template>
<script>
import MyHeader from "@/components/header/appDyInfo.vue";
import MyFooter from "@/components/footer/appIndex";

export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>
<style lang="scss" scoped>
.my-app {
  @import "~assets/css/app.css";
}
</style>
