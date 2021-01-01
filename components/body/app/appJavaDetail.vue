<template>
  <div class="appJavaDetail">
    <my-header />
    <div class="container">
      <div class="training-box">
        <div class="training-header">Oracle- -JAVA认证培训</div>
        <div class="training-content">
          <img class="left-box"
               src="@/assets/img/app/order/toux.png"
               alt />
          <div class="right-box">
            <p>课程名称: Oracle-JAVA认证培训</p>
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
            <p class="outline-header-title">JAVA基础</p>
          </div>
          <div class="outline-item-content">
            <p>定义变量的范围</p>
            <p>使用main方法创建可执行的Java应用程序</p>
            <p>从命令行运行Java程序；产生控制台输出</p>
            <p>导入其他Java软件包以使其在您的代码中可访问</p>
          </div>
        </div>
        <div class="course-outline-box-item">
          <div class="outline-item-header d-f-end outline-item-header-right">
            <img class="outline-header-img"
                 src="@/assets/img/app/java/two.png"
                 alt />
            <p class="outline-header-title">适用运算符和决策构造</p>
          </div>
          <div class="outline-item-content">
            <p>使用Java运算符</p>
            <p>使用括号覆盖运算符优先级</p>
            <p>使用==和equals（）测试字符串和其他对象之间的相等性</p>
            <p>创建if和if / else和三元构造 ；使用switch语句</p>
          </div>
        </div>
        <div class="course-outline-box-item">
          <div class="outline-item-header outline-item-header-left">
            <img class="outline-header-img"
                 src="@/assets/img/app/java/three.png"
                 alt />
            <p class="outline-header-title">适用循环构造</p>
          </div>
          <div class="outline-item-content">
            <p>创建和使用while循环</p>
            <p>创建和使用for循环，包括增强的for循环</p>
            <p>创建和使用do / while循环</p>
            <p>比较循环结构；使用中断并继续</p>
          </div>
        </div>
        <div class="course-outline-box-item">
          <div class="outline-item-header d-f-end outline-item-header-right">
            <img class="outline-header-img"
                 src="@/assets/img/app/java/four.png"
                 alt />
            <p class="outline-header-title">处理继承</p>
          </div>
          <div class="outline-item-content">
            <p>描述继承及其好处</p>
            <p>开发利用多态性的代码</p>
            <p>开发覆盖方法的代码</p>
            <p>区分引用的类型和对象的类型，确定何时需要铸造</p>
          </div>
        </div>
        <div class="course-outline-box-item">
          <div class="outline-item-header outline-item-header-left">
            <img class="outline-header-img"
                 src="@/assets/img/app/java/five.png"
                 alt />
            <p class="outline-header-title">适用JAVA API中的选定类</p>
          </div>
          <div class="outline-item-content">
            <p>使用StringBuilder类及其方法处理数据</p>
            <p>创建和操作字符串</p>
            <p>使用java.time.LocalDateTime，java.time.LocalDate，java.</p>
          </div>
        </div>
        <mt-button type="danger">点击获取完整大纲</mt-button>
      </div>
      <div class="why-select-Java">
        <p class="title">为什么选择学JAVA</p>
        <div class="why-select-content">
          <div class="select-item">
            <img class="select-img"
                 src="@/assets/img/app/java/select1.png"
                 alt />
            <p class="select-item-title">JAVA语言简单易学</p>
            <p class="select-item-content">
              Java语言语法简单，Java语言 拥有与C、C++等众多流行语
              言一样的简洁易懂的关 键字、 语法。虚拟机保驾护航，Java
              程序员无需手动开辟、释放内 存,这一切都由虚拟机帮你做了。
            </p>
          </div>
          <div class="select-item item-2-sty">
            <div class="round-box">
              <img class="select-img"
                   src="@/assets/img/app/java/select2.png"
                   alt />
            </div>
            <p class="select-item-title">JAVA程序员好就业</p>
            <p class="select-item-content">
              官方数据统计，在全球编程 语言工程师的数量上，JAVA
              语言以900万的程序员数量位 居首位。而且很多软件的开发
              都离不开JAVA，因此其程序 员的数量最多。
            </p>
          </div>
          <div class="select-item">
            <img class="select-img"
                 src="@/assets/img/app/java/select3.png"
                 alt />
            <p class="select-item-title">名企认可的技术</p>
            <p class="select-item-content">
              淘宝、京东等等著名的购物网 站，大数据处理都是来自Java。
              双十一疯狂购物，春节抢票， 数据 访问量相当之大，因为
              Java的存在，一切都变得井然 有序。 服务器的开发，智能家
              居，网站的后台维护等等，都 需要Java。
            </p>
          </div>
          <div class="select-item">
            <img class="select-img"
                 src="@/assets/img/app/java/select4.png"
                 alt />
            <p class="select-item-title">就业薪水高</p>
            <p class="select-item-content">
              据权威部门统计， 在本专科专 业毕业生“高薪榜”前十中，有6
              个职位属于IT行 业，其中又有 4个职位与Java开发有关。Java
              软件工程师的薪资相比其他开发 工程师高出许多， 具备2年以上
              工作经验的开发人员年薪平均都 可以达到18万元以上。
            </p>
          </div>
          <mt-button type="danger">我要学JAVA</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import appIndexHeader from "@/components/header/appIndexHeader";
import MyHeader from "@/components/header/app/appIndex";

export default {
  name: "appJavaDetail",
  components: { MyHeader },
};
</script>
<style lang="scss" scoped>
.appJavaDetail {
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
          .select-item-content {
            // color: #fff;
          }
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