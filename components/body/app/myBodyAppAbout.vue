<template>
  <div class="my-body-app-about">
    <div class="banner"
         :style="{ backgroundImage: 'url(' + banner + ')' }">

    </div>
    <div class="info">
      公司简介
    </div>
    <div class="english-info">
      <div class="left-english-info"></div>
      <div class="content-english-info">Company Profile</div>
      <div class="right-english-info"></div>
    </div>
    <div class="content-english-info-detail">
      <p>福建学工坊信息科技有限公司，专注于互联网+教育领域业务，通过与世界500强IT企业美国Oracle软件公司的合作，将Oracle公司厂商的技术产品、认证体系经公司团队研究、设计后溶于实战课程体系中，面向有志于从事互联网技术的在校大学生、社会人员等开展线上“实战软件开发技术+知名厂商认证”教育。目前在线课程涵盖了主流的开发语言Java以及数据库My SQL、Oracle等方向。</p>

      <p>公司拥有专业的技术教学团队，他们不仅仅具有丰富的软件开发项目实战经验，也常年参与福建省部分高校的授课、指导大学生项目实训，参与大学信息化软件开发以及参与高校教学能力比赛等活动。</p>

    </div>
    <div class="advance-images">
      <div class="advance-images-left"
           :style="{ backgroundImage: 'url(' + bg1 + ')' }">
      </div>
      <div class="advance-images-right">
        <div class="top-advance-images-right"
             :style="{ backgroundImage: 'url(' + bg2 + ')' }">
        </div>
        <div class="bottom-advance-images-right"
             :style="{ backgroundImage: 'url(' + bg3 + ')' }">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      banner: require("@/assets/img/app/about/about-banner.jpg"),
      bg1: require("@/assets/img/about/oracle-01.png"),
      bg2: require("@/assets/img/about/oracle-02.png"),
      bg3: require("@/assets/img/about/oracle-03.png")
    };
  }
}
</script>


<style scoped lang="scss">
.my-body-app-about {
  .banner {
    height: 4.666667rem;
    background-size: cover;
  }
  .info {
    margin-top: 0.48rem;
    font-size: 0.48rem;
    text-align: center;
    color: #f00;
    font-weight: bold;
  }
  .english-info {
    font-size: 0.266667rem;
    margin-top: 0.32rem;
    margin-bottom: 0.586667rem;
    text-align: center;
    color: #9f9f9f;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: center;
    align-items: center;
  }
  .content-english-info {
    margin: 0 0.133333rem;
  }
  .english-info > .left-english-info,
  .english-info > .right-english-info {
    border: 1px solid red;
    width: 0.533333rem;
  }
  .content-english-info-detail {
    padding: 0 0.32rem;
    color: #333;
    font-size: 0.373333rem;
    margin-bottom: 0.32rem;
  }
  .content-english-info-detail > p {
    text-indent: 2em;
  }
  .advance-images {
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    height: 6.2rem;
    padding: 0 0.133333rem;
  }
  .advance-images-left {
    // background-image: url(/_nuxt/assets/img/about/oracle-01.png);
    text-align: center;
    margin-left: 6px;
    background-size: cover;
    width: 40%;
  }
  .advance-images-right {
    width: 53%;
    height: 5rem;
    margin-left: 0.32rem;
  }
  .top-advance-images-right {
    width: 100%;
    background-size: cover;
    height: 3rem;
    margin-bottom: 0.133333rem;
  }
  .bottom-advance-images-right {
    width: 100%;
    background-size: cover;
    height: 3rem;
  }
}
</style>
