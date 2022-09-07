<template>
    <h1>product with the id of {{this.id}}</h1>
    <div class="container">
   <div class="row" v-if="product">
   <!-- <div class="col-4"> -->

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
   <!-- </div> -->

 </template>

<script>
    export default {
    props:['id'],
       mounted(){
           this.$store.dispatch('getProduct', this.id)
       },
       methods : {
            add(){
                this.$store.dispatch('addCart',this.id)
            }
        },
       computed:{
           product(){
               return this.$store.state.product;
           }
       }
   }
</script>