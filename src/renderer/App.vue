<template>
  <div id="app">
    <el-button v-for="item of lists" :key="item.id">{{item}}</el-button>
  </div>
</template>

<script>
  import HelloWorld from './components/WdMarkDown'
  export default {
    name: 'my-project',
    components: {
      HelloWorld
    },
    data () {
      return {
        lists: [1]
      }
    },
    mounted () {
      this.lists = [1, 2, 4]
    }
  }
</script>

<style>
  /* CSS */
</style>
