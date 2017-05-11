<template>
  <el-row class="tac">
    <el-col :span="4">
   
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <router-link to="/home"><el-menu-item index="1"><i class="el-icon-menu"></i>首页</el-menu-item></router-link>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>设备相关</template>
          <el-menu-item-group>
            <template slot="title">设备信息</template>
            <el-menu-item index="2-1">硬件介绍</el-menu-item>
            <el-menu-item index="2-2">软件介绍</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="设备结构">
            <el-menu-item index="2-3">工作原理</el-menu-item>
            <el-menu-item index="2-4">工作流程</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3"><i class="el-icon-menu"></i>状态</el-menu-item>
        <el-menu-item index="4"><i class="el-icon-setting"></i>关于我们</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="15" :offset="2">

    <router-view></router-view> 

   </el-col >
   <el-col>
    <hr>
    <hr>
    <center>
        <a href="http://v1-cn.vuejs.org/guide/">Vue1.0官方文档&nbsp;&nbsp;</a>
        <a href="http://router.vuejs.org/zh-cn/index.html">Vue-router&nbsp;&nbsp;</a>
        <a href="http://zzesxiao.leanote.com">治电小白菜博客&nbsp;&nbsp;</a>    
        <br>
        Copyright © 2009-2017 治电科技
    </center>
    </el-col >
  </el-row>


</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
a{
  text-decoration: none;
}
</style>
