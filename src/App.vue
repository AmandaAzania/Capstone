<template>
  <navbar/>
  <TopBanner/>
  <div class="min-vh-100">
    <router-view />
  </div>
  <Footer/>
</template>

<script>
import navbar from './components/navbar.vue';
import Footer from './components/footer.vue'
import Infobanner from './components/infobanner.vue';
import TopBanner from './components/topBanner.vue';


export default {
  components: { navbar, Footer, Infobanner, TopBanner },
  name: 'App',
};
</script>