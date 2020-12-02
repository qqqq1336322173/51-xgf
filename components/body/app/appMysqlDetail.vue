<template>
  <div class="appMysqlDetail">
    <my-header />

    <div class="container">
      <div class="training-box">
        <div class="training-header">Oracle- -MySql认证培训</div>
        <div class="training-content">
          <img class="left-box"
               src="@/assets/img/app/order/toux.png"
               alt />
          <div class="right-box">
            <p>课程名称: Oracle-MySql认证培训</p>
            <p>开班类型: 线上开班</p>
            <p>认证等级: OCA/OCP</p>
            <p>授课方式: 线上直播+录播、班级群在线答疑</p>

            <p class="m-t-30">
              <mt-button class="m-r-20"
                         type="danger">在线咨询</mt-button>
              <mt-button plain
                         type="danger">立即报名</mt-button>
            </p>
          </div>
        </div>
      </div>
      <div class="course-overview-box">
        <img class="course-img"
             src="@/assets/img/app/java/bgc01.png"
             alt />
        <p class="title">适 用 对 象</p>
        <div class="course-content">
          <div class="course-item">
            <img class="course-item-img"
                 src="@/assets/img/app/java/person1.png"
                 alt />
            <p>在校生</p>
          </div>
          <div class="course-item">
            <img class="course-item-img"
                 src="@/assets/img/app/java/person2.png"
                 alt />
            <p>应届 / 毕业生</p>
          </div>
          <div class="course-item">
            <img class="course-item-img"
                 src="@/assets/img/app/java/person3.png"
                 alt />
            <p>编程爱好者</p>
          </div>
          <div class="course-item">
            <img class="course-item-img"
                 src="@/assets/img/app/java/person4.png"
                 alt />
            <p>IT工程师</p>
          </div>
        </div>
      </div>
      <div class="course-outline-box">
        <p class="title">课程大纲</p>
        <div class="course-outline-box-item">
          <div class="outline-item-header outline-item-header-left">
            <img class="outline-header-img"
                 src="@/assets/img/app/java/one.png"
                 alt />
            <p class="outline-header-title">MySQL基础</p>
          </div>
          <div class="outline-item-content">
            <p>DBA职责介绍</p>
            <p>关系型数据库及非关系型数据库介绍</p>
            <p>MySQL源码安装步骤讲解及总结</p>
            <p>MySQL二进制安装讲解</p>
          </div>
        </div>
        <div class="course-outline-box-item">
          <div class="outline-item-header d-f-end outline-item-header-right">
            <img class="outline-header-img"
                 src="@/assets/img/app/java/two.png"
                 alt />
            <p class="outline-header-title">MySQL底层原理</p>
          </div>
          <div class="outline-item-content">
            <p>MySQL误删root用户作业讲解</p>
            <p>MySQL客户端与服务器模型及连接方式</p>
            <p>MySQL服务器构成及实例讲解</p>
            <p>MySQL物理结构及逻辑结构讲解</p>
          </div>
        </div>
        <div class="course-outline-box-item">
          <div class="outline-item-header outline-item-header-left">
            <img class="outline-header-img"
                 src="@/assets/img/app/java/three.png"
                 alt />
            <p class="outline-header-title">MySQL多实例</p>
          </div>
          <div class="outline-item-content">
            <p>MySQL用户权限管理-基础操作</p>
            <p>MySQL用户权限管理-用户定义</p>
            <p>MySQL用户管理-grant语句分解机单列级别授权</p>
            <p>MySQL权限管理-企业中如何给开发用户开权限</p>
          </div>
        </div>
        <div class="course-outline-box-item">
          <div class="outline-item-header d-f-end outline-item-header-right">
            <img class="outline-header-img"
                 src="@/assets/img/app/java/four.png"
                 alt />
            <p class="outline-header-title">MySQL客户端命令</p>
          </div>
          <div class="outline-item-content">
            <p>MySQL客户端命令-mysql连接命令</p>
            <p>MySQL客户端命令-mysqladmin命令</p>
            <p>SQL语句DDL-对库进行操作</p>
            <p>SQL语句DDL-对表进行操作</p>
          </div>
        </div>
        <!-- <div class="hidden-box"> -->
        <div class="course-outline-box-item">
          <div class="outline-item-header outline-item-header-left">
            <img class="outline-header-img"
                 src="@/assets/img/app/java/five.png"
                 alt />
            <p class="outline-header-title">MySQL索引算法</p>
          </div>
          <div class="outline-item-content">
            <p> MySQL索引算法BTREE、B+TREE、B*TREE</p>
            <p> MySQL索引管理-如何创建主键，普通索引</p>
            <p> MySQL索引管理-前缀索引及联合索引</p>
          </div>
        </div>
        <!-- </div> -->
        <mt-button type="danger">点击获取完整大纲</mt-button>
      </div>
      <div class="why-select-Java">
        <p class="title">为什么选择学MySql</p>
        <div class="why-select-content">
          <div class="select-item">
            <img class="select-img"
                 src="@/assets/img/app/java/select1.png"
                 alt />
            <p class="select-item-title">全世界流行开源数据库软件</p>
            <p class="select-item-content">
              十余年来，MySQL数据库一直是数据库应用的核心，拥有不断增长和需求的客户群。全球超过1200万个MySQL安装，每天在MySQL网站有50,000个下载。华尔街日报研究发现，在所有开源软件中，MySQL数据库的下载次数仅次于MozillaFirefox浏览器。
            </p>
          </div>
          <div class="select-item item-2-sty">
            <div class="round-box">
              <img class="select-img"
                   src="@/assets/img/app/java/select2.png"
                   alt />
            </div>
            <p class="select-item-title">人才需求大</p>
            <p class="select-item-content">
              《大数据人才报告》指出,目前全国的大数据人才仅46万, 未来3-5年内将会出现高达150万的大数据人才的缺口。 根据中国商业联合会数据分析专业委员会统计，未来中国基 础性数据分析人才缺口将高达到1400万。
            </p>
          </div>
          <div class="select-item">
            <img class="select-img"
                 src="@/assets/img/app/java/select3.png"
                 alt />
            <p class="select-item-title">就业薪资高</p>
            <p class="select-item-content">
              大数据方面职位列在本专科专业毕业生“高薪榜”前五且最为稀缺， 领英报告表明，高度稀缺的是数据分析人才，其供给指数最低，仅为0.05， 并且其才跳槽速度也最快，平均跳槽速度为19.8个月。
            </p>
          </div>
          <div class="select-item">
            <img class="select-img"
                 src="@/assets/img/app/java/select4.png"
                 alt />
            <p class="select-item-title">发展潜力大</p>
            <p class="select-item-content">
              根据国内外权威机构最新统计数据显示至2020年， 全球大数据市场规模将突破万亿美元，年均复合增长率高达40%以上 。
            </p>
          </div>
          <mt-button type="danger">我要学MySql</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import appIndexHeader from "@/components/header/appIndexHeader";
import MyHeader from "@/components/header/app/appIndex";

export default {
  name: "appMysqlDetail",
  components: { MyHeader },
};
</script>
<style lang="scss" scoped>
.appMysqlDetail {
  * {
    margin: 0;
    padding: 0;
  }
  background-color: #f4f5f7;
  .container {
    width: 100%;
    padding: 0.266667rem 0.333333rem;
    box-sizing: border-box;
    .training-box {
      background-color: #fff;
      padding: 0.266667rem 0.133333rem;
      color: #222222;
      .training-header {
        font-size: 0.2rem;
        margin-bottom: 0.2rem;
      }
      .training-content {
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        align-items: center;
        justify-content: flex-start;
        .left-box {
          width: 3.333333rem;
        }
        .right-box {
          margin-left: 0.466667rem;
          line-height: 2;
          font-size: 0.186667rem;
          .mint-button {
            font-size: 0.186667rem;
            width: 2.426667rem;
            height: 0.52rem;
            border-radius: 0;
          }
          .m-r-20 {
            margin-right: 0.266667rem;
          }
          .m-t-30 {
            margin-top: 0.4rem;
          }
        }
      }
    }
    .course-overview-box {
      padding-top: 0.373333rem;
      box-sizing: border-box;
      .course-img {
        width: 100%;
      }
      .title {
        font-size: 0.32rem;
        color: rgb(34, 34, 34);
        font-weight: bold;
        text-align: center;
        padding-top: 0.333333rem;
        padding-bottom: 0.333333rem;
      }
      .course-content {
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        justify-content: space-between;
        align-items: center;
        .course-item {
          .course-item-img {
            width: 1.92rem;
            height: 2.266667rem;
          }
          font-size: 0.32rem;
          font-weight: bold;
          text-align: center;
          line-height: 2;
        }
      }
    }
    .course-outline-box {
      .title {
        font-size: 0.32rem;
        color: rgb(34, 34, 34);
        font-weight: bold;
        text-align: center;
        padding-top: 0.333333rem;
      }
      .course-outline-box-item {
        background-color: #fff;
        height: 3.36rem;
        box-shadow: 0 0 10px #eee;
        border-radius: 8px;
        position: relative;
        margin-top: 0.933333rem;
        box-shadow: 0 0 0.133333rem rgb(185, 180, 180);
        .outline-item-header {
          width: 100%;
          display: -webkit-flex;
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          justify-content: flex-start;
          align-items: center;
          position: absolute;
          .outline-header-img {
            width: 1.226667rem;
            height: 1.226667rem;
            z-index: 1000;
            margin-bottom: 0.066667rem;
          }
          .outline-header-title {
            font-size: 0.373333rem;
            color: #fff;
            background-color: #f54337;
            height: 0.666667rem;
            border-radius: 0.106667rem;
            display: -webkit-flex;
            display: flex;
            display: -webkit-box;
            display: -ms-flexbox;
            justify-content: center;
            align-items: center;
            margin-left: -0.666667rem;
            box-sizing: border-box;
          }
        }
        .outline-item-header-left {
          left: 0.266667rem;
          top: -0.6rem;
          .outline-header-title {
            padding-left: 0.633333rem;
            padding-right: 0.333333rem;
          }
        }
        .outline-item-header-right {
          right: 0.266667rem;
          top: -0.6rem;
          .outline-header-title {
            padding-left: 0.333333rem;
            padding-right: 0.633333rem;
          }
        }
        .d-f-end {
          flex-direction: row-reverse;
          .outline-header-title {
            margin-left: 0;
            margin-right: -0.666667rem;
          }
        }
        .outline-item-content {
          font-size: 0.266667rem;
          color: rgb(102, 102, 102);
          line-height: 1.5;
          padding: 0.666667rem 0.266667rem 0.266667rem;
          height: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }
      }
      // .hidden-box {
      //   width: 100%;
      //   height: 2.533333rem;
      //   overflow: hidden;
      //   margin-bottom: 0.666667rem;
      // }
      .mint-button {
        width: 4.133333rem;
        height: 0.853333rem;
        border-radius: 0;
        font-size: 0.32rem;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top: 0.666667rem;
      }
    }
    .why-select-Java {
      .title {
        font-size: 0.32rem;
        color: rgb(34, 34, 34);
        font-weight: bold;
        text-align: center;
        padding-top: 0.333333rem;
      }
      .why-select-content {
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-left: 0.066667rem;
        padding-right: 0.066667rem;
        .select-item {
          width: 4.32rem;
          min-height: 5.453333rem;
          display: -webkit-flex;
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          background-color: #fff;
          padding: 0.533333rem 0.133333rem 0.133333rem;
          border-radius: 0.133333rem;
          margin-top: 0.533333rem;
          box-sizing: border-box;
          box-shadow: 0 0 0.133333rem rgb(185, 180, 180);
          .select-img {
            width: 0.506667rem;
          }
          .select-item-title {
            font-size: 0.333333rem;
            padding-top: 0.32rem;
            padding-bottom: 0.32rem;
          }
          .select-item-content {
            font-size: 0.28rem;
            color: #222;
          }
        }
        .item-2-sty {
          // background-color: #ff2a27;
          // padding-top: 0.186667rem;
          // color: #fff;
          // .select-item-content {
          //   color: #fff;
          // }
          .round-box {
            width: 1.106667rem;
            height: 1.106667rem;
            background-color: #fff;
            display: -webkit-flex;
            display: flex;
            display: -webkit-box;
            display: -ms-flexbox;
            justify-content: center;
            align-items: center;
            border-radius: 45%;
          }
          .select-item-title {
            padding-top: 0.16rem;
          }
        }
        .mint-button {
          width: 4.133333rem;
          height: 0.853333rem;
          border-radius: 0;
          font-size: 0.32rem;
          margin-left: 50%;
          transform: translateX(-50%);
          margin-top: 0.4rem;
          margin-bottom: 0.666667rem;
        }
      }
    }
  }
}
</style>