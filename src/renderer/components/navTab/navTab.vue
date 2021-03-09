<template>
  <div class="loading-box">Loading...</div>
</template>
<script>
  export default {
    name: 'navTab',
    props: {
      level: ''
    },
    data () {
      return {
        level: ''
      }
    },
    methods: {
      a () {
        console.log(this.level)
      }
    }

  }
</script>