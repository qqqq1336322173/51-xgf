<template>
  <div class="home">
    <floatingWindow></floatingWindow>
    <!-- 轮播图 -->
    <div class="banner-block">
      <el-carousel :interval="5000"
                   class="banner-sty"
                   arrow="always"
                   height="400px"
                   ref="carousel"
                   @click.native="targeturlTo">
        <el-carousel-item v-for="item in banners"
                          :key="item.id">
          <img class="banner-img"
               :src="item.bannerurl"
               alt="主页面轮播"
               :targeturl="item.targeturl || ''"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 简介 -->
    <div class="block">
      <div class="oracleAndMessage m-content">
        <div class="oracle">
          <div class="title">
            <p>oracle简介</p>
          </div>
          <div class="content">
            <img src="~assets/img/home/oraclegs.png"
                 alt/>
            <p>{{ oracleCon }}</p>
          </div>
          <div class="button">
            <button class="btn">立即认证</button>
          </div>
        </div>
        <div class="slice"></div>
        <div class="message">
          <div class="title">
            <p>动态信息</p>
          </div>
          <div class="content">
            <ul class="con-ul">
              <li @click="goNewsDetail(item.newsid)"
                  v-for="item in messages"
                  :key="item.newsid">
                <div class="li-title">
                  <div class="circle"></div>
                  <p class="title-content">{{ item.title }}</p>
                </div>
                <div class="li-content"
                     v-html="unescape(item.content)"></div>
              </li>
            </ul>
          </div>
          <div class="button">
            <button class="btn"
                    @click="goDyInfo">查看更多
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 视屏 -->
    <div class="block">
      <video src="~assets/video/Oraclevideo.mp4"
             class="video"
             muted
             controls="controls"
             autoplay="autoplay"></video>
    </div>
    <!-- oracle旗下产品和体系 -->
    <div class="block bgc-f5f7fa">
      <div class="oracle-product-system m-content">
        <div class="oracle-product">
          <div class="title">
            <div class="icon"></div>
            <p>Oracle旗下产品</p>
          </div>
          <div class="content">
            <div v-if="anitype01"
                 class="con-item animate__animated animate__backInUp">
              <img class="product-img"
                   src="~assets/img/home/oracle.png"
                   alt/>
              <p>Oracle数据库</p>
            </div>
            <div v-if="anitype01"
                 class="con-item animate__animated animate__backInUp">
              <img class="product-img"
                   src="~assets/img/home/java.png"
                   alt/>
              <p>java</p>
            </div>
            <div v-if="anitype01"
                 class="con-item animate__animated animate__backInUp">
              <img class="product-img"
                   src="~assets/img/home/mysql.png"
                   alt/>
              <p>mysql</p>
            </div>
          </div>
        </div>
        <div class="oracle-system">
          <div class="title">
            <div class="icon"></div>
            <p>Oracle认证体系</p>
          </div>
          <div class="content">
            <img src="~assets/img/home/system.png"
                 alt/>
            <div v-if="anitype01"
                 class="item1 animate__animated animate__backInUp">
              <p>Oracle Certified Master</p>
              <p>是面向专业技术人员的最高级别认证</p>
            </div>
            <div v-if="anitype01"
                 class="item2 animate__animated animate__backInUp">
              <p>Oracle Certified Professional</p>
              <p>是IT专业人员掌握高级专业知识的证明</p>
            </div>
            <div v-if="anitype01"
                 class="item3 animate__animated animate__backInUp">
              <p>Oracle Certified Associate</p>
              <p>Oracle 基础认证</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- oracle认证优势 -->
    <div class="block">
      <div class="oracle-authentication-advantages m-content">
        <div class="header">
          <p class="title-1">Oracle 认证项目优势</p>
          <div class="title-con">
            <div class="line"></div>
            <span class="title-2">Oracle Certification program Advantages</span>
            <div class="line"></div>
          </div>
          <button class="btn">立即认证</button>
        </div>
        <div class="content">
          <div v-if="anitype02"
               class="item animate__animated animate__backInUp">
            <p>
              <img class="p-img"
                   src="~assets/img/home/bg01.png"
                   alt/>
            </p>
            <p class="p-1">证书 + 工作技能</p>
            <p class="p-2">
              我们拥有Oracle官方培训授权合作,
              考证教学有保障;强大的专业师资团队进行技能培训，
              重点、难点各个击破，提升实用技能。
            </p>
          </div>
          <div v-if="anitype02"
               class="item animate__animated animate__backInUp">
            <p>
              <img class="p-img"
                   src="~assets/img/home/bg02.png"
                   alt/>
            </p>
            <p class="p-1">产业前景好</p>
            <p class="p-2">
              习近平总书记在党的十九大报告中指出，
              我国经济“正处在转变发展方式、优化经济结构、转换增长动力的攻关期”，
              要坚定建设网络强国、数字中国、智慧社会，推动互联网、大数据、人工智能与实体经济深度融合，
              发展数字经济、共享经济。
            </p>
          </div>
          <div v-if="anitype02"
               class="item animate__animated animate__backInUp">
            <p>
              <img class="p-img"
                   src="~assets/img/home/bg03.png"
                   alt/>
            </p>
            <p class="p-1">认证含金量高</p>
            <p class="p-2">
              Oracle认证资质是在全球范围内 广泛被雇主认可的品牌，只有在Oracle
              WDP 参加学习后方可参加认证。
            </p>
          </div>
          <div v-if="anitype02"
               class="item animate__animated animate__backInUp">
            <p>
              <img class="p-img"
                   src="~assets/img/home/bg04.png"
                   alt/>
            </p>
            <p class="p-1">脱颖而出 高薪机遇</p>
            <p class="p-2">
              招聘经理高度重视IT认证，获得Oracle 认证能在众多简历中
              脱颖而出。增强个人市场竞争力，提高收入能力，薪资涨幅可观。
            </p>
          </div>
          <div v-if="anitype02"
               class="item animate__animated animate__backInUp">
            <p>
              <img class="p-img"
                   src="~assets/img/home/bg05.png"
                   alt/>
            </p>
            <p class="p-1">展示技能</p>
            <p class="p-2">
              90%的专业人士认为。
              拥有Oracle认证能在寻找新工作时提高他们的可信度。
              68%的专业人士认为拥有认证提高了他们的市场竞争力。
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- IT行业前景 -->
    <div class="block bgc-f5f7fa">
      <div class="itProspect m-content">
        <div class="header">
          <p class="title-1">IT 行业前景</p>
          <div class="title-con">
            <div class="line"></div>
            <span class="title-2">IT Industry Background</span>
            <div class="line"></div>
          </div>
        </div>
        <div class="it-content"
             v-if="anitype03">
          <div class="it-item">
            <p class="it-item-p1 animate__animated animate__backInUp">
              <img src="~assets/img/home/it01.png"
                   alt/>
            </p>
            <p class="it-item-p2 animate__animated animate__backInUp">
              人才需求量大
            </p>
            <p class="it-item-p3 animate__animated animate__backInUp">
              2020年“新一-代信息技术产业“人才需求将达到1800万人次，人才缺口750万人次。2025年“新一代信息技术产业”人才需求将达到2000万人次，人才缺口950万人次。
            </p>
          </div>
          <div class="it-item">
            <p class="it-item-p1 animate__animated animate__backInUp">
              <img src="~assets/img/home/it02.png"
                   alt/>
            </p>
            <p class="it-item-p2 animate__animated animate__backInUp">
              职业寿命长
            </p>
            <p class="it-item-p3 animate__animated animate__backInUp">
              IT行业发展迅速,从业者能够随时随地的接触到最新的资讯，了解到最新的技术，不断的充实自己，突破自己，一步步的得到自我提升，随之，待遇、职位也会越来越好。
            </p>
          </div>
          <div class="it-item">
            <p class="it-item-p1 animate__animated animate__backInUp">
              <img src="~assets/img/home/it03.png"
                   alt/>
            </p>
            <p class="it-item-p2 animate__animated animate__backInUp">
              人才需求量大
            </p>
            <p class="it-item-p3 animate__animated animate__backInUp">
              未来IT企业人才需求分布数字艺术类41%、信息技术类38%、软件技术类8%、移动开发类6%、硬件开发类5%、软件测试类2%。
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- oracle认证常见问题 -->
    <div class="block" style=" padding-top: -200px;">
      <div class="trouble-shooting m-content">
        <div class="header">
          <p class="title-1">Oracle认证常见问题解答</p>
          <div class="title-con">
            <div class="line"></div>
            <span class="title-2">Trouble Shooting</span>
            <div class="line"></div>
          </div>
        </div>
        <div class="tro-content"
             v-if="anitype04">
          <div class="tro-item animate__animated animate__backInUp">
            <img src="~assets/img/home/tro01.png"
                 alt/>
            <p>Oracle证书好考吗?学费多少钱?</p>
          </div>
          <div class="tro-item animate__animated animate__backInUp">
            <img src="~assets/img/home/tro02.png"
                 alt/>
            <p>报考条件有哪些?需要学多久?</p>
          </div>
          <div class="tro-item animate__animated animate__backInUp">
            <img src="~assets/img/home/tro03.png"
                 alt/>
            <p>Oracle证书的含金量怎么样?</p>
          </div>
          <div class="tro-item animate__animated animate__backInUp">
            <img src="~assets/img/home/tro04.png"
                 alt/>
            <p>我可以申请免费试听课程吗?</p>
          </div>
          <div class="tro-item animate__animated animate__backInUp">
            <img src="~assets/img/home/tro05.png"
                 alt/>
            <p>考取证书后可以去哪些企业就职?</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司资质 -->
    <div class="block bgc-f5f7fa">
      <div class="qualification m-content">
        <div class="header">
          <p class="title-1">公司资质</p>
          <div class="title-con">
            <div class="line"></div>
            <span class="title-2">Company Qualification</span>
            <div class="line"></div>
          </div>
        </div>
        <div class="qualification-container">
          <p>
            51学工坊是福州安博榕信息科技有限公司的全资子公司。安博科技公司专注“互联网+教育”领域，致力于以互联网的思想、互联网的技术提升教育的效率与质量。通过研发具有自主知识产权的智慧教育系列产品，并引进优质资源，面向企业、教育机构、大中专院校等开展软件开发与服务外包、教育信息化产品研发、产教融合校企合作技术服务等业务。公司是世界500强企业美国ORACLE软件公司合作伙伴，联想集团数据智能业务集团合作伙伴，京东集团京东电商校企合作福建服务机构，福建省发改委、省教育厅等认定的产教融合型企业培育单位，福建电子商务协会理事单位，福建省众创空间协会理事单位，福建省经济与信息化局首批通过的福建省软件人才重点培训基地，福建省众创空间协会扶持两岸大学生青年创业孵化基地，福建多所高校大学生创新创业实践基地，国家高新技术企业，福建省高新技术企业。
          </p>
          <div class="qualification-container-imgs" id="qualification-container-imgs">
           <ul >
             <li> <img class="qcimg"
                       src="~assets/img/index/cq01.jpg"
                       alt/></li>
             <li><img class="qcimg"
                      src="~assets/img/index/cq02.jpg"
                      alt/></li>
             <li><img class="qcimg"
                      src="~assets/img/index/cq03.jpg"
                      alt/></li>
             <li><img class="qcimg"
                       src="~assets/img/index/cq04.jpg"
                       alt/></li>
             <li><img class="qcimg"
                      src="~assets/img/index/cq05.jpg"
                      alt/></li>
             <li><img class="qcimg"
                      src="~assets/img/index/cq06.jpg"
                      alt/></li>
             <li><img class="qcimg"
                      src="~assets/img/index/cq07.jpg"
                      alt/></li>
             <li><img class="qcimg"
                      src="~assets/img/index/cq08.jpg"
                      alt/></li>
             <li><img class="qcimg"
                      src="~assets/img/index/cq09.jpg"
                      alt/></li>
           </ul>
          </div>

        </div>
      </div>
    </div>
    <div class="block bgc-232936">
      <div class="certificate m-content">
        <div class="header">
          <p class="title-1 color-fff">行业认可度高的认证证书</p>
        </div>
        <div class="content">
          <div class="left">
            <img src="~assets/img/home/zs01.png"
                 alt/>
          </div>
          <div class="right">
            <img src="~assets/img/home/qtou.png"
                 alt/>
            <p>Oracle认证考试学习之路为你助力职场前行!</p>
            <button class="btn">开始学习</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import floatingWindow from "@/components/floatingWindow";
  import httpServer from "@/assets/js/httpServer";

  export default {
    components: {floatingWindow},
    name: "Home",
    data: function () {
      return {
        banners: [
          {
            id: 1,
            url: require("@/assets/img/home/banner01.jpg"),
          },
          {
            id: 2,
            url: require("@/assets/img/home/banner02.jpg"),
            targeturl: "https://ke.qq.com/course/3102964?tuin=93c627d7"
          },
        ],
        oracleCon:
          "Oracle(甲骨文公司)，全称甲骨文股份有限公司，世界500强，全球第一大的企业管理软件公司。目前全球500强企业中有98%在使用Oracle技术，全球前十大银行、前二十位的顶级通讯公司均在采用Oracle应用系统，中国所有电信运营商（如中国移动、中国电信、中国联通等）、中国的电力、金融、保险、证券、政府及大多数的制造业Oracle技术都处于绝对优势地位。",
        messages: [],
        anitype01: false,
        anitype02: false,
        anitype03: false,
        anitype04: false,
        myInterval: null, //资质轮播图定时器名称
      };
    },

    mounted() {
      window.addEventListener("scroll", this.handleScroll);
      this.out();
    },
    created() {
      //判断是否是手机端
      if (this.isMobile) {
        this.$router.push("/test");
      } else {
        this.$router.push("/");
        this.init();
      }
    },
    methods: {
      init() {
        // 获取首页动态数据（轮播图和新闻）
        httpServer(
          {
            url: "http://81.69.237.90:81/eduonline/index/indexData.action",
            method: "post",
          },
          {
            page: 1,
            rows: 3,
          }
        )
          .then((res) => {
            console.log(res.data.bannerlist);
            this.banners = res.data.bannerlist;

            this.messages = res.data.newslist;
          })
          .catch((err) => err);
      },
      handleScroll() {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        if (1100 < scrollTop && scrollTop < 1250) {
          this.anitype01 = true;
        } else if (1800 < scrollTop && scrollTop < 2000) {
          this.anitype02 = true;
        } else if (2300 < scrollTop && scrollTop < 2500) {
          this.anitype03 = true;
        } else if (2800 < scrollTop && scrollTop < 3000) {
          this.anitype04 = true;
        } else {
          return;
        }
      },
      // 去新闻详情页面
      goNewsDetail(id) {
        this.$router.push({
          name: "newsDetail",
          query: {
            id,
          },
        });
      },
      // 去新闻列表页面
      goDyInfo() {
        this.$router.push({
          name: "dyInfo",
        });
      },
      targeturlTo() {
        let activeIndex = this.$refs.carousel.activeIndex
        // this.banners[activeIndex].targeturl = "https://ke.qq.com/course/3102964?tuin=93c627d7"
        if (this.banners[activeIndex].targeturl) {
          location.href = this.banners[activeIndex].targeturl
        }
      },
      out(){
        var oDiv = document.getElementById('qualification-container-imgs');
        var oUl = oDiv.getElementsByTagName('ul')[0];
        var oLi = oDiv.getElementsByTagName('li');
        oUl.innerHTML = oUl.innerHTML +oUl.innerHTML ;
        oUl.style.width =oLi[0].offsetWidth*oLi.length+'px';
        this.myInterval = setInterval(function(){
          if (oUl.offsetLeft<-oUl.offsetWidth/2) {
            oUl.style.left = '0' ;
          }
          oUl.style.left = oUl.offsetLeft-1+ 'px';
        },30);
      }
    },
    beforeDestroy() {
      clearInterval(this.myInterval);
      this.myInterval = null;
    }
  };

</script>
<style lang="scss">
  .banner-sty {
    .el-carousel__arrow {
      font-size: 50px;
      width: 50px;
      height: 50px;
    }
  }
</style>
<style lang="scss" scoped>
  * {
    font-family: "Microsoft Yahei";
  }

  .banner-img {
    width: 100%;
    height: 100%;
  }

  .block {
    width: 100%;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: center;

  }

  .m-content {
    width: 1200px;
    min-width: 1200px;
  }

  .oracleAndMessage {
    margin-top: 50px;
    margin-bottom: 40px;
    border-radius: 14px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: space-between;
    overflow: hidden;
  }

  .oracle,
  .message {
    height: 100%;
    width: 50%;
    box-sizing: border-box;
    padding-top: 24px;

    .title {
      background-color: #ff2929;
      display: inline-block;

      p {
        display: inline-block;
        background-color: #ff2929;
        padding: 10px 15px;
        color: #fff;
        font-size: 20px;
        font-weight: blod;
      }
    }

    .button {
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: flex-end;
      padding-right: 20px;
      margin-bottom: 27px;

      .btn {
        padding: 12px 27px;
        font-size: 20px;
        font-weight: 500;
        background-color: #ff2929;
        border: none;
        border-radius: 10px;
        color: #fff;
        overflow: hidden;
        outline: none;
      }

      .btn:active {
        background-color: #f37d7d;
      }
    }
  }

  .oracle {
    .title {
      p {
        margin-left: 10px;
        border-left: 10px solid #fff;
      }
    }

    .content {
      width: 100%;
      height: 310px;
      padding-top: 32px;
      padding-left: 27px;
      padding-right: 20px;
      box-sizing: border-box;
      font-size: 16px;
      color: #333333;
      line-height: 2;

      img {
        width: 270px;
        height: 195px;
        margin-right: 15px;
        // margin-bottom: 15px;
        float: left;
        margin-top: 10px;
      }
    }
  }

  .slice {
    height: 100%;
    width: 2px;
    background: url(~assets/img/home/line.png) no-repeat;
    background-position: center center;
  }

  .message {
    .title {
      float: right;

      p {
        margin-right: 10px;
        border-right: 10px solid #fff;
      }
    }

    .content {
      width: 100%;
      height: 310px;
      padding-top: 30px;
      padding-right: 27px;
      padding-left: 20px;
      margin-top: 48px;
      box-sizing: border-box;
      font-size: 16px;
      color: #333333;
      box-sizing: border-box;

      .con-ul {
        list-style: none;

        .li-title {
          font-size: 16px;
          font-weight: bold;
          color: #000;
          display: -webkit-flex;
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          justify-content: flex-start;
          align-items: center;

          .title-content {
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 2;
            cursor: pointer;
          }

          .title-content:hover {
            color: red;
          }

          .circle {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            overflow: hidden;
            background-color: #ff2929;
            margin-right: 10px;
          }
        }

        .li-content {
          line-height: 1.8;
          text-indent: 25px;
          font-size: 16px;
          color: #333333;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    .button {
      .btn {
        background-color: #b2b2b2 !important;
      }

      .btn:active {
        background-color: #686464 !important;
      }
    }
  }

  .video {
    width: 800px;
    height: 470px;
    outline: none;
    padding-bottom: 40px;
  }

  .oracle-product-system {
    height: 525px;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: space-between;
    align-items: center;
    margin-top: -30px;
    margin-bottom: -30px;

    .oracle-system,
    .oracle-product {
      width: 590px;
      height: 400px;
      background-color: white;
      padding: 35px 28px 17px 15px;
      box-sizing: border-box;
      border-radius: 13px;

      .title {
        font-size: 20px;
        color: #000;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #e2e2e2;
        padding-bottom: 15px;

        .icon {
          width: 10px;
          height: 30px;
          border-radius: 5px;
          background-image: linear-gradient(#ff2929, #fff);
          margin-right: 12px;
        }
      }
    }

    .oracle-product {
      .content {
        width: 100%;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        justify-content: space-between;
        align-items: baseline !important;
        margin-top: 55px;

        .product-img {
          height: 126px;
        }

        .con-item {
          p {
            text-align: center;
          }
        }
      }
    }

    .oracle-system {
      .content {
        font-size: 14px;
        color: #333333;
        font-weight: bold;
        position: relative;

        .item1,
        .item2,
        .item3 {
          position: absolute;
          text-align: center;
        }

        .item1 {
          top: 27px;
          right: 24px;
        }

        .item2 {
          top: 115px;
          right: 24px;
        }

        .item3 {
          top: 208px;
          right: 24px;
        }
      }
    }
  }

  .bgc-f5f7fa {
    background: #f5f7fa;
  }

  .header {
    text-align: center;
    position: relative;


    .title-1 {
      font-size: 36px;
      font-weight: blod;
      color: #ff2929;
      margin-top: -40px;
    }

    .title-con {
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: center;
      align-items: center;

      .title-2 {
        font-size: 18px;
        color: #959595;
        padding-left: 5px;
        padding-right: 5px;
      }

      .line {
        width: 30px;
        border-bottom: 1px solid #ff2929;
      }
    }

    .btn {
      padding: 12px 27px;
      font-size: 20px;
      font-weight: 500;
      background-color: #ff2929;
      border: none;
      border-radius: 10px;
      color: #fff;
      overflow: hidden;
      outline: none;
      position: absolute;
      top: 10px;
      right: 0;
    }

    .btn:active {
      background-color: #f37d7d;
    }
  }

  .oracle-authentication-advantages {
    padding-top: 60px;

    .content {
      padding-top: 50px;
      padding-bottom: 40px;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: space-between;

      .item {
        width: 230px;
        min-height: 550px;
        background: #f54337;
        border: 2px solid #f54337;
        border-radius: 15px;
        padding: 20px;
        box-sizing: border-box;
        color: #fff;
        text-align: center;
        box-shadow: #666565 0px 0px 10px;

        .p-img {
          // margin-top: -20px;
          transform: rotateY(0deg);
          transition: transform 0.3s ease-in-out;
        }

        .p-1 {
          font-size: 21px;
          margin-top: 15px;
          margin-bottom: 30px;
          white-space: pre;
        }

        .p-2 {
          font-size: 18px;
          text-align: left;
        }
      }

      .item:hover .p-img {
        // margin-top: -20px;
        transform: rotateY(180deg);
        transition: transform 0.3s ease-in-out;
      }

      .item:nth-child(2n) {
        background-color: #fff;
        color: #f54337;
      }
    }
  }

  .itProspect {
    padding-top: 60px;
    margin-bottom: -20px;

    .it-content {
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: space-between;
      padding-top: 70px;
      padding-bottom: 70px;
      text-align: center;

      .it-item {
        width: 350px;

        .it-item-p1 {
          width: 95px;
          height: 95px;
          border-radius: 50%;
          box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px;
          display: -webkit-flex;
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          margin: 0 auto;

          img {
            transform: rotateY(0deg);
            // transform: scale(1.1, 1.1);
            transition: transform 0.3s linear;
          }
        }

        .it-item-p2 {
          font-size: 24px;
          color: #ff2929;
          padding-top: 20px;
          padding-bottom: 20px;
        }

        .it-item-p3 {
          font-size: 16px;
          color: #464444;
          text-align: left;
          text-indent: 25px;
          line-height: 1.5;
        }
      }

      .it-item:hover .it-item-p1 img {
        transform: rotateY(180deg);
        // transform: scale(1.1, 1.1);
        transition: transform 0.3s linear;
      }
    }
  }

  .trouble-shooting {
    padding-top: 50px;
    padding-bottom: 40px;

    .tro-content {
      padding-top: 70px;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: space-between;

      .tro-item {
        width: 200px;
        height: 240px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px;
        // box-shadow: -15px -15px 30px rgba(255,255,255,0.2),
        // 15px 15px 30px rgba(0, 0, 0, 0.2),
        // inset -5px -5px 5px rgba(255, 255, 255, 0.2),
        // inset 5px 5px 5px rgba(0, 0, 0,0.2);
        border-radius: 25px;
        text-align: center;
        font-size: 18px;
        color: #333;
        box-sizing: border-box;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top: 0px;
        transition: margin-top 0.5s ease-out;

        img {
          margin-top: 30px;
        }

        p {
          padding-left: 20px;
          padding-right: 20px;
          margin-bottom: 10px;
          width: 100%;
          box-sizing: border-box;
        }
      }

      .tro-item:hover {
        margin-top: -30px;
        transition: margin-top 0.5s ease-out;
      }
    }
  }

  .certificate {
    // background-color: red;
    padding-bottom: 20px;

    .color-fff {
      color: #fff;
      margin-top: 10px;
    }

    .content {
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: center;

      .left {
        margin-top: 40px;
      }

      .right {
        width: 507px;
        margin-left: 240px;

        p {
          width: 280px;
          font-size: 24px;
          color: #fff;
          line-height: 1.5;
        }

        .btn {
          padding: 12px 27px;
          font-size: 20px;
          font-weight: 500;
          background-color: #ff2929;
          border: none;
          border-radius: 10px;
          color: #fff;
          overflow: hidden;
          outline: none;
          margin-top: 20px;
          margin-left: 59px;
        }

        .btn:active {
          background-color: #f37d7d;
        }
      }
    }
  }

  .bgc-232936 {
    background: url(~assets/img/home/bgc01.png) repeat-x;
  }

  .qualification {
    padding-top: 60px;

    .qualification-container {
      padding-top: 60px;
      font-size: 16px;
      color: #333333;
      line-height: 2;
      text-indent: 32px;

      .qualification-container-imgs  {
        overflow: hidden;
        width: 1220px;
        position: relative;
        ul{
          overflow: hidden;
          height: 437px;
          display: -webkit-flex;
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          justify-content: space-between;
          position: relative;
          /*flex-wrap: wrap;*/
          align-content: space-between;
          margin-top: 10px;
          margin-bottom: -120px;
          float: left;
        }
        li {
          width: 400px;
        }
        .qcimg {
          width: 380px;
          height: 280px;
        }
      }
    }
  }
</style>
<style>
  .el-carousel__button {
    height: 4px;
    background-color: #ff2929;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .el-main {
    overflow: hidden;
  }
</style>
