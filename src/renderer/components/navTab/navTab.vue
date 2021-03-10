<template>
  <div>
    <div class="nav-top-left">

    </div>
    <div class="nav-top">

    </div>
    <div class="nav-left">
      
    </div>
  </div>
</template>
<script>
import navTabData from '../../../../test/navTab/navTabData'
console.log(navTabData.navTabData)
export default {
  name: 'navTab',
  data () {
    return {
      navTabData: ''
    }
  },
  mounted () {
    this.navTabData = navTabData
  }
}
</script>
<style>
.nav-top-left {
  width: 200px !important;
  height: 40px;
  background-color: lawngreen;
}
.nav-top {
  height: 40px !important;
  background-color:grey;
  z-index: 1001;
  margin-left: 200px;
  margin-top: -40px;
  overflow: hidden;
}
.nav-left {
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
  width: 200px !important;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  margin-top: 40px;
}

</style>