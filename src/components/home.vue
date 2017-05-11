<template>
 
<el-row>
 
		<el-col :span="24"  >
			<el-carousel :interval="4000" type="card" height="200px">
			  <el-carousel-item >
			     <img src="../assets/1.jpg" alt="">
			  </el-carousel-item>
			  <el-carousel-item >
			     <img src="../assets/2.jpg" alt="">
			  </el-carousel-item>
			  <el-carousel-item >
			     <img src="../assets/3.jpg" alt="">
			  </el-carousel-item>
			  <el-carousel-item >
			     <img src="../assets/4.jpg" alt="">
			  </el-carousel-item>
			</el-carousel>
		</el-col>

		<el-col :span="24" >
		<br><br>
			<el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <span style="line-height: 36px;">治电科技宠物小窝项目</span>
			    <el-button style="float: right;" type="primary">治电官网</el-button>
			  </div>
			  <div  class="text item">
			     欢迎来到治电科技
			  </div>
			  <div  class="text item">
			     【求真 务实 诚信 合作】
			  </div>
			  <div  class="text item">
			     科技使人进步，组织需要大家
			  </div>
			</el-card>
		</el-col>
 
	
	
</el-row>	
</template>

<style>
   .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .box-card {
    width: 850px;
  }


  /*走马灯*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>