<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu   :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><strong>治电科技</strong></el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="4">
      <!-- <br> -->
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <router-link to="/home"><el-menu-item index="1"><i class="el-icon-menu"></i>首页</el-menu-item></router-link>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>设备相关</template>
          <el-menu-item-group>
            <template slot="title">设备信息</template>
            <router-link to="/hardware">
              <el-menu-item index="2-1">硬件介绍</el-menu-item>
            </router-link>
            <router-link to="/software">
              <el-menu-item index="2-2">软件介绍</el-menu-item>
            </router-link>
          </el-menu-item-group>
          <el-menu-item-group title="设备结构">
            <router-link to="/workdoc">
              <el-menu-item index="2-3">工作原理</el-menu-item>
            </router-link>
            <router-link to="/workrun">
              <el-menu-item index="2-4">工作流程</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <router-link to="/status">
          <el-menu-item index="3"><i class="el-icon-menu"></i>状态</el-menu-item>
        </router-link>
        <router-link to="/aboutus">
          <el-menu-item index="4"><i class="el-icon-setting"></i>关于我们</el-menu-item>
        </router-link>
        
      </el-menu>
    </el-col>
    <el-col :span="15" :offset="2">
    <!-- <br> -->
    <router-view></router-view> 

   </el-col >
   <el-col :span="24">
    <br><br><br>
    <hr>
    <hr>
    <center>
        <el-button><a href="http://v1-cn.vuejs.org/guide/">Vue1.0官方文档&nbsp;&nbsp;</a></el-button>
        <el-button> <a href="http://router.vuejs.org/zh-cn/index.html">Vue-router&nbsp;&nbsp;</a></el-button>
        <el-button><a href="http://zzesxiao.leanote.com">治电小白菜博客&nbsp;&nbsp;</a></el-button>
       
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
