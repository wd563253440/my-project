<template>
  <div id="app">
    <!-- <el-button v-for="item of lists" :key="item.id">{{item}}</el-button> -->
    <!-- <HelloWorld></HelloWorld> -->
    <navTab></navTab>
  </div>
</template>

<script>
  import HelloWorld from './components/WdMarkDown'
  import navTab from './components/navTab/navTab'
  export default {
    name: 'my-project',
    components: {
      HelloWorld,
      navTab
    }
  }
</script>

<style>
  /* CSS */
</style>
