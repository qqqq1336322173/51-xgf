<template>
  <div class="nav-child ">
    <div class="page-popup mint-popup mint-popup-1  ">
      <div class="toggle toggle--active">
        <ul class="toggle-menu">
          <li>
            <mt-button @click="goto(1)">首页</mt-button>
            <!-- <nuxt-link to="/test?index">首页</nuxt-link> -->
          </li>
          <li>
            <mt-button @click="goto(2)">java</mt-button>
            <!-- <nuxt-link to="/test?java">java</nuxt-link> -->
          </li>
          <li>
            <mt-button @click="goto(3)">oracle</mt-button>
            <!-- <nuxt-link to="/test?oracle">oracle</nuxt-link> -->
          </li>
          <li>
            <mt-button @click="goto(4)">mysql</mt-button>
            <!-- <nuxt-link to="/test?mysql">mysql</nuxt-link> -->
          </li>
          <li>
            <nuxt-link to="/appDyInfo">动态信息</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/appAbout">关于我们</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["popupVisible"],
  data() {
    return {
      lastIndex: 0
    };
  },
  created() {
    this.$store.state.nav.flag = false;
  },
  methods: {
    goto(type) {
      this.$store.state.nav.flag = false;
      let footer = document.querySelectorAll("footer .mint-tab-item");
      // console.log(footer);
      // console.log("这里");
      let lastIndex = this.$store.state.indexChild.lastIndex;
      console.log(this.$store.state.indexChild.lastIndex);
      switch (type) {
        case 1:
          this.$store.state.tabbar.active_id = "index";
          footer[lastIndex].classList.remove("is-selected");
          footer[0].classList.add("is-selected");
          this.$store.state.indexChild.lastIndex = 0;
          break;
        case 2:
          this.$store.state.tabbar.active_id = "java";
          footer[lastIndex].classList.remove("is-selected");
          footer[1].classList.add("is-selected");
          this.$store.state.indexChild.lastIndex = 1;
          break;
        case 3:
          this.$store.state.tabbar.active_id = "oracle";
          footer[lastIndex].classList.remove("is-selected");
          footer[2].classList.add("is-selected");
          this.$store.state.indexChild.lastIndex = 2;
          break;
        case 4:
          this.$store.state.tabbar.active_id = "mysql";
          footer[lastIndex].classList.remove("is-selected");
          footer[3].classList.add("is-selected");
          this.$store.state.indexChild.lastIndex = 3;
          break;
        default:
          // this.$store.state.indexChild.lastIndex = 0;
          // this.lastIndex = 0;
          break;
      }
      this.lastIndex = Number(type) - 1;
      // console.log(this.lastIndex);
      // this.lastIndex = lastIndex;
    }
  }
};
</script>

<style lang="scss">
.nav-child {
  .toggle {
    width: 70%;
    left: 15%;
    padding: 10px;
  }
  // .toggle-menu li {
  //   width: 40%;
  // }
  .toggle-menu li {
    width: 100%;
    display: block;
    margin: 10px auto;
  }
  .toggle-menu li a {
    text-decoration: none;
    color: #fff;
    display: block;
    text-align: center;
    font-size: 1.1em;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition: none;
    font-weight: 500;
    padding: 8px 0;
    font-family: "Josefin Sans", sans-serif;
  }
}
</style>
