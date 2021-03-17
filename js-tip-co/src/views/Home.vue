<template>
  <div>
    <Header />
    <Nav />
    <Footer />
  </div>
</template>
<script>
import Nav from  './Nav.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Header, 
    Footer
  }
}
</script>