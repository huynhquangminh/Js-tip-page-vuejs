<template>
  <div data-app id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'
export default {
  name: 'App',
  components: {
    Header, 
    Footer
  }
}
</script>

<style>
#app {
  font: 400 14px/1.5 "Roboto",sans-serif;
  /* font-family: Roboto, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
