<template>
  <div class="my-app">
    <!-- <header>
      <my-header />
    </header> -->
    <div class="roll">
      <nuxt />
    </div>
    <footer>
      <my-footer />
    </footer>
  </div>
</template>
<script>

import MyFooter from "@/components/footer/appIndex";
export default {
  components: {
    // MyHeader,
    MyFooter
  },
  data () {
    return {

    }
  },
  mounted () {
    import("@/assets/js/iconAppIndexfont.js").then(icon => { })
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
.my-app {
  .roll {
    padding-bottom: 30px;
    overflow: scroll;
  }
}
</style>
