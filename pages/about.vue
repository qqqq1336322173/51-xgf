<template>
  <div class="my-about">
    <floating-window></floating-window>
    <div class="about-head-info-img"
         :style="{ backgroundImage: 'url(' + bg + ')' }"></div>
    <div class="my-about-content">
      <div class="container content">
        <div>
          <el-row>
            <el-col :span="24">
              <p class="title"
                 style="color:#f00;font-size:36px;">公司简介</p>
            </el-col>
          </el-row>
          <el-row class="el-form-item">
            <el-col :span="24">
              <div class="title my-about-content-line"
                   style="color:#959595;font-size:18px;">
                <div class="left-line"></div>
                <div style="margin:0 10px;">Company Profile</div>
                <div class="right-line"></div>
              </div>
            </el-col>
          </el-row>
          <el-row class="my-about-content-course">
            <el-col :span="24">
              <p class="content-info">
                福建学工坊信息科技有限公司，专注于互联网+教育领域业务，通过与世界500强IT企业美国Oracle软件公司的合作，将Oracle公司厂商的技术产品、认证体系经公司团队研究、设计后溶于实战课程体系中，面向有志于从事互联网技术的在校大学生、社会人员等开展线上“实战软件开发技术+知名厂商认证”教育。目前在线课程涵盖了主流的开发语言Java以及数据库My SQL、Oracle等方向。
              </p>
            </el-col>
          </el-row>
          <el-row class="my-about-content-course">
            <el-col :span="24">
              <p class="content-info">
                公司拥有专业的技术教学团队，他们不仅仅具有丰富的软件开发项目实战经验，也常年参与福建省部分高校的授课、指导大学生项目实训，参与大学信息化软件开发以及参与高校教学能力比赛等活动。
              </p>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="container pics">
        <div>
          <el-row :gutter="10">
            <el-col style="width: 498px;
    height: 676px;"
                    :xs="10"
                    :sm="12"
                    :md="8"
                    :lg="6"
                    :xl="2">
              <div class="about-oracle-content-left"
                   :style="{ backgroundImage: 'url(' + bg1 + ')' }"></div>
            </el-col>
            <el-col style="width: 585px;
    height: 676px;
    margin-left: 19px;"
                    :xs="12"
                    :sm="12"
                    :md="16"
                    :lg="14"
                    :xl="22">
              <div class="about-oracle-content-right">
                <div class="about-oracle-content-right-up"
                     :style="{ backgroundImage: 'url(' + bg2 + ')' }"></div>
                <div class="about-oracle-content-right-down"
                     :style="{ backgroundImage: 'url(' + bg3 + ')' }"></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import floatingWindow from "@/components/floatingWindow";
export default {
  components: {
    floatingWindow
  },
  data () {
    return {
      bg: require("@/assets/img/about/about-banner.png"),
      bg1: require("@/assets/img/about/oracle-01.png"),
      bg2: require("@/assets/img/about/oracle-02.png"),
      bg3: require("@/assets/img/about/oracle-03.png")
    };
  }
};
</script>

<style scoped>
.container {
  width: 1200px !important;
  padding: 0;
}
.el-main {
  min-height: 500px;
  height: auto;
  border: 0px solid black;
  margin: 0px -7.5px;
  overflow: hidden;
}
.my-about-content {
  margin-top: 20px;
}
.my-about > .about-head-info-img {
  height: 400px;
  margin-right: -7.5px;
  background-size: cover;
  margin-left: -7.5px;
  border: 0px solid black;
}
.title.my-about-content-line {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  justify-content: center;
  align-items: center;
}
.title.my-about-content-line > .left-line,
.title.my-about-content-line > .right-line {
  border-top: 1px solid #f00;
  width: 40px;
}

.my-about-content-course {
  text-align: left;
}
.my-about-content-course p {
  text-indent: 2em;
}

.content-info {
  color: #333333;
  font-size: 16px;
}
.container.content {
  min-height: 0;
}
.container.pics {
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.container {
  text-align: center;
  justify-content: center;
  margin: auto;
}
.container.pics .el-col {
  padding: 0;
}
.about-oracle-content-left {
  width: 100%;
  height: 100%;
  /* width: 498px;
  height: 676px; */
  background-size: cover;
}
.about-oracle-content-right-up {
  width: 581px;
  height: 314px;
  background-size: cover;
  margin-bottom: 22px;
}
.about-oracle-content-right-down {
  /* width: 100%;
  height: 100%; */
  width: 581px;
  height: 340px;
  background-size: cover;
}
</style>
