<template>
  <div id="app">
    <p>颜色选择</p>
    <color-pick/>
  </div>
</template>

<script>
import colorPick from './components/color.vue'

export default {
  name: 'App',
  components: {
    colorPick
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
