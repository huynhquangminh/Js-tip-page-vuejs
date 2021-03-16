<template>
  <div>
    <Header />
    <Nav />
  </div>
</template>
<script>
import Nav from  './Nav.vue'
import Header from './Header.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Header
  }
}
</script>