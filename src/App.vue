<template>
  <navbar/>
  <TopBanner/>
  <div class="min-vh-100">
    <router-view />
    <cart/>
  </div>
  <Contact/>
  <Footer/>
</template>

<script>
import navbar from './components/navbar.vue';
import Footer from './components/footer.vue'
import Infobanner from './components/infobanner.vue';
import TopBanner from './components/topBanner.vue';
import cart from './components/cart.vue';
import modal from './components/ModalComponent.vue'
import Contact from './views/contact.vue';


export default {
  components: { navbar, Footer, Infobanner, TopBanner, cart, modal, Contact },
  name: 'App',
};
</script>