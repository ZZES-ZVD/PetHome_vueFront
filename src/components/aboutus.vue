<template>
  <el-row>
    <el-col :span="24">
      <el-carousel indicator-position="outside">
        <el-carousel-item >
           <img src="../assets/zzes1.png" class="imgzzes" alt="">
        </el-carousel-item>
        <el-carousel-item >
           <img src="../assets/zzes2.png" class="imgzzes" alt="">
        </el-carousel-item>
        <el-carousel-item >
           <img src="../assets/zzes3.jpg" class="imgzzes" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col :span="24">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">治电科技任治中</span>
        </div>
        <div   class="text item">
          <strong>项目</strong>
          <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="项目"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
          </el-table>

          <strong>个人信息</strong>
          <el-table
                :data="table2Data"
                style="width: 100%">
                <el-table-column
                  prop="name"
                  label="名称"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  >
                </el-table-column>
 
          </el-table>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .imgzzes{
    width: 100%;
    height: 100%;
  }
</style>

<script>
  export default {
       data() {
         return {
           tableData: [{
             date: '2017-03-13',
             name: '治电科技简易物联网服务端与客户端',
             address: 'https://github.com/ZZES-ZVD/ZZES-iot'
           }, {
             date: '2013-04-02',
             name: '治电科技简易物联网宠物小窝环境监测 ',
             address: 'https://github.com/ZZES-ZVD/PetHome'
           }],
           table2Data: [{
             name: 'Github',
             address: 'https://github.com/klren0312',
             
           }, {
             name: '简书',
             address: 'http://www.jianshu.com/u/5bbe008f9b84 ',
 
           }, {
             name: '邮箱',
             address: 'kuanglong0312@sina.com',
 
           }]
         }
       }
     }
</script>