<template>
  <div class="appIndex">
    <appIndexHeader></appIndexHeader>
    <!-- 轮播图 -->
    <div class="banner-block">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="swipe-sty"
                       v-for="item in banners"
                       :key="item.id"><img :src="item.url"
               alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 内容 -->
    <div class="container">
      <!-- oracle简介 -->
      <div class="oracle m-bottom-20 bgcW">
        <div class="title-icon">
          <div class="icon"></div>
          <p>Oracle简介</p>
        </div>
        <div class="content">
          <img src="@/assets/img/index/oraclegs.png"
               alt />
          <p>{{oracleCon}}</p>
        </div>
        <div class="button">
          <button class="btn">立即认证</button>
        </div>
      </div>
      <!-- 动态信息 -->
      <div class="message m-bottom-20 bgcW">
        <div class="title-icon">
          <div class="message-title-box">
            <div class="icon"></div>
            <p>动态信息</p>
          </div>
          <mt-button class="more"
                     @click.native="goNewsDetail">更多>></mt-button>
        </div>
        <div class="content">
          <ul class="con-ul">
            <li v-for="item in messages"
                :key="item.id"
                @click.native="goNewsInfo(item.id)">
              <div class="li-title">
                <div class="circle"></div>
                <p class="title-content">{{item.title}}</p>
              </div>
              <div class="li-content">{{item.content}}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 视屏 -->
      <div class="video m-bottom-20 bgcW">
        <video src="@/assets/video/Oraclevideo.mp4"
               class="video"
               muted
               controls="controls"
               autoplay="autoplay"></video>
      </div>
      <!-- Oracle旗下产品 -->
      <div class="oracle-product m-bottom-20 bgcW">
        <div class="title-icon">
          <div class="icon"></div>
          <p>Oracle旗下产品</p>
        </div>
        <div class="content">
          <div class="con-item">
            <img src="@/assets/img/index/oracle.png"
                 alt />
            <p>Oracle数据库</p>
          </div>
          <div class="con-item">
            <img src="@/assets/img/index/java.png"
                 alt />
            <p>java</p>
          </div>
          <div class="con-item">
            <img src="@/assets/img/index/mysql.png"
                 alt />
            <p>mysql</p>
          </div>
        </div>
      </div>
      <!-- Oracle认证体系 -->
      <div class="oracle-system m-bottom-20">
        <div class="title-icon">
          <div class="icon"></div>
          <p>Oracle认证体系</p>
        </div>
        <div class="content">
          <img src="@/assets/img/index/system.png"
               alt />
          <div class="item1">
            <p>Oracle Certified Master</p>
            <p>是面向专业技术人员的最高级别认证</p>
          </div>
          <div class="item2">
            <p>Oracle Certified Professional</p>
            <p>是IT专业人员掌握高级专业知识的证明</p>
          </div>
          <div class="item3">
            <p>Oracle Certified Associate</p>
            <p>Oracle 基础认证</p>
          </div>
        </div>
      </div>

      <!-- oracle认证优势 -->
      <div class="oracle-authentication-advantages m-bottom-20">
        <div class="header">
          <p class="title-1">Oracle 认证项目优势</p>
          <div class="title-con">
            <div class="line"></div>
            <span class="title-2">Oracle Certification program Advantages</span>
            <div class="line"></div>
          </div>
        </div>
        <div class="slide-box">
          <div class="content">
            <div class="item">
              <p>
                <img src="@/assets/img/index/bg01.png"
                     alt />
              </p>
              <p class="p-1">证书 + 工作技能</p>
              <p class="p-2">
                我们拥有Oracle官方培训授权合作,
                考证教学有保障;强大的专业师资团队进行技能培训，
                重点、难点各个击破，提升实用技能。
              </p>
            </div>
            <div class="item">
              <p>
                <img src="@/assets/img/index/bg02.png"
                     alt />
              </p>
              <p class="p-1">产业前景好</p>
              <p class="p-2">
                习近平总书记在党的十九大报告中指出，
                我国经济“正处在转变发展方式、优化经济结构、转换增长动力的攻关期”，
                要坚定建设网络强国、数字中国、智慧社会，推动互联网、大数据、人工智能与实体经济深度融合，
                发展数字经济、共享经济。
              </p>
            </div>
            <div class="item">
              <p>
                <img src="@/assets/img/index/bg03.png"
                     alt />
              </p>
              <p class="p-1">认证含金量高</p>
              <p class="p-2">
                Oracle认证资质是在全球范围内
                广泛被雇主认可的品牌，只有在Oracle WDP 参加学习后方可参加认证。
              </p>
            </div>
            <div class="item">
              <p>
                <img src="@/assets/img/index/bg04.png"
                     alt />
              </p>
              <p class="p-1">脱颖而出 高薪机遇</p>
              <p class="p-2">
                招聘经理高度重视IT认证，获得Oracle 认证能在众多简历中
                脱颖而出。增强个人市场竞争力，提高收入能力，薪资涨幅可观。
              </p>
            </div>
            <div class="item">
              <p>
                <img src="@/assets/img/index/bg05.png"
                     alt />
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
      <!-- IT 行业前景 -->
      <div class="itProspect m-bottom-20">
        <div class="header">
          <p class="title-1">IT 行业前景</p>
          <div class="title-con">
            <div class="line"></div>
            <span class="title-2">IT Industry Background</span>
            <div class="line"></div>
          </div>
        </div>
        <!-- 人才需求量大 -->
        <div class="it-content">
          <div class="it-item">
            <div class="it-title">
              <p class="title-img">
                <img src="@/assets/img/index/it01.png"
                     alt />
              </p>
              <p class="title-p">人才需求量大</p>
            </div>
            <div class="it-content">
              2020年“新一-代信息技术产业“人才需求将达到1800万人次，
              人才缺口750万人次。2025年“新一代信息技术产业”人才需求
              将达到2000万人次，人才缺口950万人次。
            </div>
          </div>
          <div class="it-item">
            <div class="it-title it-title2">
              <p class="title-img">
                <img src="@/assets/img/index/it02.png"
                     alt />
              </p>
              <p class="title-p">职业寿命长</p>
            </div>
            <div class="it-content">
              IT行业发展迅速,从业者能够随时随地的接触到
              最新的资讯，了解到最新的技术，不断的充实自己，突破自己，一步步的
              得到自我提升，随之，待遇、职位也会越来越好。
            </div>
          </div>
          <div class="it-item">
            <div class="it-title">
              <p class="title-img">
                <img src="@/assets/img/index/it03.png"
                     alt />
              </p>
              <p class="title-p">人才需求量大</p>
            </div>
            <div class="it-content">
              未来IT企业人才需求分布数字艺术类41%、信息技术
              类38%、软件技术类8%、移动开发类6%、硬件开发类5%、软件测试类2%。
            </div>
          </div>
        </div>
      </div>

      <!-- oracle认证常见问题 -->
      <div class="trouble-shooting m-bottom-20">
        <div class="header">
          <p class="title-1">Oracle认证常见问题解答</p>
          <div class="title-con">
            <div class="line"></div>
            <span class="title-2">Trouble Shooting</span>
            <div class="line"></div>
          </div>
        </div>
        <div class="slide-box">
          <div class="tro-content">
            <div class="tro-item">
              <img src="@/assets/img/index/tro01.png"
                   alt />
              <p>Oracle证书好考吗?学费多少钱?</p>
            </div>
            <div class="tro-item">
              <img src="@/assets/img/index/tro02.png"
                   alt />
              <p>报考条件有哪些?需要学多久?</p>
            </div>
            <div class="tro-item">
              <img src="@/assets/img/index/tro03.png"
                   alt />
              <p>Oracle证书的含金量怎么样?</p>
            </div>
            <div class="tro-item">
              <img src="@/assets/img/index/tro04.png"
                   alt />
              <p>我可以申请免费试听课程吗?</p>
            </div>
            <div class="tro-item">
              <img src="@/assets/img/index/tro05.png"
                   alt />
              <p>我可以申请免费试听课程吗?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 行业认可度高的认证证书 -->
    <div class="bgc-232936 m-bottom-20">
      <div class="certificate">
        <div class="header">
          <p class="title-1 color-fff">行业认可度高的认证证书</p>
        </div>
        <div class="content">
          <div class="left">
            <img src="@/assets/img/index/zs01.png"
                 alt />
          </div>
          <div class="right">
            <p>Oracle认证考试学习之路为你助力职场前行!</p>
            <button class="btn">开始学习</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appIndexHeader from "@/components/header/app/appIndexHeader";
import httpServer from "@/assets/js/httpServer";
export default {
  name: "appIndex",
  components: { appIndexHeader },
  data: function () {
    return {
      banners: [
        {
          id: 1,
          url:
            "~assets/img/app/index/banner01.png",
        },
        {
          id: 2,
          url:
            "~assets/img/app/index/banner02.png",
        }
      ],
      oracleCon:
        "Oracle(甲骨文公司)，全称甲骨文股份有限公司，世界500强，全球第一大的企业管理软件公司。目前全球500强企业中有98%在使用Oracle技术，全球前十大银行、前二十位的顶级通讯公司均在采用Oracle应用系统，中国所有电信运营商（如中国移动、中国电信、中国联通等）、中国的电力、金融、保险、证券、政府及大多数的制造业Oracle技术都处于绝对优势地位。",
      messages: [
        {
          id: 1,
          title:
            "随着互联浪潮的来袭，移动互联网的盛行，相对应的高技术职业也层出不穷，UI设计师便是其中之一。那么，怎么样才能学好、学精UI设计呢?其实只要以下这三件事做好了",
          content:
            "随着互联浪潮的来袭，移动互联网的盛行，相对应的高技术职业也层出不穷，UI设计师便是其中之一。那么，怎么样才能学好、学精UI设计呢?其实只要以下这三件事做好了",
        },
        {
          id: 2,
          title: "学习UI设计，做好这3点，你就成功了一半",
          content:
            "随着互联浪潮的来袭，移动互联网的盛行，相对应的高技术职业也层出不穷，UI设计师便是其中之一。那么，怎么样才能学好、学精UI设计呢?其实只要以下这三件事做好了",
        },
        {
          id: 3,
          title: "学习UI设计，做好这3点，你就成功了一半",
          content:
            "随着互联浪潮的来袭，移动互联网的盛行，相对应的高技术职业也层出不穷，UI设计师便是其中之一。那么，怎么样才能学好、学精UI设计呢?其实只要以下这三件事做好了",
        },
      ],
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
    };
  },
  created () {
    let url = this.url + 'index/indexData.action'
    httpServer(
      {
        url,
        method: "get"
      },
      {
        page: 1,
        rows: 3
      }
    )
      .then(res => {
        console.log(res.data.bannerlist);
        // this.banners = res.data.bannerlist;

        this.messages = res.data.newslist;
      })
      .catch(err => err);
  },
  methods: {
    goNewsDetail () {
      console.log(1);
      this.$router.push('/appDyInfo');
    },
    goNewsInfo (id) {
      this.$router.push('/newsDetail?id=' + id);
    }
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
<style lang="scss">
.appIndex {
  background-color: #f5f8fa;
}
.bgcW {
  background-color: #fff;
}
.banner-block {
  width: 100%;
  height: 4.666667rem;
  background-color: red;
}
.container {
  padding: 0.373333rem;
}
ul {
  list-style: none;
}
.m-bottom-20 {
  margin-bottom: 0.533333rem;
}
.title-icon {
  font-size: 0.426667rem;
  color: #000;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 0.266667rem;
  .icon {
    width: 0.133333rem;
    height: 0.426667rem;
    border-radius: 0.133333rem;
    background-image: linear-gradient(#ff2929, #fff);
    margin-right: 0.266667rem;
    margin-left: 0.08rem;
  }
}
.oracle,
.message {
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.266667rem;
  box-shadow: #8f8f8f 0px 0px 0.186667rem;

  padding: 0.266667rem;

  .button {
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: flex-end;
    padding-right: 0.266667rem;
    .btn {
      padding: 0.133333rem 0.213333rem;
      font-size: 0.373333rem;
      font-weight: 500;
      background-color: #ff2929;
      border: none;
      border-radius: 0.133333rem;
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
  .content {
    width: 100%;
    padding-top: 0.373333rem;
    box-sizing: border-box;
    font-size: 0.346667rem;
    color: #333333;
    line-height: 1.6;
    img {
      width: 3.813333rem;
      height: 3.04rem;
      margin-right: 0.293333rem;
      float: left;
      margin-top: 0.133333rem;
    }
  }
}

.message {
  .title-icon {
    justify-content: space-between;
    .message-title-box {
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: flex-start;
      align-items: center;
    }
    .more {
      font-size: 0.293333rem;
      color: #696969;
    }
    .more:active {
      color: #ac3b3b;
    }
  }
  .content {
    width: 100%;
    padding-top: 0.373333rem;
    padding-bottom: 0.933333rem;
    box-sizing: border-box;
    font-size: 0.426667rem;
    color: #333333;
    box-sizing: border-box;
    .con-ul {
      list-style: none;
      .li-title {
        font-size: 0.373333rem;
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
        }
        .circle {
          width: 0.266667rem;
          height: 0.266667rem;
          border-radius: 50%;
          overflow: hidden;
          background-color: #ff2929;
          margin-right: 0.266667rem;
        }
      }
      .li-content {
        line-height: 2;
        text-indent: 0.666667rem;
        font-size: 0.346667rem;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

.video {
  width: 100%;
  height: 5.6rem;
  outline: none;
}

.oracle-system,
.oracle-product {
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.266667rem;
  box-shadow: #8f8f8f 0px 0px 0.186667rem;
  padding: 0.266667rem;
}
.oracle-product {
  .content {
    width: 100%;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: space-between;
    align-items: baseline;
    padding-top: 0.533333rem;
    padding-bottom: 0.533333rem;
    font-size: 0.373333rem;
    img {
      width: 2.56rem;
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
    font-size: 0.32rem;
    color: #333333;
    position: relative;
    padding-top: 0.533333rem;
    padding-bottom: 0.533333rem;
    font-weight: bold;
    img {
      width: 4.266667rem;
    }
    .item1,
    .item2,
    .item3 {
      position: absolute;
      text-align: center;
      right: 0;
    }
    .item1 {
      top: 0.72rem;
    }
    .item2 {
      top: 1.92rem;
    }
    .item3 {
      top: 2.933333rem;
    }
  }
}

.oracle-authentication-advantages {
  .slide-box {
    overflow-x: auto;
    .content {
      width: 100%;
      padding-top: 0.426667rem;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: flex-start;
      .item {
        flex: 1;
        background: #f54337;
        border: 2px solid #f54337;
        border-radius: 0.4rem;
        padding: 0.533333rem;
        box-sizing: border-box;
        color: #fff;
        text-align: center;
        margin-right: 0.266667rem;
        .p-1 {
          width: 3.733333rem;
          font-size: 0.426667rem;
          margin-top: 0.32rem;
          margin-bottom: 0.533333rem;
          white-space: nowrap;
        }
        .p-2 {
          font-size: 0.346667rem;
          text-align: left;
          display: -webkit-flex;
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
      }
      .item:nth-child(2n) {
        background-color: #fff;
        color: #f54337;
      }
    }
  }
}
.header {
  text-align: center;
  .title-1 {
    font-size: 0.48rem;
    font-weight: blod;
    color: #ff2929;
  }
  .title-con {
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: center;
    align-items: center;
    .title-2 {
      font-size: 0.24rem;
      color: #959595;
      padding-left: 0.133333rem;
      padding-right: 0.133333rem;
    }
    .line {
      width: 0.426667rem;
      border-bottom: 1px solid #ff2929;
    }
  }
}

.itProspect {
  .it-content {
    .it-item {
      .it-title {
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        align-items: center;
        padding-left: 0.533333rem;
        padding-right: 0.533333rem;
        margin-top: 0.4rem;
        .title-img {
          width: 1.333333rem;
          height: 1.333333rem;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: #8f8f8f 0px 0px 0.186667rem;
          display: -webkit-flex;
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          background-color: #fff;
          img {
            width: 0.933333rem;
          }
        }
        .title-p {
          font-size: 0.373333rem;
          color: #fff;
          font-weight: bold;
          background-color: #f54437;
          padding: 0.186667rem 1.013333rem;
          border-radius: 0.186667rem;
          margin-left: -0.4rem;
          display: -webkit-flex;
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          align-items: center;
        }
      }
      .it-title2 {
        flex-direction: row-reverse;
        .title-p {
          margin-left: 0;
          margin-right: -0.4rem;
        }
      }
      .it-content {
        padding: 0.693333rem 0.4rem;
        background-color: #fff;
        box-shadow: #8f8f8f 0px 0px 7px;
        font-size: 0.32rem;
        line-height: 2;
        text-indent: 0.533333rem;
        border-radius: 0.186667rem;
        margin-top: -0.666667rem;
      }
    }
  }
}

.trouble-shooting {
  .slide-box {
    overflow: scroll;
    .tro-content {
      padding-top: 0.533333rem;
      padding-left: 0.133333rem;
      padding-right: 0.133333rem;
      padding-bottom: 0.133333rem;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: flex-start;
      .tro-item {
        box-shadow: #8f8f8f 0px 0px 0.186667rem;
        padding: 0.533333rem 0.346667rem 0.533333rem;
        border-radius: 0.213333rem;
        text-align: center;
        font-size: 0.24rem;
        color: #333;
        box-sizing: border-box;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-right: 0.266667rem;
        img {
          width: 1.2rem;
        }
        p {
          width: 2rem;
        }
      }
    }
  }
}

.certificate {
  padding: 0.666667rem 0.4rem;
  .color-fff {
    color: #fff;
    margin-bottom: 0.666667rem;
  }
  .content {
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: space-between;
    .left {
      margin-right: 0.266667rem;
      img {
        width: 5.653333rem;
      }
    }
    .right {
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: flex-start;
      align-content: space-around;
      flex-wrap: wrap;
      p {
        width: 100%;
        font-size: 0.4rem;
        color: #fff;
        line-height: 1.5;
      }
      .btn {
        padding: 0.16rem 0.266667rem;
        font-size: 0.373333rem;
        font-weight: 500;
        background-color: #ff2929;
        border: none;
        border-radius: 0.186667rem;
        color: #fff;
        overflow: hidden;
        outline: none;
      }
      .btn:active {
        background-color: #f37d7d;
      }
    }
  }
}
.bgc-232936 {
  background: url(~assets/img/index/bgc01.png) no-repeat center center;
  background-size: 100% 100%;
}
.swipe-sty {
  img {
    width: inherit;
    height: inherit;
  }
}
</style>