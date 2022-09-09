<template>
  
    <div class="mainbanner container-fluid">
      <div class="row">
        <div class="col-md-4 col-xl-4">
          <img src="https://i.postimg.cc/6qBMhBn0/banner.jpg" class="img-fluid" alt="main banner" />
        </div>
  
        <div class="col-md-4 col-xl-4 d-flex flex-column justify-content-center">
          <h6 id="quote">	&hearts;beautifull is not a size</h6>
          <h6 id="quote">	&hearts;Your body love you, and we love your body</h6>
          <h6 id="quote">	&hearts;Being differe is your super power</h6>
          <h6 id="quote">	&hearts;you are completely radient</h6>
          <h6 id="quote">	&hearts;life is too short to be unkind to yourself</h6>
          <h1 class="hash">#LaetaForAll</h1>
          <h1 class="collection">
            <span class="new">NEW</span> <span id="collection">collection</span>
          </h1>
          <h1 class="land">Just landed!!!</h1>
          <h4 class="inspire">.Inspired by all .Celebrating all</h4>
         <router-link to="/allProducts"> <button class="btn-grad">Shop the looks</button></router-link>
        </div>

  
        <div class="col-md-4">
          <img
            src="https://i.postimg.cc/7P0Zjw7V/banner1.jpg" class="img-fluid"
            alt="main banner"
          />
        </div>
      </div>
    </div>
    <Catergory/>
  </template>
  
  <script>
import Catergory from './catergory.vue';


  export default {

    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("getProducts");
    },
    components: { Catergory }
};
  </script>
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&family=Oleo+Script+Swash+Caps&family=Rubik+Moonrocks&display=swap");
  #collection {
    font-family: "Koulen", cursive;
    font-family: "Macondo", cursive;
    font-family: "Oleo Script Swash Caps", cursive;
    font-family: "Rubik Moonrocks", cursive;
    color: purple;
  }
  .btn-grad {
    background-image: linear-gradient(
      to right,
      #da22ff 0%,
      #9733ee 51%,
      #da22ff 100%
    );
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
  }
  .btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  a:active {
  background-color: #34D399;
}
a:hover{
    text-decoration: none;
}
  </style>