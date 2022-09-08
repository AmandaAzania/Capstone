<template>
     <h1>Single {{this.$route.params.category}}</h1>
     <div class="container">
    <div class="row">
    <!-- <div class="col-4"> -->
<div class="col-4" style="width: 18rem;" v-for="product in products" :key="product.product_Id">
  <img class="card-img-top"  :src="product.imgURL" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{product.title}}</h5>
    <p class="card-text">{{product.description}}</p>
    <p class="card-text">R{{product.price}}</p>
    <router-link :to="{name: 'singleProduct', params:{id: product.product_Id}}" class="btn btn-primary">View</router-link>
    <button @click="this.$store.dispatch('addCart',product[0])">Add to Cart</button>
  </div>
</div>
    </div>
</div>
    <!-- </div> -->


  </template>

<script>
    export default {
        props:['product'],
        mounted(){
            this.$store.dispatch('getProductByCat', this.$route.params.category)
        },
        computed:{
            products(){
                return this.$store.state.products;
            }
        }
    }
</script>

<style scoped>
 
</style>