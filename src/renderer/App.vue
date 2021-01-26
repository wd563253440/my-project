<template>
  <div id="app">
<!--    <router-view></router-view>-->
    <div>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary" @click="sd" >主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
  import { ipcRenderer } from 'electron'

  export default {
    name: 'my-project',
    methods: {
      sd () {
        console.log('2')
        ipcRenderer.send('sd')
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
