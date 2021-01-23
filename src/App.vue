<template class="top">
  <div id="app">
    <ManaSrc />
  </div>
</template>

<script>
import ManaSrc from './components/ManaSrc.vue'

export default {
  name: 'App',
  components: {
    ManaSrc
  }
}
</script>

<style>
body, html {
  background-color: #15191d;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aabbcc;
  margin-top: 60px;
}
</style>
