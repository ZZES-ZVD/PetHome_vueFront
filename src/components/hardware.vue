<template>
	<el-row :gutter="20">
	  <el-col :span="6"   :offset="0">
	    <el-card :body-style="{ padding: '0px' }" >
	      <img src="../assets/stm32.jpg" class="image">
	      <div style="padding: 14px;">
	        <span>STM32F103微处理器</span>
	         
	      </div>
	    </el-card>
	  </el-col>
	  <el-col :span="6"   :offset="0">
	    <el-card :body-style="{ padding: '0px' }">
	      <img src="../assets/esp8266.jpg" class="image">
	      <div style="padding: 14px;">
	        <span>esp8266-01 wifi模块</span>
	        
	      </div>
	    </el-card>
	  </el-col>
	  <el-col :span="6"   :offset="0">
	    <el-card :body-style="{ padding: '0px' }">
	      <img src="../assets/ble.jpg" class="image">
	      <div style="padding: 14px;">
	        <span>HC-05蓝牙低功耗模块</span>
	         
	      </div>
	    </el-card>
	  </el-col>
	  <el-col :span="6"   :offset="0">
	    <el-card :body-style="{ padding: '0px' }">
	      <img src="../assets/sht20.jpg" class="image">
	      <div style="padding: 14px;">
	        <span>sht20温湿度传感器</span>
	         
	      </div>
	    </el-card>
	  </el-col>

	  <el-col :span="6"   :offset="0">
	    <el-card :body-style="{ padding: '0px' }">
	      <img src="../assets/renti.jpg" class="image">
	      <div style="padding: 14px;">
	        <span>HC-SR501人体红外传感器</span>
	         
	      </div>
	    </el-card>
	  </el-col>
	  <el-col :span="6"   :offset="0">
	    <el-card :body-style="{ padding: '0px' }">
	      <img src="../assets/tcrt5000.jpg" class="image">
	      <div style="padding: 14px;">
	        <span>tcrt5000红外对管传感器</span>
	         
	      </div>
	    </el-card>
	  </el-col>
	  <el-col :span="6"   :offset="0">
	    <el-card :body-style="{ padding: '0px' }">
	      <img src="../assets/fengshan.jpg" class="image">
	      <div style="padding: 14px;">
	        <span>散热排风扇</span>
	         
	      </div>
	    </el-card>
	  </el-col>
	  <el-col :span="6"   :offset="0">
	    <el-card :body-style="{ padding: '0px' }">
	      <img src="../assets/duoji.jpg" class="image">
	      <div style="padding: 14px;">
	        <span>伺服舵机</span>
	         
	      </div>
	    </el-card>
	  </el-col>		  
	</el-row>
</template>

<style>
	 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
 