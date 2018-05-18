<template>
  <div id="app">
    <nav-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Chuck from './components/Chuck'

export default {
  name: 'app',
  components: {
    NavBar,
    Chuck
  }
}
</script>


