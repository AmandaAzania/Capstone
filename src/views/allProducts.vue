<template>
    <h1>Shop our looks</h1>
    <div class="container">
   <div class="row" v-if="products">
    <input type="search" placeholder="Search Products" class="search w-75  background:pink  mt-4 mb-3" v-model="search">
    <div v-for="product in products" 
    :key="product.prodID" 
    :product="product">
  
<div class="col-4" style="width: 18rem;">
 <img class="card-img-top"  :src="product.imgURL" alt="Card image cap">
 <div class="card-body">
   <h5 class="card-title">{{product.title}}</h5>
   <p class="card-text">{{product.description}}</p>
   <p class="card-text">R{{product.price}}</p>
   <router-link to="/" class="btn btn-primary">Go Back</router-link>
   <button @click="this.$store.dispatch('addCart',product[0])">Add to Cart</button>
 </div>
</div>
   </div>
</div>
</div>
   <!-- </div> -->

 </template>

<script>
    export default {
  name: 'singleproducts',
  props:["products"],
  data(){
    return {
      search: ''
    }
  },
    computed:{
        products(){
            return this.$store.state.products;
        },
        products() {
            return this.$store.state.products?.filter(products => { let isMatch = true; if (!products.title.toLowerCase().includes(this.search.toLowerCase())) { isMatch = false; } return isMatch });
        },
    },
    mounted(){
        this.$store.dispatch("getProducts");
        this.$store.commit("setProduct", null);
        this.$store.commit("setProducts", null);
    },
}
</script>

<style scoped>

</style>