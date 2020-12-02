<template>
  <el-main>
<!--    第一行文字开始-->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-row>
            <el-col :span="24" align="center"><div class="txt_v bg-purple"><p>{{tit}}</p></div></el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
<!--    第一行文字结束-->

    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple">


                <li v-for="tl in txt_l_list">
                  <el-row :gutter="20">
                    <el-col :span="24">
                      <div class="grid-content bg-purple">

                        <el-row :gutter="20">
                          <el-col :span="24">
                            <div class="txt_v grid-content bg-purple">
                              <h1>{{tl.title_txt}}</h1>
                            </div>
                          </el-col>
                        </el-row>

                        <el-row :gutter="20">
                          <el-col :span="24">
                            <div class="grid-content bg-purple" style="height: 200px">
                              <p>{{tl.nl_txt}}
                              </p>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>
                  </el-row>
                </li>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple" align="center">
                <img :src="circle" alt="">
              </div>
              <el-row>
                <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
              </el-row>

              <div class="grid-content bg-purple" align="center">
                <el-row>
                  <el-button type="danger">{{bnt}}</el-button>
                </el-row>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="grid-content bg-purple">

                <li v-for="tl in txt_r_list">
                  <el-row :gutter="20">
                    <el-col :span="24">
                      <div class="grid-content bg-purple">

                        <el-row :gutter="20">
                          <el-col :span="24">
                            <div class="txt_v grid-content bg-purple">
                              <h1>{{tl.title_txt}}</h1>
                            </div>
                          </el-col>
                        </el-row>

                        <el-row :gutter="20">
                          <el-col :span="24">
                            <div class="grid-content bg-purple" style="height: 200px">
                              <p>{{tl.nl_txt}}
                              </p>
                            </div>
                          </el-col>
                        </el-row>

                      </div>
                    </el-col>
                  </el-row>
                </li>

              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>



  </el-main>
</template>


<script>
  export default {
    data() {
      return {
        tit: "为什么选择学Oracle",
        bnt:"我要学Oracle",
        infourl:"http://www.51xgf.cn",

        txt_l_list:[{
          title_txt:"1.不可或缺",
          nl_txt:"有80%企业在使用Oracle技术，全球十人银行均采用了Oracle应用系统，在中国，排名前20位的银行都 在使用Oracle技术。在通信领域，全球20家顶级通信公司至部都在使用Oracle应用产品。在中国，所有的电信营运商（如中国移动，中国 电信，中国联通等）都在使用 Oracle技术。"
        },{
          title_txt:"3.就业多，薪资高",
          nl_txt:"Oracle数据库管理方向，Oracle开发及系统架构方向， Oracle数据建模数据仓库等方向。职业对于oracle DBA来说，技术是敲门砖，实践经验是身价的保障，所以DBA也是IT行业为数不多的“越老越值钱”的职业之一"
        }],

        txt_r_list:[{
          title_txt:"2.人才缺口大",
          nl_txt:"在中国前100大的IT公司（HP，IBM，毕博，埃森哲，东软，宝信等）， 全部使用Oracle技术，各大企业对Oracle的人才需求非常的大。"
        },{
          title_txt:"4.发展潜力大",
          nl_txt:"Oracle认证大师（OCM）是Oracle认证大师，是Oracle认证的最高级别， 是对数据库从业人员的技术，知识和操作技能的最高级别的认可，IT界顶级认证之一。 Oracle OCM是解决最困难的技术难题和最复杂的系统故障的最佳Oracle专家人选。"
        }],
        circle: require("@/assets/img/public/test.png")
      };
    }
  };
</script>


<style>
  .el-main{
    padding:30px;
  }
  .txt_v{
    display: inline-block;
    vertical-align: middle;
    font-family: 微软雅黑;
    font-size: x-large;
  }
  .txt_v{
    /*position: absolute;*/
    display: table-cell;
    /*padding: 6px;*/
    vertical-align: center;
    font-family: 微软雅黑;
    font-size: x-large;
    /*line-height:20px;*/

  }
  /*.el-row {*/
  /*  margin-bottom: 20px;*/
  /*&:last-child {*/
  /*   margin-bottom: 0;*/
  /* }*/
  /*}*/
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    /*background: #99a9bf;*/
  }
  .bg-purple {
    /*background: #d3dce6;*/
  }
  .bg-purple-light {
    /*background: #e5e9f2;*/
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    /*background-color: #f9fafc;*/
  }
</style>
