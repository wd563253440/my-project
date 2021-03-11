<template>
  <div>
    <div class="nav-top-left">

    </div>
    <div class="nav-top" @click="level1_init">
    </div>
    <div class="nav-left">
      <div class="nav-level" v-for='(item,index) in nav_length' :key="item.index" @click="foldNav(index)">
        <a href="#">
          <li>
            <div class='nav-level2' v-if="level1[index].length > 1">{{level1[index][1][0]}}</div>
            <span class="nav-span">{{level1[index][0]}}</span>
          </li>
        </a>
      </div>
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
      nav_length: 0,
      level1: ''
    }
  },
  mounted () {
    this.nav_length = navTabData.navTabData2.length
    this.level1 = navTabData.navTabData2
  },
  methods: {
    level1_init () {
      console.log(this.level1.length)
    },
    foldNav (index) {
      console.log(this.level1[index])
    }
  }
}
</script>
<style>
.nav-span {
  color:#fff;
}
.nav-level2 {
  display: none;
}
.nav-level {
  height: 40px;
	line-height: 40px;
	font-size: 14px;
	color: #303133;
	padding: 0 20px;
	list-style: none;
	cursor: pointer;
	position: relative;
}
.nav-level:hover {
  background-color: grey;
}
.nav-level a {
    text-decoration:none;
  }
.nav-top-left {
  width: 200px !important;
  height: 40px;
  background-color:azure;
  overflow: hidden; 
}
.nav-left::-webkit-scrollbar {
  width: 4px;
  background-color: aqua;    
  /*height: 4px;*/
}
.nav-left::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background: rgba(0,0,0,0.2);
}
.nav-left::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  background: rgba(0,0,0,0.1);

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
  font-size: 12px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow-x: hidden;
  margin-top: 40px;
}

</style>