<template>
  <!--    <el-container>-->
 <div class="mysql">
    <el-main>
    <floating-window></floating-window>
    <!--    <el-col :span="24" :offset="2">-->
    <div class="my bg-a">
      <div class="main">
        <el-col :span="24"
                :offset="2">
          <!-- <div class="grid-content">
            <h4 style="font-size: 20px">{{main}}</h4>
          </div> -->
        </el-col>
        <!--        <div class="container">-->

        <el-row>
          <el-col :span="24">

            <div class="grid-content bg-w">
              <el-col :span="24"
                      :offset="2">
                <div class="txt_v grid-content">
                  <h1 style="margin-left: 40px">{{t0}}</h1>
                </div>
              </el-col>
              <el-row>
                <el-col :span="8"
                        :offset="2">
                   <div class="grid-content bg-purple-dark1 bg-width">
                    <p class="bg-p-1">Oracle-MySQL</p>
                    <p class="bg-p-2">认证培训</p>
                  </div>
                </el-col>
                <el-col :span="14">
                  <el-row>
                    <el-col :span="18"
                            :offset="2">
                      <div class="grid-content bg-purple-dark1"
                           style="height: 350px;position:relative;">
                        <div class="txt_v grid-content"
                             style="position:absolute;top:0px;text-align: left">
                          <ol>
                            <li v-for="(value,key) in texts"
                                :key="key">
                              <el-row type="flex"
                                      class="row-bg"
                                      justify="center">
                                <el-col :span="24">
                                  <h1>{{value}}</h1>
                                </el-col>
                              </el-row>
                            </li>
                          </ol>
                          <el-row>
                            <el-col :span="24">
                              <div class="grid-content"></div>
                            </el-col>
                          </el-row>

                          <el-row>

                            <!--                                            <button class="btn2">{{btns[1]}}</button>-->
                            <!--                                            <button class="btn3">{{btns[1]}}</button>-->
                            <button class="btn"><a :href="urls[0]">{{btns[0]}}</a></button>&nbsp&nbsp&nbsp&nbsp&nbsp
                            <!--                      <button class="btn2"><a :href="urls[1]">{{btns[1]}}</a></button>&nbsp&nbsp&nbsp&nbsp&nbsp-->
                            <button class="btn2">{{btns[1]}}</button>&nbsp&nbsp&nbsp&nbsp&nbsp
                            <!--<el-button type="danger"><a :href="urls[0]">{{btns[0]}}</a></el-button>&nbsp&nbsp&nbsp&nbsp&nbsp<el-button>
                            <a :href="urls[1]">{{btns[1]}}</a></el-button>-->
                          </el-row>
                        </div>

                      </div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>

          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content container bg-purple-dark1"
                 style="height: 120px;padding: 25px 25px 25px 170px"><img :src="kcgs"
                   alt=""></div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content container">
              <el-row :gutter="40">
                <!--              <ol>-->
                <li v-for="(st,key) in st_list"
                    :key="key">
                  <el-col :span="4"
                          :offset="2">
                    <div class="grid-content"
                         align="center"><img :src="st.st_img"
                           alt=""></div>
                  </el-col>
                </li>
                <!--              </ol>-->
              </el-row>

              <!--学生文字-->
              <el-row :gutter="20">
                <li v-for="(st,key) in st_list"
                    :key="key">
                  <el-col :span="4"
                          :offset="2">
                    <div class="grid-content"
                         align="center">
                      <h1>{{st.st_txt}}</h1></a>
                    </div>
                  </el-col>
                </li>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="4">
          <!--        <el-col :span="24"><div class="grid-content" align="center" style="padding-top: 8px"><h1>{{t1}}</h1></div></el-col>-->
          <el-col :span="24">
            <div class="txt_c b-center-a grid-content" style="margin-left: 160px">{{t1}}<el-col :span="24"
                      :offset="2">
                <!--            <div class="v-line"></div>-->
              </el-col>
            </div>
          </el-col>
        </el-row>

        <!--章节内容-->

        <el-row>
          <el-col :span="24"
                  :offset="2">
            <div class="grid-content bg-purple1">
              <div class="v-l"
                   style="height: 600;"></div>
              <li v-for="(va,key) in kcdg_list"
                  :key="key" style="padding-top: 10px">

                <el-row>
                  <el-col :span="24">
                    <div class="grid-content bg-w">

                      <el-row>
                        <el-col :span="1">
                          <div class="grid-content bg-purple-light1"
                               align="center">
                            <el-col :span="1">
                              <div class="img_v grid-content"
                                   align="center">
                                <img :src="circle">
                              </div>
                            </el-col>
                          </div>
                        </el-col>
                        <el-col :span="23">
                          <div class="grid-content">
                            <el-col :span="3">
                              <div class="grid-content bg-purple-light1"><img :src="va.hcircle"
                                     style="height:35px"></div>
                            </el-col>
                            <el-col :span="18">
                              <div class="txt_v grid-content bg-purple-light1"
                                   style="height: 50px;">
                                <h1>{{va.name}}</h1>
                              </div>
                            </el-col>
                          </div>
                        </el-col>
                      </el-row>

                      <el-row>
                        <!--            章节内容开始-->
                        <el-col :span="1">
                          <div class="grid-content bg-purple1"
                               align="center"></div>
                        </el-col>
                        <el-col :span="23">
                          <div class="grid-content">
                            <el-col :span="3">
                              <div class="grid-content bg-purple1"></div>
                            </el-col>
                            <el-col :span="18">
                              <div class="grid-content bg-purple-light1"
                                   style="letter-spacing: 1px ;">
                                <p class="p-1" v-html="va.text"></p>
                              </div>
                            </el-col>
                          </div>
                        </el-col>
                      </el-row>

                    </div>
                  </el-col>
                </el-row>
                <!--                </el-timeline-item>-->
                <!--加空白行-->
                <el-row>
                  <el-col :span="24">
                    <div class="grid-c-0"></div>
                  </el-col>
                </el-row>

              </li>

              <el-row>
                <el-col :span="24">
                  <div></div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="24">
                  <div class="grid-content"
                       align="center">
                    <!--                  <el-button type="danger"><a :href="urls[2]">{{btns[2]}}</a></el-button>-->
                    <button class="btn"><a :href="urls[2]">{{btns[2]}}</a></button>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <!--              <el-col :span="24"><div class="bg-purple-dark1" align="center"><h1 style="font-family: 微软雅黑">{{t2}}</h1></div></el-col>-->
                <el-col :span="24">
                  <div class="txt_learn bg-purple1"
                       style="height: 90px">{{t2}}</div>
                </el-col>

              </el-row>
              <el-row>
                <el-col :span="22">
                  <div class="grid-content bg-purple-dark1">
                    <el-row :gutter="10">
                      <ol>
                        <li v-for="(v,key) in bm_list"
                            :key="key">
                          <!--                          <template v-if="key===1" >-->
                          <el-col :span="6">
                            <!--                            红色-->
                            <div>
                              <div class="grid-content b-item bg-purple1"
                                   align="center"
                                   style="height: 370px">
                                <!--                            <div v-else class="grid-content bg-purple1 bg-w" align="center" style="height: 320px">-->

                                <!--加空白行-->
                                <el-row>
                                  <el-col :span="24">
                                    <div class="grid-content"></div>
                                  </el-col>
                                </el-row>
                                <div class="item-img">
                                  <img :src="v.img"
                                       alt="">
                                       </div>

                                <div style="margin:0px;padding:10px;">
                                  <p class="color-fff p-3">{{v.name}}</p>
                                </div>
                                <div>
                                  <p v-html="v.text" class="color-fff p-2"></p>
                                </div>

                              </div>

                            </div>
                          </el-col>
                          <!--                          </template>-->
                        </li>
                      </ol>
                    </el-row>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="24">
                  <div></div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="24">
                  <div class="grid-content mb-20 bg-purple1"
                       align="center"
                       style="padding-top: 15px;">
                    <!--                    <el-button type="danger"><a :href="urls[3]">{{btns[3]}}</a></el-button>-->
                    <!--                    点击获取完整大纲-->
                    <button class="btn"><a :href="urls[3]">{{btns[3]}}</a></button>
                  </div>
                </el-col>
              </el-row>

            </div>
          </el-col>
        </el-row>

      </div>

    </div>
  </el-main>
 </div>
  <!--      </el-container>-->
</template>


<script>

import floatingWindow from "@/components/floatingWindow";
var np = "MySql";
export default {
  components: {
    floatingWindow
  },
  data () {
    return {
      texts: [
        "课程名称：Oracle-" + np + "认证培训",
        "开班类型：线上开班",
        "认证等级：OCP",
        "授课方式：线上直播+录播、班级群在线答疑",

      ],
      urls: [
        "learn_MySql",
        "online_info",
        "http://www.51xgf.cn",
        "learn_MySql"
      ],
      btns: [
        "在线咨询",
        "立即报名",
        "点取获取完整大纲",
        "我要学" + np
      ],
      st_list: [{
        st_img: require("@/assets/img/public/people_0.png"),
        st_txt: "在校生"
      }, {
        st_img: require("@/assets/img/public/people_1.png"),
        st_txt: "应届/毕业生"
      }, {
        st_img: require("@/assets/img/public/people_2.png"),
        st_txt: "编程爱好者"
      }, {
        st_img: require("@/assets/img/public/people_3.png"),
        st_txt: "IT工程师"
      }],
      bm_list: [
        {
          img: require("@/assets/img/public/t_0.png"),
          name: np + "语言简单易学",
          text: "MySql语言语法简单，MySql语言<br>" +
            "拥有与C、C++等众多流行语<br>" +
            "言—样的简洁易懂的关键字、<br>" +
            "语法。虚拟机保驾护航，MySql<br>" +
            "程序员无需手动开辟、释放内<br>" +
            "存,这—切都由虚拟机帮你做了。<br>"
        }, {
          img: require("@/assets/img/public/t_1.png"),
          name: np + "程序员好就业",
          text: "官方数据统计，在全球编程<br>" +
            "语言工程师的数量上，MySql<br>" +
            "语言以900万的程序员数量位<br>" +
            "居首位。而且很多软件的开发<br>" +
            "都离不开MySql，因此其程序<br>" +
            "员的数量最多。<br>"
        }, {
          img: require("@/assets/img/public/t_2.png"),
          name: "名企认可的技术",
          text: "淘宝、京东等等著名的购物网<br>" +
            "站,大数据处理都是来自MySql.<br>" +
            "双十—疯狂购物，春节抢票<br>" +
            "数据访问量相当之大，因为<br>" +
            "MySql的存在，—切都变得井然<br>" +
            "有序。服务器的开发，智能家<br>" +
            "居，网站的后台维护等等，都<br>" +
            "需要MySql。<br>"
        }, {
          img: require("@/assets/img/public/t_3.png"),
          name: "就业薪水高",
          text: "据权威部门统计，在本专科专<br>" +
            "业毕业生高薪榜前十中，有6<br>" +
            "个职位属于IT行业，其中又有<br>" +
            "4个职位与MySql开发有关.MySql<br>" +
            "软件工程师薪资相比其他开发<br>" +
            "工程师高出许多,具备2年以上<br>" +
            "工作经验的开发人员年薪平均<br>" +
            "可以达到18万元以上。<br>"
        }],

      kcdg_list: [{
        hcircle: require("@/assets/img/public/hcircle_01.png"),
        name: np + "基础",
        text: "定义变量的范围 <br>" +
          "使用main方法创建可执行的MySql应用程序; <br>" +
          "从命令行运行MySql程序;产生控制台输出; <br>" +
          "导入其他MySql软件包以使其在您的代码中可访问; <br>" +
          "比较和对比MySql的特性和组件，例如∶平台独立性，面向对象，封装等。 <br>"
      }, {
        hcircle: require("@/assets/img/public/hcircle_02.png"),
        name: "使用运算符和决策构造",
        text: "使用MySql运算符;<br>" +
          "使用括号覆盖运算符优先级;<br>" +
          "使用==和equals()测试字符串和其他对象之间的相等性﹔<br>" +
          "创建if和if/else和三元构造;使用switch语句。<br>"
      }, {
        hcircle: require("@/assets/img/public/hcircle_03.png"),
        name: "使用循环构造",
        text: "创建和使用while循环;<br>" +
          "创建和使用for循环，包括增强的for循环;<br>" +
          "创建和使用do/while循环;<br>" +
          "比较循环结构;使用中断并继续。<br>"
      }, {
        hcircle: require("@/assets/img/public/hcircle_04.png"),
        name: "处理继承",
        text: "描述继承及其好处;<br>" +
          "开发利用多态性的代码﹔<br>" +
          "开发覆盖方法的代码﹔<br>" +
          "区分引用的类型和对象的类型，确定何时需要铸造;<br>" +
          "使用super和this来访问对象和构造函数;使用抽象类和接口。<br>"
      },
      //   {
      //   hcircle: require("@/assets/img/public/hcircle_05.png"),
      //   name: "使用MySql API中的选定类",
      //   text: ""
      // }
      ],

      main: "主页>" + np,
      t0: "MySql-" + np + "认证培训",
      t1: "课程大纲",
      t2: "为什么要选择学习" + np,

      back01: require("@/assets/img/MySql/MySql.png"),
      kcgs: require("@/assets/img/public/kcgs.png"),
      circle: require("@/assets/img/public/circle.png"),
    };
  },
  mounted () {
    console.log(this);
    if (this.isMobile) {
      //移动端
      this.$router.replace('/appMySql');
    } else {
      //PC端
      this.$router.replace('/MySql');
    }
  },
}
</script>


<style lang="scss" scoped>
@import "@/assets/css/hry.css";
.mysql {
  .b-item {
    background-color: #fff;
  }
  .b-item:hover {
    background-color: red;
    box-shadow: 1px 1px 15px -1px #000000;
    .item-img{
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .color-fff{
      color: #fff;
    }
  }
  .mb-20{
    margin-bottom: 20px;
  }
}
</style>
