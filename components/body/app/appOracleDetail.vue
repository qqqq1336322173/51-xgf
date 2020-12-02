<template>
  <div class="appOracleDetail">
    <my-header />
    <div class="container">
      <div class="training-box">
        <div class="training-header">Oracle- -Oracle认证培训</div>
        <div class="training-content">
          <img class="left-box"
               src="@/assets/img/app/order/toux.png"
               alt />
          <div class="right-box">
            <p>课程名称: Oracle-Oracle认证培训</p>
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
            <p class="outline-header-title">关系数据库的概念</p>
          </div>
          <div class="outline-item-content">
            <p>解释关系数据库的理论和物理方面</p>
            <p>SQL Select语句中与ERD组件相关的子句</p>
            <p>解释数据库和SQL之间的关系</p>
          </div>
        </div>
        <div class="course-outline-box-item">
          <div class="outline-item-header d-f-end outline-item-header-right">
            <img class="outline-header-img"
                 src="@/assets/img/app/java/two.png"
                 alt />
            <p class="outline-header-title">限制和排序数据</p>
          </div>
          <div class="outline-item-content">
            <p>在表达式中为运算符应用优先级规则</p>
            <p>限制SQL语句中返回的行</p>
            <p>使用替代变量</p>
            <p>使用DEFINE和VERIFY命令</p>
          </div>
        </div>
        <div class="course-outline-box-item">
          <div class="outline-item-header outline-item-header-left">
            <img class="outline-header-img"
                 src="@/assets/img/app/java/three.png"
                 alt />
            <p class="outline-header-title">使用SQL SELECT语句</p>
          </div>
          <div class="outline-item-content">
            <p>使用列别名</p>
            <p>使用SQL SELECT语句</p>
            <p>使用串联运算符和DISTINCT关键字</p>
            <p>在SELECT语句中使用算术表达式和NULL值</p>
          </div>
        </div>
        <div class="course-outline-box-item">
          <div class="outline-item-header d-f-end outline-item-header-right">
            <img class="outline-header-img"
                 src="@/assets/img/app/java/four.png"
                 alt />
            <p class="outline-header-title">使用单行功能自定义输出</p>
          </div>
          <div class="outline-item-content">
            <p>在SQL SELECT和WHERE子句中使用字符函数处理字符串</p>
            <p>用日期数据执行算术</p>
            <p>使用ROUND，TRUNC和MOD功能处理数字</p>
            <p>使用日期功能处理日期</p>
          </div>
        </div>
        <!-- <div class="hidden-box"> -->
        <div class="course-outline-box-item">
          <div class="outline-item-header outline-item-header-left">
            <img class="outline-header-img"
                 src="@/assets/img/app/java/five.png"
                 alt />
            <p class="outline-header-title">使用转换函数</p>
          </div>
          <div class="outline-item-content">
            <p>将NVL，NULLIF和COALESCE函数应用于数据</p>
            <p>了解隐式和显式数据类型转换</p>
            <p>使用TO_CHAR，TO_NUMBER和TO_DATE转换函数</p>
          </div>
        </div>
        <!-- </div> -->
        <mt-button type="danger">点击获取完整大纲</mt-button>
      </div>
      <div class="why-select-Java">
        <p class="title">为什么选择学Oracle</p>
        <div class="why-select-content">
          <div class="select-item">
            <img class="select-img"
                 src="@/assets/img/app/java/select1.png"
                 alt />
            <p class="select-item-title">不可或缺</p>
            <p class="select-item-content">有80％企业在使用Oracle技术，全球十大银行均采用了Oracle应用系统， 在中国，排名前20位的银行都在使用Oracle技术。在通信领域， 全球20家顶级通信公司全部都在使用Oracle应用产品。 在中国，所有的电信营运商（如中国移动，中国电信，中国联通等）都在使用Oracle技术。</p>
          </div>
          <div class="select-item item-2-sty">
            <div class="round-box">
              <img class="select-img"
                   src="@/assets/img/app/java/select2.png"
                   alt />
            </div>
            <p class="select-item-title">人才缺口大</p>
            <p class="select-item-content">
              在中国前100大的IT公司（HP，IBM，毕博，埃森哲，东软，宝信等）， 全部使用Oracle技术，各大企业对Oracle的人才需求非常的大。
            </p>
          </div>
          <div class="select-item">
            <img class="select-img"
                 src="@/assets/img/app/java/select3.png"
                 alt />
            <p class="select-item-title">就业多，薪资高</p>
            <p class="select-item-content">
              Oracle数据库管理方向，Oracle开发及系统架构方向， Oracle数据建模数据仓库等方向。职业对于oracle DBA来说，技术是敲门砖 ，实践经验是身价的保障，所以DBA也是IT行业为数不多的“越老越值钱”的职业之一
            </p>
          </div>
          <div class="select-item">
            <img class="select-img"
                 src="@/assets/img/app/java/select4.png"
                 alt />
            <p class="select-item-title">发展潜力大</p>
            <p class="select-item-content">
              Oracle认证大师（OCM）是Oracle认证大师，是Oracle认证的最高级别， 是对数据库从业人员的技术，知识和操作技能的最高级别的认可，IT界顶级认证之一。 Oracle OCM是解决最困难的技术难题和最复杂的系统故障的最佳Oracle专家人选。
            </p>
          </div>
          <mt-button type="danger">我要学Oracle</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import appIndexHeader from "@/components/header/appIndexHeader";
import MyHeader from "@/components/header/app/appIndex";

export default {
  name: "appOracleDetail",
  components: { MyHeader },
};
</script>
<style lang="scss" scoped>
.appOracleDetail {
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