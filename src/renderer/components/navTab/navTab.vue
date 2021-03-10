<template>
  <div class="loading-box">
    
  </div>
</template>
<script>
  export default {
    name: 'navTab'
  }
</script>
<style>
  .loading-box{
    -webkit-transition: width .28s;
    transition: width .28s;
    width: 210px!important;
    background-color: #304156;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden
  }
</style>