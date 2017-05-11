<template>
	<el-collapse v-model="activeNames" @change="handleChange">
	  <el-collapse-item title="Nodejs net模块" name="1">
	    <div>用Nodejs的net模块，创建TCP服务器，获取单片机通过wifi传来的信息，并解析
	    json数据存入数据库</div>
	    <div>net模块创建服务器，与单片机建立连接后，即为透传模式。</div>
	  </el-collapse-item>
	  <el-collapse-item title="Nodejs express模块" name="2">
	    <div>express提供API接口，操作数据库</div>
	    <div>提供接口便于前端调用，取出数据库中数据进行表格绘制。提供手表接口便于手表的显示。提供控制接口，便于手机app和手表的远程控制。</div>
	  </el-collapse-item>
	  <el-collapse-item title="Cortana控制" name="3">
	    <div>通过Cortana完成对单片机的控制</div>
	    <div>通过C#编写相关串口发送命令行程序</div>
	    <div>达到呼唤小娜->开启程序->发送命令->完成控制的目的。</div>
	  </el-collapse-item>
	  <el-collapse-item title="Maibu手表程序" name="4">
	    <div>根据Maibu官方文档，进行Maibu程序编写</div>
	    <div>通过web request 获取相关数据，通过web request 请求控制接口。</div>
	  </el-collapse-item>
	</el-collapse>
</template>

<style>
	
</style>

<script>
	export default {
	    data() {
	      return {
	        activeNames: ['1']
	      };
	    }
	  }
</script>